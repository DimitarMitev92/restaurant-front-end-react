import { ButtonProps } from "./button.static";
import { StyledButton } from "./button.style";

const Button: React.FC<ButtonProps> = ({ label, color, onClick }) => {
  return (
    <StyledButton color={color} onClick={onClick}>
      {label}
    </StyledButton>
  );
};

export default Button;
