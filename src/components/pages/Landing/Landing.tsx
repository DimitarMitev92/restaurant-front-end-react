import { LandingHero } from "./LandingHero/LandingHero";
import { LandingProps } from "./Landing.statuc";
import { LandingAboutUs } from "./LandingAboutUs/LandingAboutUs";
import { LandingRestaurants } from "./LandingRestaurants/LandingRestaurants";
import { LandingMostOrdered } from "./LandingMostOrdered/LandingMostOrdered";

export const Landing: React.FC<LandingProps> = () => {
  return (
    <>
      <LandingHero />
      <LandingRestaurants />
      <LandingMostOrdered />
      <LandingAboutUs />
    </>
  );
};
