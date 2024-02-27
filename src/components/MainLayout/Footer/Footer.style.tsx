import styled from "styled-components";

export const FooterDiv = styled.div`
  background-color: var(--color-yellow);
  width: 100%;
  padding: 1em;
  display: flex;
  position: fixed;
  justify-content: center;
  font-size: 20px;
  bottom: 0;
  z-index: 5;
`;

export const FooterText = styled.p`
  color: var(--color-green);
  text-transform: capitalize;
`;
