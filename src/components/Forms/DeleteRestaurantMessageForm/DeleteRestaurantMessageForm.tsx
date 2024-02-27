import { useDeleteRestaurantMessageFormLogic } from "./DeleteRestaurantMessageForm.logic";
import { DeleteRestaurantMessageFormProps } from "./DeleteRestaurantMessageForm.static";

const DeleteRestaurantMessageForm: React.FC<
  DeleteRestaurantMessageFormProps
> = ({ deletedId }) => {
  const { handleDeleteRestaurant } =
    useDeleteRestaurantMessageFormLogic(deletedId);
  return (
    <div>
      <p>Are you sure you want to delete this restaurant?</p>
      <button onClick={handleDeleteRestaurant}>Confirm Delete</button>{" "}
    </div>
  );
};

export default DeleteRestaurantMessageForm;
