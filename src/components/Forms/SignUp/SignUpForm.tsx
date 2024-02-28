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
import { inputsSignUpData } from "./SignUpForm.static";

export const SignUpForm: React.FC<SignUpFormProps> = ({ onSubmit }) => {
  const { locations = [] } = useLocations();
  const navigate = useNavigate();
  const { setItem } = useSessionStorage();
  const { setUser } = useAuth();

  const inputsSignUpDataWithLocation = [
    ...inputsSignUpData,
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
  ];

  return (
    <Wrapper>
      <ImageSignUp src={imageSignUp} alt="image-sign-up" />
      <ReusableForm
        formHeading="Sign Up"
        inputsData={inputsSignUpDataWithLocation}
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          locationId: "",
          password: "",
          comparePassword: "",
          error: "",
        }}
        validationSchema={signUpValidationSchema}
        onSubmit={async (values: SignUpFormData) => {
          const url = endpointAPI.SIGN_UP;
          const options = {
            method: method.POST,
            headers: headers.CONTENT_TYPE_APP_JSON,
            body: JSON.stringify({
              firstName: values.firstName,
              lastName: values.lastName,
              email: values.email,
              locationId: values.locationId,
              password: values.password,
            }),
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
