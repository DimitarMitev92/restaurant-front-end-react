import {
  Description,
  HeroTitle,
  HeroWrapper,
  WrapperImg,
  WrapperInfo,
} from "./LandingHero.style";
import imageSrc from "../../../../images/logan-jeffrey-g5DNZ4X6RSc-unsplash.jpg";
import UnifiedInput from "../../../ui-elements/input";
import { PulseLoader } from "react-spinners";
import { useLandingHeroLogic } from "./LandingHero.logic";
import { LandingHeroProps } from "./LandingHero.static";

export const LandingHero: React.FC<LandingHeroProps> = ({
  selectedLocation,
  setSelectedLocation,
}) => {
  const {
    error,
    options,
    isLoading,
    handleLocationChange,
    selectedLocationName,
  } = useLandingHeroLogic(selectedLocation, setSelectedLocation);

  return (
    <HeroWrapper>
      <WrapperInfo>
        <HeroTitle>Are you hungry?</HeroTitle>
        <Description>Order something delicious</Description>
        {isLoading && <PulseLoader color="#4caf50" size={5} />}
        {error && <p>Error fetching locations.</p>}
        {!isLoading && !error && (
          <UnifiedInput
            type="select"
            onChange={handleLocationChange}
            value={selectedLocationName}
            placeholder="Select location"
            name="location"
            options={options || []}
          />
        )}
      </WrapperInfo>
      <WrapperImg>
        <img src={imageSrc} alt="header img" />
      </WrapperImg>
    </HeroWrapper>
  );
};
