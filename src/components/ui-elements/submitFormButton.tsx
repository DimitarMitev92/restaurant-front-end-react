import styled from "styled-components";

export interface SubmitFormButtonProps {
  label: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const StyledButton = styled.button`
  background-color: #dcca87;
  color: var(--color-yellow);
  border: none;
  padding: 10px;
  cursor: pointer;
  margin: auto;
  margin-top: 10px;
  font-size: 1rem;
  font-weight: 600;
  transition: transform 0.2s ease-in;
  &:hover {
    transform: scale(1.1);
  }
`;
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
