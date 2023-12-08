import Word from "./components/Word";
import "./App.css";
import Button from "./components/Button";
import SocialShare from "./components/SocialShare";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>W.O.T.D - Word Of The Day Game</h1>
      </header>
      <div id="body">
        <Word buttonState="notClicked" />
        <Button />
        <SocialShare />
      </div>
    </div>
  );
}

export default App;
