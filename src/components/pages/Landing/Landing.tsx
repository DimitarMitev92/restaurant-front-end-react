import React, { useState } from "react";
import { LandingHero } from "./LandingHero/LandingHero";
import { LandingProps } from "./Landing.statuc";
import { LandingAboutUs } from "./LandingAboutUs/LandingAboutUs";
import { LandingRestaurants } from "./LandingRestaurants/LandingRestaurants";
import { LandingMostOrdered } from "./LandingMostOrdered/LandingMostOrdered";
import { ScrollToTopButton } from "../../ScrollToTopButton/ScrollToTopButton";

export const Landing: React.FC<LandingProps> = () => {
  const [selectedLocation, setSelectedLocation] = useState<string>("");

  return (
    <>
      <LandingHero
        selectedLocation={""}
        setSelectedLocation={setSelectedLocation}
      />
      <LandingRestaurants selectedLocation={selectedLocation} />
      <LandingMostOrdered />
      <LandingAboutUs />
      <ScrollToTopButton target="top" text="Scroll To Top" />
    </>
  );
};
