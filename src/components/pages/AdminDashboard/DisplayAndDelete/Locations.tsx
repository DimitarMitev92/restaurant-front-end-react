import {
  AdminButtons,
  StyledRemoveButton,
} from "../../../MealHolder/Meal/Meal.style";
import { useEffect, useState } from "react";
import EmptyList from "../../../EmptyList/EmptyList";
import { locationService } from "../../../../services/locationService";
import {
  AddressCard,
  AddressText,
  UserAddressesWrapper,
} from "../../Profile/UserAddresses/UserAddresses.style";
import { LocationDataApi } from "../../../../static/interfaces";
import { LocationsProps } from "../AdminDashboard.static";
import { PulseLoader } from "react-spinners";

export const Locations: React.FC<LocationsProps> = ({ onDelete }) => {
  const [locations, setLocations] = useState<LocationDataApi[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [triggerDelete, setTriggerDelete] = useState(false);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        setIsLoading(true);
        const locations = await locationService.fetchLocations();
        setLocations(locations);
      } catch (error) {
        setLocations([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchLocations();
  }, [triggerDelete]);

  const handleDeleteLocation = async (locationId: string) => {
    try {
      const isConfirmed = window.confirm(
        "Are you sure you want to delete this location?"
      );

      if (isConfirmed) {
        await locationService.deleteLocationById(locationId);
        setTriggerDelete((prev) => !prev);
        onDelete(locationId);
      }
    } catch (error) {
      console.error("Error deleting location:", error);
    }
  };

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
