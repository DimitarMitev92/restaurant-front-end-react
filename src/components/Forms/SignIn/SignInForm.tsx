import { useNavigate } from "react-router-dom";
import { useSessionStorage } from "../../../hooks/useSessionStorage";
import { useAuth } from "../../../context/AuthProvider";
import { ImageSignIn, Wrapper } from "./SignInForm.style";
import { signInValidationSchema } from "../../../static/form-validations";
import {
  endpointAPI,
  headers,
  mainRoute,
  method,
} from "../../../static/endpoints";
import { signService } from "../../../services/signService";
import { SignInFormProps } from "../../../static/interfaces";

import imageSignIn from "../../../assets/sign-in.jpeg";
import { ReusableForm } from "../ReusableForm/ReusableForm";
import { inputsSignInData } from "./SignInForm.static";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const SignInForm: React.FC<SignInFormProps> = ({ onSubmit }) => {
  const navigate = useNavigate();
  const { setItem } = useSessionStorage();
  const { setUser } = useAuth();

  return (
    <Wrapper>
      <ImageSignIn src={imageSignIn} alt="image-sign-in" />
      <ReusableForm
        formHeading="Sign In"
        inputsData={inputsSignInData}
        initialValues={{ email: "", password: "", error: "" }}
        validationSchema={signInValidationSchema}
        onSubmit={async (values) => {
          try {
            const url = endpointAPI.SIGN_IN;
            const options = {
              method: method.POST,
              headers: headers.CONTENT_TYPE_APP_JSON,
              body: JSON.stringify(values),
            };
            const userDataFromApi = await signService(url, options);
            onSubmit && onSubmit(values);
            setItem("access_token", userDataFromApi.user.accessToken);
            setUser(userDataFromApi);
            navigate(mainRoute.MAIN);
          } catch (error) {
            console.error("Failed to sign in:", error);
            toast.error(`Failed to sign in: ${error.message}`);
          }
        }}
        buttonText="Sign In"
      />
    </Wrapper>
  );
};
