import {
  DeleteFormButton,
  DeleteFormHeading,
  DeleteFormWrapper,
} from "../DeleteForms.style";
import { useDeleteMealMessageFormLogic } from "./DeleteMealMessageForm.logic";
import { DeleteMealMessageFormProps } from "./DeleteMealMessageForm.static";

const DeleteMealMessageForm: React.FC<DeleteMealMessageFormProps> = ({
  deletedId,
}) => {
  const { handleDeleteMeal } = useDeleteMealMessageFormLogic(deletedId);
  return (
    <DeleteFormWrapper>
      <DeleteFormHeading>
        Are you sure you want to delete this meal?
      </DeleteFormHeading>
      <DeleteFormButton onClick={handleDeleteMeal}>
        Confirm Delete
      </DeleteFormButton>
    </DeleteFormWrapper>
  );
};

export default DeleteMealMessageForm;
