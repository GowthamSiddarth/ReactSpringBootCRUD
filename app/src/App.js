import React, { Component } from 'react';
import Home from "./Home";
import GroupList from "./GroupList";
import GroupEdit from "./GroupEdit";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/groups" exact={true} component={GroupList} />
          <Route path="/groups/:id" component={GroupEdit} />
        </Switch>
      </Router>
    );
  }
}

export default App;
