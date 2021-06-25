import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import Cube from './components/Cube/Cube';

{/* <Router>
<Switch>
  <React.StrictMode>
    <Route path="/" exact component={Cube} />
    <Route path="/home" component={App} />
  </React.StrictMode>
</Switch>
</Router> */}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  ,
  document.getElementById('root')
);

