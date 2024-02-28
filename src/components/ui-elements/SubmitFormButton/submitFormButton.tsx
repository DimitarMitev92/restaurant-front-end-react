import { SubmitFormButtonProps } from "./submitFormButton.static";
import { StyledButton } from "./submitFormButton.style";

const SubmitFormButton: React.FC<SubmitFormButtonProps> = ({
  label,
  type,
  disabled,
}) => {
  return (
    <StyledButton type={type} disabled={disabled}>
      {label}{" "}
    </StyledButton>
  );
};
export default SubmitFormButton;
