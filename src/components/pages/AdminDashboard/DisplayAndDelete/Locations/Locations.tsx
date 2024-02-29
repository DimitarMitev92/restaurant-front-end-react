import {
  AdminButtons,
  StyledRemoveButton,
} from "../../../../MealHolder/Meal/Meal.style";
import EmptyList from "../../../../EmptyList/EmptyList";
import {
  AddressCard,
  AddressText,
  UserAddressesWrapper,
} from "../../../Profile/UserAddresses/UserAddresses.style";
import { LocationDataApi } from "../../../../../static/interfaces";
import { LocationsProps } from "../../AdminDashboard.static";
import { PulseLoader } from "react-spinners";
import { useLocationLogic } from "./Location.logic";

export const Locations: React.FC<LocationsProps> = ({ onDelete }) => {
  const { locations, isLoading, handleDeleteLocation } =
    useLocationLogic(onDelete);

  if (isLoading) {
    return <PulseLoader color="var(--color-green)" size={5} />;
  }

  if (locations.length === 0) {
    return <EmptyList message="No locations available" />;
  }

  return (
    <UserAddressesWrapper>
      {locations.map((location: LocationDataApi) => (
        <AddressCard key={location.id}>
          <AddressText>{location.name}</AddressText>
          <AdminButtons>
            <StyledRemoveButton
              onClick={() => handleDeleteLocation(location.id)}
            />
          </AdminButtons>
        </AddressCard>
      ))}
    </UserAddressesWrapper>
  );
};
