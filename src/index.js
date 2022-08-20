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

const TempContent = styled.div`
  max-width: 1280px;
  margin: auto;
`;

const theme = {
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  },
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Navigation />
      <TempContent>
        <Router>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="user" element={<User />} />
            <Route path="projects" element={<Projects />} />
          </Routes>
        </Router>
      </TempContent>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
