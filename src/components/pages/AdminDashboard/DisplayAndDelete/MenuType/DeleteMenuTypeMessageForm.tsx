import CustomizableDeleteModal from "../../../../Forms/DeleteForms/ReusableDeleteModal";
import { useDeleteMenuTypeModalLogic } from "./DeleteMenuTypeMessageForm.logic";

interface DeleteMenuTypeMessageFormProps {
  deletedId: string;
}

export const DeleteMenuTypeMessageForm: React.FC<
  DeleteMenuTypeMessageFormProps
> = ({ deletedId }) => {
  const { handleDelete } = useDeleteMenuTypeModalLogic(deletedId);

  return (
    <CustomizableDeleteModal
      deletedId={deletedId}
      confirmationMessage="Are you sure you want to delete this menu type?"
      confirmButtonText="Confirm Delete"
      handleDelete={handleDelete}
    />
  );
};
