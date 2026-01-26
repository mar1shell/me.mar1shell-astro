import useDarkMode from "../../hooks/useDarkMode/useDarkMode";
import "./DarkModeSwitch.css";

/**
 * DarkModeSwitch component for toggling dark mode imported from
 * https://uiverse.io/RiccardoRapelli/jolly-chicken-91
 * Thanks to Riccardo Rapelli for the inspiration!
 * I implemented the custom hook for managing dark mode state.
 */
function DarkModeSwitch() {
  const [isDarkMode, setDarkMode] = useDarkMode();

  return (
    <label className="switch interactive" aria-label="Toggle dark mode">
      <input
        id="input"
        type="checkbox"
        checked={isDarkMode}
        onChange={() => setDarkMode((prev) => !prev)}
      />
      <div className="slider round scale-80 md:scale-90">
        <div className="sun-moon">
          <svg id="moon-dot-1" className="moon-dot" viewBox="0 0 100 100">
            <circle cx={50} cy={50} r={50} />
          </svg>
          <svg id="moon-dot-2" className="moon-dot" viewBox="0 0 100 100">
            <circle cx={50} cy={50} r={50} />
          </svg>
          <svg id="moon-dot-3" className="moon-dot" viewBox="0 0 100 100">
            <circle cx={50} cy={50} r={50} />
          </svg>
          <svg id="light-ray-1" className="light-ray" viewBox="0 0 100 100">
            <circle cx={50} cy={50} r={50} />
          </svg>
          <svg id="light-ray-2" className="light-ray" viewBox="0 0 100 100">
            <circle cx={50} cy={50} r={50} />
          </svg>
          <svg id="light-ray-3" className="light-ray" viewBox="0 0 100 100">
            <circle cx={50} cy={50} r={50} />
          </svg>
          <svg id="cloud-1" className="cloud-dark" viewBox="0 0 100 100">
            <circle cx={50} cy={50} r={50} />
          </svg>
          <svg id="cloud-2" className="cloud-dark" viewBox="0 0 100 100">
            <circle cx={50} cy={50} r={50} />
          </svg>
          <svg id="cloud-3" className="cloud-dark" viewBox="0 0 100 100">
            <circle cx={50} cy={50} r={50} />
          </svg>
          <svg id="cloud-4" className="cloud-light" viewBox="0 0 100 100">
            <circle cx={50} cy={50} r={50} />
          </svg>
          <svg id="cloud-5" className="cloud-light" viewBox="0 0 100 100">
            <circle cx={50} cy={50} r={50} />
          </svg>
          <svg id="cloud-6" className="cloud-light" viewBox="0 0 100 100">
            <circle cx={50} cy={50} r={50} />
          </svg>
        </div>
        <div className="stars">
          <svg id="star-1" className="star" viewBox="0 0 20 20">
            <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z" />
          </svg>
          <svg id="star-2" className="star" viewBox="0 0 20 20">
            <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z" />
          </svg>
          <svg id="star-3" className="star" viewBox="0 0 20 20">
            <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z" />
          </svg>
          <svg id="star-4" className="star" viewBox="0 0 20 20">
            <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z" />
          </svg>
        </div>
      </div>
    </label>
  );
}

export default DarkModeSwitch;
