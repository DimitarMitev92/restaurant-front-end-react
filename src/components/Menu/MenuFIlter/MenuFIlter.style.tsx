import styled from "styled-components";

export const FilterWrapper = styled.div`
  width: 100%;
  padding: 2rem 3rem;
`;

export const FilterHolder = styled.button`
  all: unset;
  cursor: pointer;
  border: 1px solid #d6d6d6;
  border-radius: 8px;
  padding: 0.4rem;
  text-align: center;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);

  &:active {
    background-color: #ffc244;
  }
`;
