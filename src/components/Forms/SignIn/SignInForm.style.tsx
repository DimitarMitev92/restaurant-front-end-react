import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 6em;
  margin-left: 2em;
  margin-right: 2em;
`;

export const FormDiv = styled.form`
  width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 4rem;
  border: 1px solid var(--color-golden);
  background: var(--color-black);
`;

export const FormHeading = styled.h2`
  color: var(--color-golden);
  font-size: 4em;
  line-height: 3.2em;
  letter-spacing: 0.04em;
  text-transform: capitalize;
  text-align: center;
`;

export const Label = styled.label`
  color: var(--color-white);
  letter-spacing: 0.1em;
  text-transform: capitalize;
  line-height: 28px;
  font-size: 1.4em;
  margin-top: 1.2em;
  margin-bottom: 0.8em;
`;

export const Input = styled.input`
  width: 100%;
  border: 1px solid var(--color-golden);
  border-radius: 5px;
  font-size: 1rem;
  color: var(--color-white);
  padding: 0.75rem 1rem;
  background: var(--color-black);
  margin-bottom: 0.5em;
`;

export const Select = styled.select`
  width: 100%;
  border: 1px solid var(--color-golden);
  border-radius: 5px;
  font-size: 1rem;
  color: var(--color-white);
  padding: 0.75rem 1rem;
  background: var(--color-black);
  margin-top: 0.5em;
  margin-bottom: 0.5em;
`;

export const Option = styled.option`
  color: var(--color-white);
  background: var(--color-black);
`;

export const ErrorDiv = styled.div`
  font-size: 1.2em;
  color: var(--color-red);
  margin-top: 0.5em;
  margin-right: 0.5em;
`;
