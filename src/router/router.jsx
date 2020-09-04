import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home, Login, About } from "../pages";
import ChatPage from "./../pages/chat/index";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/login" render={() => <Login />} />
          <Route exact path="/about" render={() => <About />} />
          <Route exact path="/chat" render={() => <ChatPage />} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
