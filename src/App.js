import "./App.css";
import { createContext, useState } from "react";
import Footer from "./Footer";
import Button from "./components/Button";
import EmailContainer from "./components/EmailContainer";
import SocialShare from "./components/SocialShare";
import CookiesManagement from "./components/CookiesManagement";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Privacy from "./Privacy";

function App() {
  return (
    <div className="App">
      <h1 className="page-title">W.O.T.D - Word Of The Day Game</h1>

      <Router>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />

        </Routes>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>
            </ul>
          </nav>
        </div>
      </Router >
      <div id="bottom">
        <Footer />
      </div>
    </div>
  );
}

export default App;
