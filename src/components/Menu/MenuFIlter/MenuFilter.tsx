import { MenuProps } from "../../../static/interfaces";
import { FilterHolder } from "./MenuFIlter.style";

export const MenuFilter: React.FC<MenuProps> = ({ menu, filter }) => {
  return (
    <FilterHolder
      onClick={() => {
        filter(menu.type);
      }}
    >
      {menu.type}
    </FilterHolder>
  );
};
