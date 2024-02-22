import { useAuth } from "../../../context/AuthProvider";
import Button from "../../ui-elements/button";
import {
  ButtonContainer,
  DashboardContainer,
  Header,
  WrapperDashBoard,
} from "../AdminDashboard/AdminDashboard.style";

import { useProfileLogic } from "./Profile.logic";

export const Profile = () => {
  const { handleButtonClick, forms, renderForm } = useProfileLogic();
  const { user } = useAuth();

  return (
    <WrapperDashBoard>
      <DashboardContainer>
        <Header>
          Profile {user?.user.firstName} {user?.user.lastName} -{" "}
          {user?.user.rights}
        </Header>
        <ButtonContainer>
          {forms.map(({ label, formName, path }) => (
            <Button
              key={formName}
              label={label}
              color="--color-green"
              onClick={() => handleButtonClick(formName, path)}
            />
          ))}
        </ButtonContainer>
        {renderForm()}
      </DashboardContainer>
    </WrapperDashBoard>
  );
};
