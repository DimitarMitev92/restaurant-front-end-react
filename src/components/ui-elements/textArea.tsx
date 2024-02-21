import styled, { css } from "styled-components";
import { ChangeEvent, FocusEvent } from "react";

const baseStyle = css`
  padding: 0.75rem 1rem;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  border: 1px solid var(--color-green);
  color: var(--color-black);
  background: var(--color-white);
  font-size: 1rem;
  border-radius: 5px;
  width: 100%;
  height: 150px; 
`;

const StyledTextarea = styled.textarea`
  ${baseStyle}
`;

interface TextareaProps {
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: FocusEvent<HTMLTextAreaElement>) => void;
  value: string | number;
  placeholder?: string;
  name?: string;
}

const TextArea = ({
  onChange,
  onBlur,
  value,
  placeholder,
  name,
}: TextareaProps) => {
  return (
    <StyledTextarea
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      placeholder={placeholder}
      name={name}
    />
  );
};

export default TextArea;
