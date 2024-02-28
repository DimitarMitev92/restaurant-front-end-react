import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--color-grey);
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    box-shadow: 1px 1px 25px rgba(0, 0, 0, 0.1);
  }
`;
