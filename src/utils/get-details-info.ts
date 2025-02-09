import { InfoItem, WeatherDetails } from "./types";

export const getDetailsInfo = (details: WeatherDetails | null): InfoItem[] => {
  const result = [
    {
      label: "Ветер",
      info: details?.wind.speed && Math.floor(details.wind.speed) + " м/с",
    },
    {
      label: "Давление",
      info:
        details?.main?.grnd_level &&
        convertPressureToMmHh(details.main.grnd_level) + " мм рт.ст.",
    },
    {
      label: "Влажность",
      info: details?.main?.humidity && details?.main?.humidity + "%",
    },
    {
      label: "Вероятность дождя",
      info: details?.rain?.["1h"],
    },
  ];

  return result;
};

const hPaToMmHgConversionFactor = 0.750062;

const convertPressureToMmHh = (pressure: number) =>
  Math.floor(pressure * hPaToMmHgConversionFactor);
