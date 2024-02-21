import {
  LocationData,
  SignUpFormData,
  SignUpFormProps,
} from "../../../static/interfaces";
import { signUpValidationSchema } from "../../../static/form-validations";
import { signService } from "../../../services/signService";
import {
  endpointAPI,
  headers,
  mainRoute,
  method,
} from "../../../static/endpoints";
import { useNavigate } from "react-router-dom";
import { useSessionStorage } from "../../../hooks/useSessionStorage";
// import { useLocations } from "../../../hooks/useLocations";
import { useAuth } from "../../../context/AuthProvider";
import { ImageSignUp, Wrapper } from "./SignUpForm.style";

import imageSignUp from "../../../assets/sign-up.jpeg";
import { useLocations } from "../../../hooks/useLocations";
import { ReusableForm } from "../ReusableForm/ReusableForm";

export const SignUpForm: React.FC<SignUpFormProps> = ({ onSubmit }) => {
  const { locations = [] } = useLocations();
  const navigate = useNavigate();
  const { setItem } = useSessionStorage();
  const { setUser } = useAuth();

  const inputsSignUpData = [
    {
      htmlFor: "firstName",
      labelTitle: "First Name:",
      type: "text",
      name: "firstName",
      placeholder: "Enter your first name...",
    },
    {
      htmlFor: "lastName",
      labelTitle: "Last Name:",
      type: "text",
      name: "lastName",
      placeholder: "Enter your last name...",
    },
    {
      htmlFor: "email",
      labelTitle: "Email:",
      type: "email",
      name: "email",
      placeholder: "Enter your email...",
    },
    {
      htmlFor: "locationId",
      labelTitle: "Location:",
      type: "select",
      name: "locationId",
      placeholder: "Select location",
      options: locations.map((location: LocationData) => ({
        value: location.id,
        label: location.name,
      })),
    },
    {
      htmlFor: "password",
      labelTitle: "Password:",
      type: "password",
      name: "password",
      placeholder: "Enter your password...",
    },
  ];

  return (
    <Wrapper>
      <ImageSignUp src={imageSignUp} alt="image-sign-up" />
      <ReusableForm
        formHeading="Sign Up"
        inputsData={inputsSignUpData}
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          locationId: "",
          password: "",
          error: "",
        }}
        validationSchema={signUpValidationSchema}
        onSubmit={async (values: SignUpFormData) => {
          const url = endpointAPI.SIGN_UP;
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
        }}
        buttonText="Sign Up"
      />
    </Wrapper>
  );
};
