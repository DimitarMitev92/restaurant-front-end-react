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
  padding: 2em 4em;
  margin: 0 auto;
  @media screen and (max-width: 1000px) {
    width: 35em;
    padding: 1.5em 4em;
  }

  @media screen and (max-width: 750px) {
    width: 25em;
    padding: 1.2em 3em;
  }

  @media screen and (max-width: 720px) {
    width: 22.5em;
    padding: 1.2em 3em;
  }

  @media screen and (max-width: 570px) {
    width: 22em;
    padding: 1em 2.5em;
  }

  @media screen and (max-width: 490px) {
    width: 20.5em;
    padding: 0.8em 1.8em;
  }

  @media screen and (max-width: 470px) {
    width: 17em;
    padding: 0.2em 0.4em;
  }

  @media screen and (max-width: 450px) {
    width: 16em;
    padding: 0.2em 0.4em;
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
