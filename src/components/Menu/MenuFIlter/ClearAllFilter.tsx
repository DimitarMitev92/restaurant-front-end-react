import { ClearFilterProps } from "../../../static/interfaces";
import { FilterHolder } from "./MenuFIlter.style";

export const ClearAllFilter: React.FC<ClearFilterProps> = ({
  type,
  filter,
}) => {
  return (
    <FilterHolder
      onClick={() => {
        filter(type);
      }}
    >
      {type}
    </FilterHolder>
  );
};
