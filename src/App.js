import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { GlobalStyle, lightTheme, darkTheme } from "./themes";
import { Nav, PageContainer } from "./components";
import { AboutPage, PlayPage, WorkPage } from "./pages";

export default function App() {
  let theme = lightTheme;

  return (
    <ThemeProvider theme={theme}>
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
              <WorkPage theme={theme}/>
            </Route>
          </Switch>
        </PageContainer>
      </BrowserRouter>
    </ThemeProvider>
  );
}
