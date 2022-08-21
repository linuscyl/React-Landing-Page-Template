import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import { BrowserRouter } from "react-router-dom";
import { Navigation } from './components/navigation';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
// import Home from './components/Home';
import { User } from './components/User';
import { Projects } from './components/Projects';
import styled, {ThemeProvider} from 'styled-components';
import { NotFoundPage } from './components/NotFoundPage';

const MainThemePrivider = styled.div`
  max-width: 1280px;
  margin: auto;
`;

const theme = {
  breakpoints: {
    xs: "0px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
  },
  contentPadding: "1rem 5rem"
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Navigation />
      <MainThemePrivider>
        <Router>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="user" element={<User />} />
            <Route path="projects" element={<Projects />} />
            <Route path="/*" element={<NotFoundPage/>} />
          </Routes>
        </Router>
      </MainThemePrivider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
