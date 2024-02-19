import styled from "styled-components";

interface ButtonProps {
  label: string;
  color: string;
  onClick: () => void;
}
export const StyledButton = styled.button`
  cursor: pointer;
  background-color: var(--color-golden);
  color: var(--color-black);
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: 600;
  transition: transform 0.2s ease-in;
  &:hover {
    transform: scale(1.1);
  }
`;

const Button: React.FC<ButtonProps> = ({ label, color, onClick }) => {
  return (
    <StyledButton color={color} onClick={onClick}>
      {label}
    </StyledButton>
  );
};

export default Button;
