import React from "react";
import { EmptyListContainer } from "./EmptyList.style";

export interface EmptyListProps {
    message: string;
  }
const EmptyList: React.FC<EmptyListProps> = ({ message }) => {
  return (
    <EmptyListContainer>
      <p>{message}</p>
    </EmptyListContainer>
  );
};

export default EmptyList;
