import { capitalizeFirstLetter } from "../../utils/helpers";
import { celsiusToFahrenheit } from "../../utils/transform-temp";
import { MeasurementFormat } from "../../utils/types";
import "./styles.css";

type Props = {
  temp?: number;
  description?: string;
  imageId?: string;
  measurementFormat: MeasurementFormat;
};

const IMG_BASE_URL = "https://openweathermap.org/img/wn";
const getImageUrl = (imageId: string) => `${IMG_BASE_URL}/${imageId}.png`;

export const WeatherInfo = ({
  temp,
  description,
  measurementFormat,
  imageId,
}: Props) => {
  const properTemp =
    measurementFormat === MeasurementFormat.Celsius
      ? temp
      : celsiusToFahrenheit(temp);

  return (
    <div className="weather-info-container">
      <div className="temp-info">
        {imageId ? (
          <img width={150} height={150} src={getImageUrl(imageId)} />
        ) : null}
        {properTemp ? Math.floor(properTemp) : "-"}º
      </div>
      <div className="detailed-info">
        {description ? capitalizeFirstLetter(description) : "-"}
      </div>
    </div>
  );
};
