import {
  AdminButtons,
  StyledRemoveButton,
} from "../../../MealHolder/Meal/Meal.style";
import { useEffect, useState } from "react";
import EmptyList from "../../../EmptyList/EmptyList";
import {
  AddressCard,
  AddressText,
  UserAddressesWrapper,
} from "../../Profile/UserAddresses/UserAddresses.style";
import { packageService } from "../../../../services/packageService";
import { PackageDataApi } from "../../../../static/interfaces";
import { PackagesProps } from "../AdminDashboard.static";
import { PulseLoader } from "react-spinners";

export const Packages: React.FC<PackagesProps> = ({ onDelete }) => {
  const [packages, setPackages] = useState<PackageDataApi[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [triggerDelete, setTriggerDelete] = useState(false);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        setIsLoading(true);
        const packages = await packageService.fetchPackages();
        setPackages(packages);
      } catch (error) {
        setPackages([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPackages();
  }, [triggerDelete]);

  const handleDeletePackage = async (packageId: string) => {
    try {
      const isConfirmed = window.confirm(
        "Are you sure you want to delete this package?"
      );

      if (isConfirmed) {
        await packageService.deletePackagesById(packageId);
        setTriggerDelete((prev) => !prev);
        onDelete(packageId);
      }
    } catch (error) {
      console.error("Error deleting package:", error);
    }
  };

  if (isLoading) {
    return <PulseLoader color="var(--color-green)" size={5} />;
  }

  if (packages.length === 0) {
    return <EmptyList message="No packages available" />;
  }

  return (
    <UserAddressesWrapper>
      {packages.map((pack: PackageDataApi) => (
        <AddressCard key={pack.id}>
          <AddressText>{pack.type}</AddressText>
          <AddressText>{pack.price}</AddressText>
          <AdminButtons>
            <StyledRemoveButton
              onClick={() => handleDeletePackage(pack.id)}
            ></StyledRemoveButton>
          </AdminButtons>
        </AddressCard>
      ))}
    </UserAddressesWrapper>
  );
};
