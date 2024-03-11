import CustomizableDeleteModal from "../../../../Forms/DeleteForms/ReusableDeleteModal";
import { useDeleteLocationMessageModalLogic } from "./DeleteLocationMessageForm.logic";

interface DeleteLocationMessageFormProps {
  deletedId: string;
}

export const DeleteLocationMessageForm: React.FC<
  DeleteLocationMessageFormProps
> = ({ deletedId }) => {
  const { handleDelete } = useDeleteLocationMessageModalLogic(deletedId);

  return (
    <CustomizableDeleteModal
      deletedId={deletedId}
      confirmationMessage="Are you sure you want to delete this location?"
      confirmButtonText="Confirm Delete"
      handleDelete={handleDelete}
    />
  );
};
