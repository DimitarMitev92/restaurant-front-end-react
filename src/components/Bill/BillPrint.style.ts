import ReactModal from "react-modal";
import styled from "styled-components";

export const BillDiv = styled.div``;

export const BillContentDiv = styled.div`
  padding-left: 30px;
`;

export const CartItemDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  text-align: left;
  padding: 10px;
  border: 1px solid var(--color-grey);
  box-shadow: 7px;
  margin-bottom: 10px;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    grid-template-columns: 1fr;
  }
`;
export const StyledModal = styled(ReactModal)`
  display: flex;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  background-color: var(--color-white);
  border: 1px solid var(--color-grey);
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
  margin: 20px;
  padding: 40px;
  max-width: 90%;
  max-height: 80%;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 4px;
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

  @media (max-width: 768px) {
    font-size: 0.7rem;
    padding: 20px;
    margin: 10px;
  }

  @media (max-width: 480px) {
    font-size: 0.6rem;
    padding: 10px;
    margin: 5px;
  }
`;

export const ButtonDiv = styled.div`
  padding-top: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BillHeading = styled.h2`
  margin-bottom: 10px;
`;

export const DateHeading = styled.h4`
  margin-bottom: 20px;
`;

export const Table = styled.table`
  width: 100%;
  margin-top: 10px;
  border: none;

  th,
  td {
    border: 0.1px solid var(--color-white-smoke);
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: var(--color-green);
    color: white;
  }

  tr:nth-child(even) {
    background-color: var(--color-white-smoke);
  }

  @media only screen and (max-width: 768px) {
    th,
    td {
      font-size: 8px;
      padding: 6px;
    }
  }
`;
