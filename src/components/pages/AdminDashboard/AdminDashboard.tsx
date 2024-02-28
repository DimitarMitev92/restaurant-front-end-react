import {
  DashboardContainer,
  Header,
  ButtonContainer,
  WrapperDashBoard,
} from "./AdminDashboard.style";
import Button from "../../ui-elements/Button/button";
import { useAdminDashboardLogic } from "./AdminDashboard.logic";
import { Locations } from "./DisplayAndDelete/Locations";
import { MenuTypes } from "./DisplayAndDelete/MenuType";
import { Packages } from "./DisplayAndDelete/Package";
import { Categories } from "./DisplayAndDelete/Category";

export const AdminDashboard = () => {
  const {
    activeForm,
    handleButtonClick,
    forms,
    showDataForDelete,
    renderForm,
    handleDeleteLocation,
    handleDeletePackage,
    handleDeleteCategory,
    handleDeleteMenuType,
  } = useAdminDashboardLogic();

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
        <ButtonContainer>
          {showDataForDelete.map(({ label, formName, path }) => (
            <Button
              key={formName}
              label={label}
              color="var(--color-yellow)"
              onClick={() => handleButtonClick(formName, path)}
            />
          ))}
        </ButtonContainer>
        {renderForm()}
        {activeForm === "deleteLocation" && (
          <Locations
            onDelete={(locationId) => handleDeleteLocation(locationId)}
          />
        )}
        {activeForm === "deletePackage" && (
          <Packages onDelete={(packageId) => handleDeletePackage(packageId)} />
        )}
        {activeForm === "deleteCategory" && (
          <Categories
            onDelete={(categoryId) => handleDeleteCategory(categoryId)}
          />
        )}
        {activeForm === "deleteMenuType" && (
          <MenuTypes
            onDelete={(menuTypeId) => handleDeleteMenuType(menuTypeId)}
          />
        )}
      </DashboardContainer>
    </WrapperDashBoard>
  );
};
