import CookieConsent from "react-cookie-consent";
import Word from "./components/Word";
import "./App.css";
import AdsContainer from "./components/AdsContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>W.O.T.D</h1>
      </header>
      <div id="body">
        <Word />

      </div>
    </div>
  );
}

export default App;
