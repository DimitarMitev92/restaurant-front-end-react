import {
  DeleteFormButton,
  DeleteFormHeading,
  DeleteFormWrapper,
} from "../DeleteForms.style";
import { useDeleteRestaurantMessageFormLogic } from "./DeleteRestaurantMessageForm.logic";
import { DeleteRestaurantMessageFormProps } from "./DeleteRestaurantMessageForm.static";

const DeleteRestaurantMessageForm: React.FC<
  DeleteRestaurantMessageFormProps
> = ({ deletedId }) => {
  const { handleDeleteRestaurant } =
    useDeleteRestaurantMessageFormLogic(deletedId);
  return (
    <DeleteFormWrapper>
      <DeleteFormHeading>
        Are you sure you want to delete this restaurant?
      </DeleteFormHeading>
      <DeleteFormButton onClick={handleDeleteRestaurant}>
        Confirm Delete
      </DeleteFormButton>
    </DeleteFormWrapper>
  );
};

export default DeleteRestaurantMessageForm;
