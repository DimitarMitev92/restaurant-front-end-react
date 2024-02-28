import { Label } from "./inputLabel.style";
import { InputLabelProps } from "./inputLabel.static";

const InputLabel: React.FC<InputLabelProps> = ({ htmlFor, children }) => {
  return <Label htmlFor={htmlFor}>{children}</Label>;
};

export default InputLabel;
