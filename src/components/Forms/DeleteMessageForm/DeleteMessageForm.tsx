import { useDeleteMessageFormLogic } from "./DeleteMessageForm.logic";
import { DeleteMessageFormProps } from "./DeleteMessageForm.static";

const DeleteMessageForm: React.FC<DeleteMessageFormProps> = ({ deletedId }) => {
  const { handleDeleteMenu } = useDeleteMessageFormLogic(deletedId);

  return (
    <div>
      <p>Are you sure you want to delete this menu?</p>
      <button onClick={handleDeleteMenu}>Confirm Delete</button>{" "}
    </div>
  );
};

export default DeleteMessageForm;
