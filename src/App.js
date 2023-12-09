import "./App.css";
import Footer from "./Footer";
import Button from "./components/Button";
import EmailContainer from "./components/EmailContainer";
import SocialShare from "./components/SocialShare";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>W.O.T.D - Word Of The Day Game</h1>
      </header>
      <div id="body">
        <Button />
        <SocialShare />

      </div>
    </div>
  );
}

export default App;
