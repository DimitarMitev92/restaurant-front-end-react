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

export const UserAddresses = () => {
  const { user } = useAuth();
  const userId = user?.user.id || "";

  const [addresses, setAddresses] = useState<AddressDataApi[]>([]);

  const [triggerDelete, setTriggerDelete] = useState(false);

  useEffect(() => {
    const fetchAddressesByUserId = async () => {
      try {
        const addresses = await addressService.fetchAddressesByUserId(userId);
        setAddresses(addresses);
      } catch (error) {
        setAddresses([]);
      }
    };
    fetchAddressesByUserId();
  }, [userId, triggerDelete]);

  const handleDeleteAddress = async (addressId: string) => {
    try {
      const data = await addressService.deleteSoft(addressId);
      setTriggerDelete((prev) => !prev);
      confirm(data.message);
    } catch (error) {
      console.error("Error deleting address:", error);
    }
  };

  if (addresses.length === 0) {
    return <EmptyList message="No addresses available" />;
  }

  return (
    <UserAddressesWrapper>
      {addresses.map((address: AddressDataApi) => (
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
