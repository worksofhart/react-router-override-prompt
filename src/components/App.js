import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import Home from "./Home";
import FormPage from "./PromptPage";
import "./App.css";

const App = () => (
  <div>
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/form">Form</Link>
          </li>
        </ul>
      </nav>
    </header>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/form" component={FormPage} />
    </Switch>
  </div>
);

export default App;
