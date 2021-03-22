import React from "react";
import { Route } from "react-router-dom";

import StyledBg from "./lib/styles/StyledBg";
import MainPage from "./pages/MainPage";
import ChatPage from "./pages/ChatPage";
import AddPage from "./pages/AddPage";
import LoginPage from "./pages/LoginPage";
import JoinPage from "./pages/JoinPage";

const App = () => {
  return (
    <StyledBg>
      {/* <Route component={MainPage} path="/" exact /> */}
      <Route component={LoginPage} path="/" exact />
      <Route component={ChatPage} path="/chat" />
      <Route component={AddPage} path="/add" />
      <Route component={JoinPage} path="/join" />
    </StyledBg>
    // <StyledTemplate>
    //   <Route component={MainPage} path="/" exact />
    //   <Route component={ChatPage} path="/chat" />
    //   <Route component={AddPage} path="/add" />
    // </StyledTemplate>
  );
};

export default App;
