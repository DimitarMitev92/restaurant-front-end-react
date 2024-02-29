import styled from "styled-components";

export const DeleteFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
`;

export const DeleteFormHeading = styled.p`
  font-size: 1.2em;
  margin-bottom: 1em;
`;

export const DeleteFormButton = styled.button`
  background-color: var(--color-green);
  color: var(--color-white);
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
