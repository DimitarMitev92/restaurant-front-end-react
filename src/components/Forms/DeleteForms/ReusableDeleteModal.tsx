import React from "react";
import {
  DeleteFormButton,
  DeleteFormHeading,
  DeleteFormWrapper,
} from "./DeleteForms.style";

export interface CustomizableDeleteModalProps {
  deletedId: string;
  confirmationMessage: string;
  confirmButtonText: string;
  handleDelete: () => void;
}

const CustomizableDeleteModal: React.FC<CustomizableDeleteModalProps> = ({
  deletedId,
  confirmationMessage,
  confirmButtonText,
  handleDelete,
}) => {
  return (
    <DeleteFormWrapper>
      <DeleteFormHeading>{confirmationMessage}</DeleteFormHeading>
      <DeleteFormButton onClick={handleDelete}>
        {confirmButtonText}
      </DeleteFormButton>
    </DeleteFormWrapper>
  );
};

export default CustomizableDeleteModal;
