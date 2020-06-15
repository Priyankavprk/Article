import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Table from './components/Table';
import Detail from './components/Card';

ReactDOM.render(
  <React.StrictMode>
    {/* <App />
     */}
     <Router>
      <Route path='/' exact component={App} />
      <Route path='/table' component={Table} />
      <Route path='/detail' component={Detail} />
     </Router>
     
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
