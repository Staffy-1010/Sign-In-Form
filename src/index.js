import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import Home from './Home';

ReactDOM.render(
  <React.Fragment>
  <Home></Home>
  </React.Fragment>,
  document.getElementById('root')
);