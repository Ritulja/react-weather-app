import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather city="Tokyo" />
        <footer>
          <p>
            This project was coded by{" "}
            <a
              href="https://taupe-bienenstitch-309e9f.netlify.app/"
              target="_blank"
              without
              rel="noreferrer"
            >
              Margareta Krajnikovics
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/Ritulja/react-weather-app"
              target="_blank"
              without
              rel="noreferrer"
            >
              open-sourced{" "}
            </a>{" "}
            on GitHub.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
