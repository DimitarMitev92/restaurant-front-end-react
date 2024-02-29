import {
  DeleteFormButton,
  DeleteFormHeading,
  DeleteFormWrapper,
} from "../DeleteForms.style";
import { useDeleteMessageFormLogic } from "./DeleteMessageForm.logic";
import { DeleteMessageFormProps } from "./DeleteMessageForm.static";

const DeleteMessageForm: React.FC<DeleteMessageFormProps> = ({ deletedId }) => {
  const { handleDeleteMenu } = useDeleteMessageFormLogic(deletedId);

  return (
    <DeleteFormWrapper>
      <DeleteFormHeading>
        Are you sure you want to delete this menu?
      </DeleteFormHeading>
      <DeleteFormButton onClick={handleDeleteMenu}>
        Confirm Delete
      </DeleteFormButton>
    </DeleteFormWrapper>
  );
};

export default DeleteMessageForm;
