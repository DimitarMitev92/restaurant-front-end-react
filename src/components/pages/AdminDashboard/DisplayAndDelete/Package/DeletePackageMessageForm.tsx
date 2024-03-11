import CustomizableDeleteModal from "../../../../Forms/DeleteForms/ReusableDeleteModal";
import { useDeletePackageMessageModalLogic } from "./DeletePackageMessageForm.logic";

interface DeletePackageMessageFormProps {
  deletedId: string;
}

export const DeletePackageMessageForm: React.FC<
  DeletePackageMessageFormProps
> = ({ deletedId }) => {
  const { handleDelete } = useDeletePackageMessageModalLogic(deletedId);

  return (
    <CustomizableDeleteModal
      deletedId={deletedId}
      confirmationMessage="Are you sure you want to delete this package?"
      confirmButtonText="Confirm Delete"
      handleDelete={handleDelete}
    />
  );
};
