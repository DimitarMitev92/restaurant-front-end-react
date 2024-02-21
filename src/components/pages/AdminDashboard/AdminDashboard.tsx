import { CreateCategory } from "../../Forms/CreateCategory/CreateCategory";
import { CreateMeal } from "../../Forms/CreateMeal/CreateMeal";
import { CreateMenu } from "../../Forms/CreateMenu/CreateMenu";
import { CreatePackage } from "../../Forms/CreatePackage/CreatePackage";
import { CreateRestaurant } from "../../Forms/CreateRestaurant/CreateRestaurant";

export const AdminDashboard = () => {
  return (
    <>
      <CreateCategory />
      <CreatePackage />
      <CreateRestaurant />
      <CreateMenu />
      <CreateMeal />
    </>
  );
};
