import styled, { css } from "styled-components";

export const baseSelectStyle = css`
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  border: 1px solid var(--color-green);
  color: var(--color-black);
  background: var(--color-white);
  font-size: 1rem;
  border-radius: 5px;
  width: 100%;
  height: 2rem;
  text-align: center;
`;

export const StyledSelect = styled.select`
  ${baseSelectStyle}
`;
