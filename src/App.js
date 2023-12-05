import InputTextField from "./components/Textfield";
import Word from "./components/Word";
import Button from "./components/Button";
import "./App.css";

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
