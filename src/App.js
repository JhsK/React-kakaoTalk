import React from "react";
import palette from "./lib/styles/palette";
import styled from "styled-components";
import { Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import ChatPage from "./pages/ChatPage";
import AddPage from "./pages/AddPage";

const StyledTemplate = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background: ${palette.gray[2]};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <StyledTemplate>
      <Route component={MainPage} path="/" exact />
      <Route component={ChatPage} path="/chat" />
      <Route component={AddPage} path="/add" />
    </StyledTemplate>
  );
};

export default App;
