import { ChangePassword } from "../Forms/ChangePassword/ChangePassword";
import { CreateAddress } from "../Forms/CreateAddress/CreateAddress";
import { Wrapper } from "../Forms/SignIn/SignInForm.style";

export const Profile = () => {
  return (
    <Wrapper>
      <ChangePassword />
      <CreateAddress />
    </Wrapper>
  );
};
