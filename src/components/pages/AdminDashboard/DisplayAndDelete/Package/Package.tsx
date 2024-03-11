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
import { DeletePackagePopUp } from "../../../../PopUp/DeletePackagePopUp";
import { usePopupContext } from "../../../../../context/PopupContext";

export const Packages: React.FC<PackagesProps> = () => {
  const { packages, isLoading, handleDeletePackage, handleCancelDelete } =
    usePackage();

  const { isDeletePackagePopUpVisible } = usePopupContext();

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
              onClick={() => handleDeletePackage()}
            ></StyledRemoveButton>
          </AdminButtons>
          {isDeletePackagePopUpVisible && (
            <DeletePackagePopUp
              onCancel={handleCancelDelete}
              packageId={pack.id}
            />
          )}
        </AddressCard>
      ))}
    </UserAddressesWrapper>
  );
};
