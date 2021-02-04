import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import classes from "./Nav.module.css";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";
import Resume from "./Resume";
import Logo from "../../assets/img/vh_logo.png";
// import Blog from "./Blog";

const Nav = () => {
  return (
    <Router>
      <header className={classes.NavBar}>
        <div>
          <img src={Logo} className={classes.Logo}></img>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Work">Work</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            <li>
              <Link to="/Resume">Resume</Link>
            </li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li>
              <a
                href="https://github.com/Victor-Huynh/"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/victor-huynh/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <Switch>
        <Route path="/Home">Home</Route>
        <Route path="/About">
          <About />
        </Route>
        <Route path="/Work">
          <Work />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
        <Route path="/Resume">
          <Resume />
        </Route>
      </Switch>
    </Router>
  );
};

export default Nav;
