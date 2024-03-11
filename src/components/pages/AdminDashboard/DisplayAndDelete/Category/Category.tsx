import { AdminButtons, StyledRemoveButton } from "../../../../Meal/Meal.style";
import EmptyList from "../../../../EmptyList/EmptyList";
import {
  AddressCard,
  AddressText,
  UserAddressesWrapper,
} from "../../../Profile/UserAddresses/UserAddresses.style";
import { CategoryDataApi } from "../../../../../static/interfaces";
import { CategoriesProps } from "../../AdminDashboard.static";
import { PulseLoader } from "react-spinners";
import { useCategory } from "./Category.logic";
import { usePopupContext } from "../../../../../context/PopupContext";
import { DeleteCategoryPopUp } from "../../../../PopUp/DeleteCategoryPopUp";

export const Categories: React.FC<CategoriesProps> = () => {
  const { categories, isLoading, handleDeleteCategory, handleCancelDelete } =
    useCategory();

  const { isDeleteCategoryPopUpVisible } = usePopupContext();

  if (isLoading) {
    return <PulseLoader color="var(--color-green)" size={5} />;
  }

  if (categories.length === 0) {
    return <EmptyList message="No packages available" />;
  }

  return (
    <UserAddressesWrapper>
      {categories.map((category: CategoryDataApi) => (
        <AddressCard key={category.id}>
          <AddressText>{category.type}</AddressText>
          <AdminButtons>
            <StyledRemoveButton
              onClick={() => handleDeleteCategory()}
            ></StyledRemoveButton>
          </AdminButtons>
          {isDeleteCategoryPopUpVisible && (
            <DeleteCategoryPopUp
              onCancel={handleCancelDelete}
              categoryId={category.id}
            />
          )}
        </AddressCard>
      ))}
    </UserAddressesWrapper>
  );
};
