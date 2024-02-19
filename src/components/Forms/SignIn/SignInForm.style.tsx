import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1000px) {
    height: 85.8vh;
  }
  @media screen and (max-width: 650px) {
    height: 87vh;
  }
`;

export const FormDiv = styled.form`
  width: 40em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 4rem;
  margin: 0 auto;
  @media screen and (max-width: 1000px) {
    width: 40em;
    padding: 1em 2em;
  }
`;

export const FormHeading = styled.h2`
  color: var(--color-green);
  font-size: 2.4em;
  line-height: 2.2em;
  letter-spacing: 0.04em;
  text-transform: capitalize;
  text-align: center;
  @media screen and (max-width: 1000px) {
    font-size: 2em;
  }
`;

export const ImageSignIn = styled.img`
  height: 85.8vh;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
