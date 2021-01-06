import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { GlobalStyle, lightTheme, darkTheme } from "./themes";
import { Nav, PageContainer, Footer } from "./components";
import { AboutPage, PlayPage, WorkPage } from "./pages";

export default function App() {
  let theme = darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <PageContainer>
          <Nav />
          <Switch>
            <Route path="/about">
              <AboutPage theme={theme} />
            </Route>
            <Route path="/play">
              <PlayPage theme={theme} />
            </Route>
            <Route path="/">
              <WorkPage theme={theme} />
            </Route>
          </Switch>
          <Footer />
        </PageContainer>
      </BrowserRouter>
    </ThemeProvider>
  );
}
