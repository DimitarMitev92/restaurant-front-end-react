import { ChangeEvent } from "react";

export interface SelectProps {
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  value: string | number;
  options: { value: string; label: string }[];
  name?: string;
}
