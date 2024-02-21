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
import { useSessionStorage } from "../../../hooks/useSessionStorage";
import { useAuth } from "../../../context/AuthProvider";
import { ChangePasswordFormData } from "../../../static/interfaces";

export const ChangePassword = () => {
  const navigate = useNavigate();
  const { setItem } = useSessionStorage();
  const { setUser } = useAuth();

  const inputsChangePasswordData = [
    {
      htmlFor: "email",
      labelTitle: "Email:",
      type: "text",
      name: "email",
      placeholder: "Enter your email...",
    },
    {
      htmlFor: "password",
      labelTitle: "Password:",
      type: "password",
      name: "password",
      placeholder: "Enter your password...",
    },
    {
      htmlFor: "newPassword",
      labelTitle: "New Password:",
      type: "password",
      name: "newPassword",
      placeholder: "Enter your new password...",
    },
    {
      htmlFor: "comparePassword",
      labelTitle: "Confirm Password:",
      type: "password",
      name: "comparePassword",
      placeholder: "Enter again your new password...",
    },
  ];

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
        setItem("access_token", userDataFromApi.user.accessToken);
        setUser(userDataFromApi);
        navigate(mainRoute.MAIN);
      }}
      buttonText="Change"
    />
  );
};
