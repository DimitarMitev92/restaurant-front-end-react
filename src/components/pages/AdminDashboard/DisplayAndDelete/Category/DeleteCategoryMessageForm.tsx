import CustomizableDeleteModal from "../../../../Forms/DeleteForms/ReusableDeleteModal";
import { useDeleteCategoryMessageModalLogic } from "./DeleteCategoryMessageForm.logic";

interface DeleteCategoryMessageFormProps {
  deletedId: string;
}

export const DeleteCategoryMessageForm: React.FC<
  DeleteCategoryMessageFormProps
> = ({ deletedId }) => {
  const { handleDelete } = useDeleteCategoryMessageModalLogic(deletedId);

  return (
    <CustomizableDeleteModal
      deletedId={deletedId}
      confirmationMessage="Are you sure you want to delete this category"
      confirmButtonText="Confirm Delete"
      handleDelete={handleDelete}
    />
  );
};
