import React from "react";
import { Route } from "react-router-dom";

import StyledBg from "./lib/styles/StyledBg";
import MainPage from "./pages/MainPage";
import ChatPage from "./pages/ChatPage";
import AddPage from "./pages/AddPage";

const App = () => {
  return (
    <StyledBg>
      <Route component={MainPage} path="/" exact />
      <Route component={ChatPage} path="/chat" />
      <Route component={AddPage} path="/add" />
    </StyledBg>
    // <StyledTemplate>
    //   <Route component={MainPage} path="/" exact />
    //   <Route component={ChatPage} path="/chat" />
    //   <Route component={AddPage} path="/add" />
    // </StyledTemplate>
  );
};

export default App;
