import { ErrorDisplayProps } from "./errorMessage.static";
import { ErrorDiv } from "./errorMessage.style";

const ErrorMessage: React.FC<ErrorDisplayProps> = ({ error }) => {
  return <ErrorDiv>{error}</ErrorDiv>;
};

export default ErrorMessage;
