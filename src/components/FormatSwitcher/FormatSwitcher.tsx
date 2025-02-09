import "./styles.css";
import { MeasurementFormat } from "../../utils/types";

type Props = {
  handleMeasurementFormatChange: (format: MeasurementFormat) => void;
  measurementFormat: MeasurementFormat;
};

export const FormatSwitcher = ({
  handleMeasurementFormatChange,
  measurementFormat,
}: Props) => {
  return (
    <div className="format-switcher-container">
      <span className="dot">º</span>
      <div className="toggle">
        <button
          className={`toggle-btn ${
            MeasurementFormat.Celsius === measurementFormat ? "active" : ""
          }`}
          onClick={() =>
            handleMeasurementFormatChange(MeasurementFormat.Celsius)
          }
        >
          C
        </button>
        <button
          className={`toggle-btn ${
            MeasurementFormat.Fahrenheit === measurementFormat ? "active" : ""
          }`}
          onClick={() =>
            handleMeasurementFormatChange(MeasurementFormat.Fahrenheit)
          }
        >
          F
        </button>
      </div>
    </div>
  );
};
