import styled from "styled-components";

export const PopUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-white);
  border: 1px solid var(--color-green);
  border-radius: 0.5em;
  padding: 1em;
  max-width: 80%;
  max-height: 80%;
  min-width: 30%;
  min-height: 30%;
  text-align: center;
  z-index: 100000;
  box-shadow: 0 4px 8px rgba(0.5, 0.5, 0.5, 0.5);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    margin: 4px 0;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(217, 217, 217, 1);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgb(196, 196, 196);
  }
`;

export const CancelButtonPopup = styled.button`
  margin: 1em 1em;
  padding: 0.5em 1em;
  font-size: 1em;
  background-color: var(--color-green);
  align-self: flex-end;
  color: var(--color-white);
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
export const PopUpOverlay = styled.div`
  background-color: #5c5a5a4f;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 10;
  inset: 0px;
`;
