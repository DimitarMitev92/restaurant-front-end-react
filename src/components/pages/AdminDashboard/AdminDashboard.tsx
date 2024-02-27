import {
  DashboardContainer,
  Header,
  ButtonContainer,
  WrapperDashBoard,
} from "./AdminDashboard.style";
import Button from "../../ui-elements/button";
import { useAdminDashboardLogic } from "./AdminDashboard.logic";

export const AdminDashboard = () => {
  const { handleButtonClick, forms, renderForm } = useAdminDashboardLogic();

  return (
    <WrapperDashBoard>
      <DashboardContainer>
        <Header>Admin Dashboard</Header>
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
        {renderForm()}
      </DashboardContainer>
    </WrapperDashBoard>
  );
};
