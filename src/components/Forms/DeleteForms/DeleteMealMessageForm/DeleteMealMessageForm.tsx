import CustomizableDeleteModal from "../ReusableDeleteModal";
import { useDeleteMealMessageModalLogic } from "./DeleteMealMessageForm.logic";
import { DeleteMealMessageFormProps } from "./DeleteMealMessageForm.static";

const DeleteMealMessageForm: React.FC<DeleteMealMessageFormProps> = ({
  deletedId,
}) => {
  const { handleDelete } = useDeleteMealMessageModalLogic(deletedId);
  return (
    <CustomizableDeleteModal
      deletedId={deletedId}
      confirmationMessage="Are you sure you want to delete this meal?"
      confirmButtonText="Confirm Delete"
      handleDelete={handleDelete}
    />
  );
};

export default DeleteMealMessageForm;
