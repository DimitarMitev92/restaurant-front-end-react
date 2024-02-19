import React from "react";
import styled from "styled-components";

interface ErrorDisplayProps {
  error: string;
}

const ErrorDiv = styled.div`
  color: var(--color-red);
  margin-top: 5px;
  @media screen and (max-width: 1000px) {
    font-size: 0.8em;
  }
`;

const ErrorMessage: React.FC<ErrorDisplayProps> = ({ error }) => {
  return <ErrorDiv>{error}</ErrorDiv>;
};

export default ErrorMessage;
