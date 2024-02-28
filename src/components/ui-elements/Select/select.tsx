import { SelectProps } from "./select.static";
import { StyledSelect } from "./select.style";

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
