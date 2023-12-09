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
        <h2>Share on social</h2>
        <div className="social-stack">
          <SocialShare socialName="Facebook" url="https://www.facebook.com" />
          <SocialShare socialName="X" url="https://www.x.com" />
          <SocialShare socialName="LinkedIn" url="https://www.linkedin.com" />
        </div>
      </div>
    </div>
  );
}

export default App;
