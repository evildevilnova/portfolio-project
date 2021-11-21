import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import App from './App';

=======
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
>>>>>>> aa5587d4ba9c0aa0af8af37bfe6f96daf8bac59f

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  ,
  document.getElementById('root')
);

