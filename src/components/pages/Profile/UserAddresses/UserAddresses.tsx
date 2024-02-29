import { useAuth } from "../../../../context/AuthProvider";
import { AdminButtons, StyledRemoveButton } from "../../../Meal/Meal.style";
import { AddressDataApi } from "./UserAddresses.static";
import {
  AddressCard,
  AddressText,
  UserAddressesWrapper,
} from "./UserAddresses.style";
import { addressService } from "../../../../services/addressService";
import { useEffect, useState } from "react";
import EmptyList from "../../../EmptyList/EmptyList";
import PulseLoader from "react-spinners/PulseLoader";

export const UserAddresses = () => {
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
        const data = await addressService.deleteSoft(addressId);
        setTriggerDelete((prev) => !prev);
      }
    } catch (error) {
      console.error("Error deleting address:", error);
    }
  };

  return (
    <UserAddressesWrapper>
      {isLoading && <PulseLoader color="var(--color-green)" size={12} />}
      {!isLoading && addresses.length === 0 && (
        <EmptyList message="No addresses available" />
      )}
      {!isLoading &&
        addresses.map((address: AddressDataApi) => (
          <AddressCard key={address.id}>
            <AddressText>{address.address}</AddressText>
            <AdminButtons>
              <StyledRemoveButton
                onClick={() => handleDeleteAddress(address.id)}
              ></StyledRemoveButton>
            </AdminButtons>
          </AddressCard>
        ))}
    </UserAddressesWrapper>
  );
};
