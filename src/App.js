import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { GlobalStyle, lightTheme, darkTheme } from "./themes";
import { Nav, PageContainer, Footer, useDarkTheme } from "./components";
import { AboutPage, PlayPage, WorkPage, ProjectPage } from "./pages";

export default function App() {
  const [themeType, toggleThemeType] = useDarkTheme();
  const currTheme = themeType === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={currTheme}>
      <BrowserRouter basename="/">
        <GlobalStyle />
        <PageContainer>
          <Nav theme={currTheme} themeType={themeType} toggleThemeType={toggleThemeType} />
          <Switch>
            <Route path="/about" children={<AboutPage theme={currTheme} />} />
            <Route path="/play" children={<PlayPage theme={currTheme} />} />
            <Route path="/work/:id" children={<ProjectPage />} />
            <Route path="/" children={<WorkPage theme={currTheme} />} />
          </Switch>
          <Footer />
        </PageContainer>
      </BrowserRouter>
    </ThemeProvider>
  );
}
