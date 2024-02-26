import { Dispatch, SetStateAction } from "react";

export interface Location {
  id: string;
  name: string;
}

export interface LandingHeroProps {
  selectedLocation: string;
  setSelectedLocation: Dispatch<SetStateAction<string>>;
}
