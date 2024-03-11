import { AdminButtons, StyledRemoveButton } from "../../../../Meal/Meal.style";
import EmptyList from "../../../../EmptyList/EmptyList";
import {
  AddressCard,
  AddressText,
  UserAddressesWrapper,
} from "../../../Profile/UserAddresses/UserAddresses.style";
import { PackageDataApi } from "../../../../../static/interfaces";
import { PackagesProps } from "../../AdminDashboard.static";
import { PulseLoader } from "react-spinners";
import { usePackage } from "./Package.logic";

export const Packages: React.FC<PackagesProps> = ({ onDelete }) => {
  const { packages, isLoading, handleDeletePackage } = usePackage(onDelete);

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
          <AddressText>
            {pack.type} - {pack.price.toFixed(2)}
          </AddressText>
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
