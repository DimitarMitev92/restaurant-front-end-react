import { Outlet } from "react-router-dom";
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
  const { handleButtonClick, forms } = useProfileLogic();
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
              color="var(--color-green)"
              onClick={() => handleButtonClick(formName, path)}
            />
          ))}
        </ButtonContainer>
        <Outlet />
      </DashboardContainer>
    </WrapperDashBoard>
  );
};
