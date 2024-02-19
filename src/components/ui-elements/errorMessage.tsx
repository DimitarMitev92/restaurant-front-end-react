import React from "react";
import styled from "styled-components";

interface ErrorDisplayProps {
  error: string;
}

const ErrorDiv = styled.div`
  color: red;
  margin-top: 5px;
`;

const ErrorMessage: React.FC<ErrorDisplayProps> = ({ error }) => {
  return <ErrorDiv>{error}</ErrorDiv>;
};

export default ErrorMessage;
