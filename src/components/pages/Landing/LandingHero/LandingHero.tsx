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

export const LandingHero = () => {
  const { loading, error, selectedLocation, handleChange, options } =
    useLandingHeroLogic();

  return (
    <HeroWrapper>
      <WrapperInfo>
        <HeroTitle>Are you hungry?</HeroTitle>
        <Description>Order something delicious</Description>
        {loading && <PulseLoader color="#4caf50" size={5} />}
        {error && <p>Error fetching locations.</p>}
        {!loading && !error && (
          <UnifiedInput
            type="select"
            onChange={handleChange}
            value={selectedLocation}
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
