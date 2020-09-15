import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Components/Layout/Header/Header";
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Header} />
        <Route path="/checkout" render={() => <h1>checkout page</h1>} />
        <Route path="/login" render={() => <h1>login</h1>} />
        <Route render={() => <p>Page not found</p>} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
