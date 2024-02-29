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
import { CategoryDataApi } from "../../../../../static/interfaces";
import { CategoriesProps } from "../../AdminDashboard.static";
import { PulseLoader } from "react-spinners";
import { useCategoryLogic } from "./Category.logic";

export const Categories: React.FC<CategoriesProps> = ({ onDelete }) => {
  const { categories, isLoading, handleDeleteCategory } =
    useCategoryLogic(onDelete);

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
              onClick={() => handleDeleteCategory(category.id)}
            ></StyledRemoveButton>
          </AdminButtons>
        </AddressCard>
      ))}
    </UserAddressesWrapper>
  );
};
