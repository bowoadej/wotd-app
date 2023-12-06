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
        <CookieConsent enableDeclineButton>This website uses cookies to enhance the user experience.</CookieConsent>
        <AdsContainer />
      </div>
    </div>
  );
}

export default App;
