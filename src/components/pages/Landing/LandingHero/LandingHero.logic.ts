import { useState, ChangeEvent } from "react";
import { useLocations } from "../../../../hooks/useLocations";
import { Location } from "./LandingHero.static";

export const useLandingHeroLogic = () => {
  const { locations, loading, error } = useLocations();

  const [selectedLocation, setSelectedLocation] = useState<string>("");

  const handleChange = (
    e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>
  ) => {
    const value = (e.target as HTMLSelectElement).value;
    setSelectedLocation(value);
    console.log(e.target.value);
  };

  const options = locations?.map((location: Location) => ({
    label: location.name,
    value: location.name,
  }));
  return {
    locations,
    loading,
    error,
    selectedLocation,
    setSelectedLocation,
    handleChange,
    options,
  };
};
