import { useDeleteMealMessageFormLogic } from "./DeleteMealMessageForm.logic";
import { DeleteMealMessageFormProps } from "./DeleteMealMessageForm.static";

const DeleteMealMessageForm: React.FC<DeleteMealMessageFormProps> = ({
  deletedId,
}) => {
  const { handleDeleteMeal } = useDeleteMealMessageFormLogic(deletedId);
  return (
    <div>
      <p>Are you sure you want to delete this meal?</p>
      <button onClick={handleDeleteMeal}>Confirm Delete</button>{" "}
    </div>
  );
};

export default DeleteMealMessageForm;
