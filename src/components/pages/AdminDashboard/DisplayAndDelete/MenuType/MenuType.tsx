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

export const MenuTypes: React.FC<MenuTypesProps> = ({ onDelete }) => {
  const { menuTypes, isLoading, handleDeleteMenuType } = useMenuType(onDelete);

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
              onClick={() => handleDeleteMenuType(menuType.id)}
            ></StyledRemoveButton>
          </AdminButtons>
        </AddressCard>
      ))}
    </UserAddressesWrapper>
  );
};
