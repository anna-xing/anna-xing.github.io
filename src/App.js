import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { GlobalStyle, lightTheme, darkTheme } from "./themes";
import { Nav, PageContainer, Footer, useDarkTheme } from "./components";
import { AboutPage, PlayPage, WorkPage } from "./pages";

export default function App() {
  const [themeType, toggleThemeType] = useDarkTheme();
  const currTheme = themeType === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={currTheme}>
      <BrowserRouter basename="/">
        <GlobalStyle />
        <PageContainer>
          <Nav themeType={themeType} toggleThemeType={toggleThemeType} />
          <Switch>
            <Route path="/about">
              <AboutPage theme={currTheme} />
            </Route>
            <Route path="/play">
              <PlayPage theme={currTheme} />
            </Route>
            <Route path="/">
              <WorkPage theme={currTheme} />
            </Route>
          </Switch>
          <Footer />
        </PageContainer>
      </BrowserRouter>
    </ThemeProvider>
  );
}
