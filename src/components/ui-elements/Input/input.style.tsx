import styled, { css } from "styled-components";

export const baseStyle = css`
  padding: 0.75rem 1rem;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  border: 1px solid var(--color-green);
  color: var(--color-black);
  background: var(--color-white);
  font-size: 1rem;
  border-radius: 5px;
  width: 100%;
`;

export const StyledInput = styled.input`
  ${baseStyle}
`;

export const StyledSelect = styled.select`
  ${baseStyle}
`;
