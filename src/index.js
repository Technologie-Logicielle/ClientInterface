import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { initFirebase } from './firebase';

import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from "./App";

initFirebase();

ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById("root")
)
