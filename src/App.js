import "./App.css";
import { createContext, useState } from "react";
import Footer from "./Footer";
import Button from "./components/Button";
import EmailContainer from "./components/EmailContainer";
import SocialShare from "./components/SocialShare";
import CookiesManagement from "./components/CookiesManagement";


function App() {
  const cookieValue = createContext(false);
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="page-title">W.O.T.D - Word Of The Day Game</h1>
      </header>
      <div id="body">
        <p>W.O.T.D is an app for generating Word Of The Day.<br>
        </br> Word Of The Day is a great way to improve your vocabulary. You can click on the Word Of The Day to get a dictionary definition.</p>

        <Button />
        <h2>Share on social</h2>
        <div className="social-stack">
          <SocialShare socialName="Facebook" url="https://www.facebook.com" />
          <SocialShare socialName="X" url="https://www.x.com" />
          <SocialShare socialName="LinkedIn" url="https://www.linkedin.com" />
        </div>
        <EmailContainer />
        <Footer />
      </div>
      <CookiesManagement />

    </div>
  );
}

export default App;
