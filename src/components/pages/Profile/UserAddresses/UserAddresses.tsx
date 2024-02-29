import {
  AdminButtons,
  StyledRemoveButton,
} from "../../../MealHolder/Meal/Meal.style";
import { AddressDataApi } from "./UserAddresses.static";
import {
  AddressCard,
  AddressText,
  UserAddressesWrapper,
} from "./UserAddresses.style";
import EmptyList from "../../../EmptyList/EmptyList";
import PulseLoader from "react-spinners/PulseLoader";
import { useUserAddresses } from "./UserAddresses.logic";

export const UserAddresses = () => {
  const { addresses, isLoading, handleDeleteAddress } = useUserAddresses();

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
