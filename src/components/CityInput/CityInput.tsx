import { useEffect, useState } from "react";
import "./styles.css";
import { API_KEY, BASE_URL } from "../../utils/consts";
import { Weather } from "../../utils/types";

const getWeatherApiUrl = (city: string) =>
  `${BASE_URL}?q=${city}&appid=${API_KEY}&lang=ru&units=metric`;

type Props = {
  handleCityChange: (data: Weather) => void;
  handleInputClose: () => void;
};

export const CityInput = ({ handleCityChange, handleInputClose }: Props) => {
  const [cityName, setCityName] = useState("");
  const [error, setError] = useState<undefined | string>(undefined);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (cityName.trim().length === 0) {
      setError("Введите название города");
      handleInputClose();
      return;
    }

    const url = getWeatherApiUrl(cityName);

    try {
      setLoading(true);
      setError(undefined);
      const result = await fetch(url);

      if (!result.ok) {
        const errorResponse = await result.json();
        if (errorResponse.cod === "404") {
          throw new Error("Город не найден");
        }

        throw new Error(errorResponse.message || "Неизвестная ошибка");
      }

      const parsedResult = await result.json();
      handleCityChange(parsedResult);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Ошибка загрузки";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setError(undefined);
  }, [cityName]);

  return (
    <div className="city-input-container">
      <input
        id="city-input"
        name="city"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        aria-invalid={!!error}
      />
      <button
        type="submit"
        className="submit-btn"
        onClick={handleSubmit}
        disabled={loading}
        aria-busy={loading}
      >
        {loading ? <div className="loader" /> : "OK"}
      </button>
      {error && (
        <span role="alert" aria-live="polite">
          {error}
        </span>
      )}
    </div>
  );
};
