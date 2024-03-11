import CustomizableDeleteModal from "../ReusableDeleteModal";
import { useDeleteRestaurantMessageModalLogic } from "./DeleteRestaurantMessageForm.logic";
import { DeleteRestaurantMessageFormProps } from "./DeleteRestaurantMessageForm.static";

const DeleteRestaurantMessageForm: React.FC<
  DeleteRestaurantMessageFormProps
> = ({ deletedId }) => {
  const { handleDelete } = useDeleteRestaurantMessageModalLogic(deletedId);

  return (
    <CustomizableDeleteModal
      deletedId={deletedId}
      confirmationMessage="Are you sure you want to delete this restaurant?"
      confirmButtonText="Confirm Delete"
      handleDelete={handleDelete}
    />
  );
};

export default DeleteRestaurantMessageForm;
