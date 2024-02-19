import React from "react";
import styled from "styled-components";

interface InputLabelProps {
  htmlFor: string;
  children: React.ReactNode;
}

const Label = styled.label`
  color: var(--color-green);
  font-size: 1.3em;
`;

const InputLabel: React.FC<InputLabelProps> = ({ htmlFor, children }) => {
  return <Label htmlFor={htmlFor}>{children}</Label>;
};

export default InputLabel;
