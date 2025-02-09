import { WeatherCondition } from "./types";

export const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
export const API_KEY = import.meta.env.VITE_API_KEY;

export const backgroundStyles: Record<WeatherCondition, string>  = {
  Clear: "linear-gradient(to top,rgb(121, 165, 206), #1e90ff)",
  Clouds: "linear-gradient(to top,rgb(16, 90, 187), #d3d3d3)",
  Rain: "linear-gradient(to top, #708090, #2f4f4f)",
  Snow: "linear-gradient(to top, #00f5ff, #f0f8ff)",
  Thunderstorm: "linear-gradient(to top, #483d8b, #8a2be2)",
  Drizzle: "linear-gradient(to top, #b0e0e6, #add8e6)",
};
