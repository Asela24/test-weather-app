import "./App.css";
import { CitySelection } from "./components/CitySelection/CitySelection";
import { FormatSwitcher } from "./components/FormatSwitcher/FormatSwitcher";
import { WeatherInfo } from "./components/WeatherInfo/WeatherInfo";
import { DetailedInfo } from "./components/DetailedInfo/DetailedInfo";
import { useGetWeather } from "./data/use-get-weather";
import { getDetailsInfo } from "./utils/get-details-info";
import { ErrorBanner } from "./components/ErrorBanner/ErrorBanner";
import { useState } from "react";
import { MeasurementFormat } from "./utils/types";
import { WeatherCondition } from "./utils/types";
import { backgroundStyles } from "./utils/consts";

function App() {
  const {
    data,
    error,
    setWeatherInfo,
    setError,
    fetchWeatherFromCurrentLocation,
  } = useGetWeather();
  const [measurementFormat, setMeasurementFormat] = useState<MeasurementFormat>(
    MeasurementFormat.Celsius
  );

  const handleMeasurementFormatChange = (format: MeasurementFormat) => {
    setMeasurementFormat(format);
  };

  const getBackgroundColor = (condition: WeatherCondition = "Clear") => {
    return backgroundStyles[condition] || backgroundStyles.Clear;
  };

  const detailsInfo = getDetailsInfo(data);

  return (
    <main style={{ background: getBackgroundColor(data?.weather[0].main) }}>
      <div className="header-container">
        <CitySelection
          fetchFromCurrentLocation={fetchWeatherFromCurrentLocation}
          cityName={data?.name}
          changeLocation={setWeatherInfo}
        />
        <FormatSwitcher
          measurementFormat={measurementFormat}
          handleMeasurementFormatChange={handleMeasurementFormatChange}
        />
      </div>

      <WeatherInfo
        imageId={data?.weather[0].icon}
        measurementFormat={measurementFormat}
        temp={data?.main.temp}
        description={data?.weather[0].description}
      />

      {error && <ErrorBanner error={error} setError={() => setError(null)} />}
      <DetailedInfo details={detailsInfo} />
    </main>
  );
}

export default App;
