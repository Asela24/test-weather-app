import { useState } from "react";
import { LocationIcon } from "../../assets/LocationIcon";
import { Weather } from "../../utils/types";
import "./styles.css";
import { CityInput } from "../CityInput/CityInput";

type Props = {
  cityName?: string;
  changeLocation: React.Dispatch<React.SetStateAction<Weather | null>>;
  fetchFromCurrentLocation: () => void;
};

export const CitySelection = ({
  cityName,
  changeLocation,
  fetchFromCurrentLocation,
}: Props) => {
  const [cityInput, setShowCityInput] = useState(false);

  const handleCityChange = (data: Weather) => {
    changeLocation(data);
    setShowCityInput(false);
  };

  if (cityInput) {
    return (
      <CityInput
        handleCityChange={handleCityChange}
        handleInputClose={() => setShowCityInput(false)}
      />
    );
  }

  return (
    <div className="city-selection-container">
      <h3>{cityName ? cityName : "-"}</h3>
      <div className="location-btns-container">
        <button onClick={() => setShowCityInput(true)}>Сменить город</button>
        <button className="location-btn" onClick={fetchFromCurrentLocation}>
          <LocationIcon />
          Мое местоположение
        </button>
      </div>
    </div>
  );
};
