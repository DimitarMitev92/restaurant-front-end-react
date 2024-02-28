import { UnifiedInputProps } from "./input.static";
import { StyledInput, StyledSelect } from "./input.style";

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
