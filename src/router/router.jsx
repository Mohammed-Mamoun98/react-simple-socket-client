import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home, Login, About } from "../pages";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/login" render={() => <Login />} />
          <Route exact path="/about" render={() => <About />} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
