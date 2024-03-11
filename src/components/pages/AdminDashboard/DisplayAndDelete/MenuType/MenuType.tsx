import { AdminButtons, StyledRemoveButton } from "../../../../Meal/Meal.style";
import EmptyList from "../../../../EmptyList/EmptyList";
import {
  AddressCard,
  AddressText,
  UserAddressesWrapper,
} from "../../../Profile/UserAddresses/UserAddresses.style";
import { MenuTypeDataApi } from "../../../../../static/interfaces";
import { MenuTypesProps } from "../../AdminDashboard.static";
import { PulseLoader } from "react-spinners";
import { useMenuType } from "./MenuType.logic";
import { usePopupContext } from "../../../../../context/PopupContext";
import { DeleteMenuTypePopUp } from "../../../../PopUp/DeleteMenuTypePopUp";

export const MenuTypes: React.FC<MenuTypesProps> = () => {
  const { menuTypes, isLoading, handleDeleteMenuType, handleCancelDelete } =
    useMenuType();

  const { isDeleteMenuTypePopUpVisible } = usePopupContext();

  if (isLoading) {
    return <PulseLoader color="var(--color-green)" size={5} />;
  }

  if (menuTypes.length === 0) {
    return <EmptyList message="No menu types available" />;
  }

  return (
    <UserAddressesWrapper>
      {menuTypes.map((menuType: MenuTypeDataApi) => (
        <AddressCard key={menuType.id}>
          <AddressText>{menuType.type}</AddressText>
          <AdminButtons>
            <StyledRemoveButton
              onClick={() => handleDeleteMenuType()}
            ></StyledRemoveButton>
          </AdminButtons>
          {isDeleteMenuTypePopUpVisible && (
            <DeleteMenuTypePopUp
              onCancel={handleCancelDelete}
              menuTypeId={menuType.id}
            />
          )}
        </AddressCard>
      ))}
    </UserAddressesWrapper>
  );
};
