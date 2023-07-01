import "./Button.css";

const Button = ({ onClick, isCelsius }) => {
  return (
    <button className="weather_button" onClick={onClick}>
      Change &deg;{isCelsius ? "F" : "C"}
    </button>
  );
};

export default Button;