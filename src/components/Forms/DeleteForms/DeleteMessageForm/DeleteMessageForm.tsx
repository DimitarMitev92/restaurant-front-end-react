import { DeleteMenuFormProps } from "./DeleteMessageForm.static";
import { useDeleteMenuMessageModalLogic } from "./DeleteMenuForm.logic";
import CustomizableDeleteModal from "../ReusableDeleteModal";

const DeleteMessageForm: React.FC<DeleteMenuFormProps> = ({ deletedId }) => {
  const { handleDelete } = useDeleteMenuMessageModalLogic(deletedId);

  return (
    <CustomizableDeleteModal
      deletedId={deletedId}
      confirmationMessage="Are you sure you want to delete this menu?"
      confirmButtonText="Confirm Delete"
      handleDelete={handleDelete}
    />
  );
};

export default DeleteMessageForm;
