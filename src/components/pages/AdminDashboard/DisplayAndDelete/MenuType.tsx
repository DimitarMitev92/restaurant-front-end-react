import {
  AdminButtons,
  StyledRemoveButton,
} from "../../../Meal/Meal.style";
import { useEffect, useState } from "react";
import EmptyList from "../../../EmptyList/EmptyList";
import { AddressCard, AddressText, UserAddressesWrapper } from "../../Profile/UserAddresses/UserAddresses.style";
import { menuTypeService } from "../../../../services/menuTypeService";
import { MenuTypeDataApi } from "../../../../static/interfaces";
import { MenuTypesProps } from "../AdminDashboard.static";

export const MenuTypes: React.FC<MenuTypesProps> = ({ onDelete }) => {
  const [menuTypes, setMenuTypes] = useState<MenuTypeDataApi[]>([]);
  const [triggerDelete, setTriggerDelete] = useState(false);

  useEffect(() => {
    const fetchMenuTypes = async () => {
      try {
        const menuTypes = await menuTypeService.fetchMenuTypes();
        setMenuTypes(menuTypes);
      } catch (error) {
        setMenuTypes([]);
      }
    };
    fetchMenuTypes();
  }, [triggerDelete]);

  const handleDeleteMenuType = async (menuTypeId: string) => {
    try {
      const isConfirmed = window.confirm("Are you sure you want to delete this menu type?");
      
      if (isConfirmed) {
        await menuTypeService.deleteMenuTypeById(menuTypeId);
        setTriggerDelete((prev) => !prev);
        onDelete(menuTypeId);
      }
    } catch (error) {
      console.error("Error deleting menu type:", error);
    }
  };

  if (menuTypes.length === 0) {
    return <EmptyList message="No menu types available" />;
  }

  return (
    <UserAddressesWrapper>
      {menuTypes.map((menuType: MenuTypeDataApi) => (
        <AddressCard key={menuType.id}>
          <AddressText>{menuType.type}</AddressText>
          <AdminButtons>
          <StyledRemoveButton onClick={() => handleDeleteMenuType(menuType.id)}>
            </StyledRemoveButton>
          </AdminButtons>
        </AddressCard>
      ))}
    </UserAddressesWrapper>
  );
};