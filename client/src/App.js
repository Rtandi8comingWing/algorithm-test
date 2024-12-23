import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './loginPage';
import RegisterPage from './registerPage';

function App() {
  return (
    <Router>
      <div className="App">
        <h2>Login / Register</h2>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route exact path="/" render={() => <div>Please choose to login or register.</div>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;