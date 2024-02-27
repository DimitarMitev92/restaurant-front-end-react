import styled, { css } from "styled-components";
import { ChangeEvent } from "react";

const baseSelectStyle = css`
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  border: 1px solid var(--color-green);
  color: var(--color-black);
  background: var(--color-white);
  font-size: 1rem;
  border-radius: 5px;
  width: 100%;
  height: 2rem;
  text-align: center;
`;

const StyledSelect = styled.select`
  ${baseSelectStyle}
`;

interface SelectProps {
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  value: string | number;
  options: { value: string; label: string }[];
  name?: string;
}

const Select = ({ onChange, value, options, name }: SelectProps) => {
  return (
    <StyledSelect onChange={onChange} value={value} name={name}>
      <option value="" disabled>
        Select Address
      </option>
      {options &&
        options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
    </StyledSelect>
  );
};

export default Select;
