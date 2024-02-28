import styled from "styled-components";

export const StyledButton = styled.button`
  cursor: pointer;
  background-color: ${(props) => props.color || "var(--color-green)"};
  color: var(--color-white);
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: 600;
  transition: transform 0.2s ease-in;
  &:hover {
    transform: scale(1.1);
  }
`;
