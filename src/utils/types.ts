export type InfoItem = {
  label: string;
  info?: string | number;
};

export type WeatherCondition = "Clear" | "Clouds" | "Rain" | "Snow" | "Thunderstorm" | "Drizzle";

export type Weather = {
  weather: {
    description: string;
    icon: string;
  main?: WeatherCondition
  }[];
  name: string;
} & WeatherDetails;

export type WeatherDetails = {
  main: {
    temp?: number;
    grnd_level?: number;
    humidity?: number;
  };
  wind: {
    speed?: number;
  };
  rain: {
    "1h"?: number;
  };
};

export type Coordinates = { lat: number; lon: number };

export enum MeasurementFormat {
  Celsius = 'Celsius',
  Fahrenheit = 'Fahrenheit',
}