import { useEffect, useState } from "react";
import { useAuth } from "../../../../context/AuthProvider";
import { AddressDataApi } from "./UserAddresses.static";
import { addressService } from "../../../../services/addressService";

export const useUserAddresses = () => {
  const { user } = useAuth();
  const userId = user?.user.id || "";

  const [addresses, setAddresses] = useState<AddressDataApi[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const [triggerDelete, setTriggerDelete] = useState(false);

  useEffect(() => {
    const fetchAddressesByUserId = async () => {
      try {
        setIsLoading(true);
        const addresses = await addressService.fetchAddressesByUserId(userId);
        setAddresses(addresses);
      } catch (error) {
        setAddresses([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAddressesByUserId();
  }, [userId, triggerDelete]);

  const handleDeleteAddress = async (addressId: string) => {
    try {
      const isConfirmed = window.confirm(
        "Are you sure you want to delete this address?"
      );
      if (isConfirmed) {
        await addressService.deleteSoft(addressId);
        setTriggerDelete((prev) => !prev);
      }
    } catch (error) {
      console.error("Error deleting address:", error);
    }
  };

  return {
    addresses,
    isLoading,
    handleDeleteAddress,
  };
};
