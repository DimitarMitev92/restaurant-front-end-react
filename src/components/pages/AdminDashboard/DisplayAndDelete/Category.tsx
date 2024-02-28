import {
  AdminButtons,
  StyledRemoveButton,
} from "../../../Meal/Meal.style";
import { useEffect, useState } from "react";
import EmptyList from "../../../EmptyList/EmptyList";
import { AddressCard, AddressText, UserAddressesWrapper } from "../../Profile/UserAddresses/UserAddresses.style";
import { categoryService } from "../../../../services/categoryService";
import { CategoryDataApi } from "../../../../static/interfaces";
import { CategoriesProps } from "../AdminDashboard.static";
                                                                

export const Categories: React.FC<CategoriesProps> = ({ onDelete }) => {
  const [categories, setCategories] = useState<CategoryDataApi[]>([]);
  const [triggerDelete, setTriggerDelete] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categories = await categoryService.fetchCategories();
        setCategories(categories);
      } catch (error) {
        setCategories([]);
      }
    };
    fetchCategories();
  }, [triggerDelete]);

  const handleDeleteCategory = async (categoryId: string) => {
    try {
      const isConfirmed = window.confirm("Are you sure you want to delete this category?");
      
      if (isConfirmed) {
        await categoryService.deleteCategoryById(categoryId);
        setTriggerDelete((prev) => !prev);
        onDelete(categoryId);
      }
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  if (categories.length === 0) {
    return <EmptyList message="No packages available" />;
  }

  return (
    <UserAddressesWrapper>
      {categories.map((category: CategoryDataApi) => (
        <AddressCard key={category.id}>
          <AddressText>{category.type}</AddressText>
          <AdminButtons>
            <StyledRemoveButton onClick={() => handleDeleteCategory(category.id)}>
            </StyledRemoveButton>
          </AdminButtons>
        </AddressCard>
      ))}
    </UserAddressesWrapper>
  );
};