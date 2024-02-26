import ReactModal from "react-modal";
import styled from "styled-components";

export const BillDiv = styled.div``;

export const BillContentDiv = styled.div`
  padding-left: 30px;
`;

export const CartItemDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  padding: 10px;
  border: 1px solid var(--color-grey);
  box-shadow: 7px;
  margin-bottom: 10px;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
export const StyledModal = styled(ReactModal)`
  display: flex;
  position: fixed;
  top: 30%;
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