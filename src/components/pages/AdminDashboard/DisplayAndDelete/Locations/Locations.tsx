import { AdminButtons, StyledRemoveButton } from "../../../../Meal/Meal.style";
import EmptyList from "../../../../EmptyList/EmptyList";
import {
  AddressCard,
  AddressText,
  UserAddressesWrapper,
} from "../../../Profile/UserAddresses/UserAddresses.style";
import { LocationDataApi } from "../../../../../static/interfaces";
import { LocationsProps } from "../../AdminDashboard.static";
import { PulseLoader } from "react-spinners";
import { useLocations } from "./Locations.logic";
import { usePopupContext } from "../../../../../context/PopupContext";
import { DeleteLocationPopUp } from "../../../../PopUp/DeleteLocationPopUp";

export const Locations: React.FC<LocationsProps> = () => {
  const { locations, isLoading, handleDeleteLocation, handleCancelDelete } =
    useLocations();

  const { isDeleteLocationPopUpVisible } = usePopupContext();

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
            <StyledRemoveButton onClick={() => handleDeleteLocation()} />
          </AdminButtons>
          {isDeleteLocationPopUpVisible && (
            <DeleteLocationPopUp
              onCancel={handleCancelDelete}
              locationId={location.id}
            />
          )}
        </AddressCard>
      ))}
    </UserAddressesWrapper>
  );
};
