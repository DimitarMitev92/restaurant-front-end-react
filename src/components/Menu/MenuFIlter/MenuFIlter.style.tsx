import styled from "styled-components";

export const FilterWrapper = styled.div`
  width: 100%;
  padding: 100px;
  @media (max-width: 768px) {
  padding: 30px;
  }
`;

export const FilterHolder = styled.button`
  all: unset;
  cursor: pointer;
  border: 1px solid var(--color-white-smoke);
  border-radius: 8px;
  padding: 0.4rem;
  text-align: center;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);

  &:active {
    background-color: var(--color-yellow);
  }
`;

export const FilterBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
  @media (max-width: 768px) {
flex-direction: column;
  }
`;
