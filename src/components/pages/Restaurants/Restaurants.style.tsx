import styled from 'styled-components';


export const StyledContainer = styled.div`
 display: flex;
 margin-top: 20px;
  flex-direction: column;
  justify-content: center;  
  align-items: center;      
  min-height: 100vh;     
  padding: 16px;


  @media (max-width: 768px) {

    padding: 10px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 15px;
  }

  @media (min-width: 1025px) {
    max-width: 1140px;
    margin: 0 auto; 
  }

`;


