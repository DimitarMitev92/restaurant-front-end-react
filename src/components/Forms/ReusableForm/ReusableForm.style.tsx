import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85.8vh;
  overflow: overlay;
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
    padding-bottom: 100px;
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

export const ImageSignUp = styled.img`
  height: 85.8vh;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const PasswordWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const EyeIcon = styled.span`
  position: absolute;
  top: 60%;
  right: 12px;
  transform: translateY(-50%);
  cursor: pointer;
`;
