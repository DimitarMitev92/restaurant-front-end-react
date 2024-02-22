import styled, { css } from "styled-components";
import { ChangeEvent, FocusEvent } from "react";

export interface Option {
  value: string | number;
  label: string;
}

interface UnifiedInputProps {
  onChange: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => void;
  onBlur?: (
    e: FocusEvent<HTMLInputElement> | FocusEvent<HTMLSelectElement>
  ) => void;
  value: string | number;
  placeholder?: string;
  type?: string;
  name?: string;
  options?: Option[];
  checked?: boolean;
}

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
`;

const StyledInput = styled.input`
  ${baseStyle}
`;

const StyledSelect = styled.select`
  ${baseStyle}
`;

const UnifiedInput = ({
  onChange,
  onBlur,
  value,
  placeholder,
  name,
  type = "text",
  options,
}: UnifiedInputProps) => {
  if (type === "select" && options) {
    return (
      <StyledSelect
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
    );
  } else {
    return (
      <StyledInput
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        placeholder={placeholder}
        name={name}
      />
    );
  }
};

export default UnifiedInput;
