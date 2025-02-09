import "./styles.css";

type Props = {
  error: string;
  setError: () => void;
}

export const ErrorBanner = ({ error, setError }: Props) => {
  return (
    <div className="error-banner-container">
      <div className="error-banner">
        <p>{error}</p>
        <button className="close-btn" aria-label="Close" onClick={setError}>
          ✖
        </button>
      </div>
    </div>
  );
};
