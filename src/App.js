import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { GlobalStyle, lightTheme } from "./themes";
import { Nav, PageContainer } from "./components";
import { AboutPage, PlayPage, WorkPage } from "./pages";

export default function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <GlobalStyle />
        <PageContainer>
          <Nav />
          <Switch>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/play">
              <PlayPage />
            </Route>
            <Route path="/">
              <WorkPage />
            </Route>
          </Switch>
        </PageContainer>
      </BrowserRouter>
    </ThemeProvider>
  );
}
