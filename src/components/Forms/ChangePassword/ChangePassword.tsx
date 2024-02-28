import { useNavigate } from "react-router-dom";
import { signService } from "../../../services/signService";
import {
  endpointAPI,
  headers,
  mainRoute,
  method,
} from "../../../static/endpoints";
import { changePasswordValidationSchema } from "../../../static/form-validations";
import { ReusableForm } from "../ReusableForm/ReusableForm";
import { useAuth } from "../../../context/AuthProvider";
import {
  ChangePasswordFormData,
  ChangePasswordFormProps,
} from "../../../static/interfaces";
import { useSessionStorage } from "../../../hooks/useSessionStorage";
import { inputsChangePasswordData } from "./ChangePassword.static";

export const ChangePassword: React.FC<ChangePasswordFormProps> = ({
  onSubmit,
}) => {
  const navigate = useNavigate();
  const { setItem } = useSessionStorage();
  const { setUser } = useAuth();

  return (
    <ReusableForm
      formHeading="Change password"
      inputsData={inputsChangePasswordData}
      initialValues={{
        email: "",
        password: "",
        newPassword: "",
        comparePassword: "",
        error: "",
      }}
      validationSchema={changePasswordValidationSchema}
      onSubmit={async (values: ChangePasswordFormData) => {
        const url = endpointAPI.CHANGE_PASSWORD;
        const options = {
          method: method.POST,
          headers: headers.CONTENT_TYPE_APP_JSON,
          body: JSON.stringify({
            email: values.email,
            oldPassword: values.password,
            newPassword: values.newPassword,
          }),
        };
        const userDataFromApi = await signService(url, options);
        onSubmit && onSubmit(values);
        setItem("access_token", userDataFromApi.user.accessToken);
        setUser(userDataFromApi);
        navigate(mainRoute.MAIN);
      }}
      buttonText="Change"
    />
  );
};
