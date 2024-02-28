import { ChangeEvent, FocusEvent } from "react";

export interface Option {
  value: string | number;
  label: string;
}

export interface UnifiedInputProps {
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
