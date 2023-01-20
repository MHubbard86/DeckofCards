import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";
import Routes from "./navigation/Routes";
import Layout from "./layout/Layout";
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./styles/themes";
import { GlobalStyles } from "./styles/GlobalCSS";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={lightTheme}>
        <GlobalStyles />
        <BrowserRouter>
          <Layout>
            <Routes />
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

export default App;
