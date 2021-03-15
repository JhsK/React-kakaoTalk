import React from "react";
import { Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ChatPage from "./pages/ChatPage";
import AddPage from "./pages/AddPage";

const App = () => {
  return (
    <>
      <Route component={MainPage} path="/" exact />
      <Route component={ChatPage} path="/chat" />
      <Route component={AddPage} path="/add" />
    </>
  );
};

export default App;
