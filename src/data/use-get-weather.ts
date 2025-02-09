import { useCallback, useEffect, useState } from "react";
import { BASE_URL, API_KEY } from "../utils/consts";
import { getGeolocation } from "./get-current-location";
import { Weather } from "../utils/types";

export const useGetWeather = () => {
  const [data, setData] = useState<Weather | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setError(null)
  }, [data])

  const fetchData = useCallback(async (lat: number, lon: number) => {
    setError(null);

    try {
      const response = await fetch(
        `${BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=ru&units=metric`
      );

      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const weatherData = await response.json();

      setData(weatherData);
    } catch (err) {
      setError((err as Error).message || "An error occurred while fetching data.");
    }
  }, []);

  const fetchWeatherFromCurrentLocation = useCallback(async () => {
    try {
      const { lat, lon } = await getGeolocation();
      await fetchData(lat, lon);
    } catch (error) {
      setError(`${error}`);
    }
  }, [fetchData]);

  useEffect(() => {
    fetchWeatherFromCurrentLocation();
  }, [fetchWeatherFromCurrentLocation]);


  return {
    data,
    error,
    setError,
    setWeatherInfo: setData,
    fetchWeatherFromCurrentLocation,
  };
};
