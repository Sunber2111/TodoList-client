import React, { Fragment } from "react";
import "./style.css";
import HomePage from "../papes/HomePage";
import { Route, Switch } from "react-router-dom";
import Navbar from "../../features/navbar/Navbar";
import TasksPage from "../papes/TasksPage";
const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/tasks" exact component={TasksPage} />
      </Switch>
    </Fragment>
  );
};

export default App;
