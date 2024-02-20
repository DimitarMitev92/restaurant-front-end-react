import { CreateCategory } from "../../Forms/CreateCategory/CreateCategory";
import { CreateLocation } from "../../Forms/CreateLocation/CreateLocation";

export const AdminDashboard = () => {
  return (
    <>
      <CreateLocation />
      <CreateCategory />
    </>
  );
};
