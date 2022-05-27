
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import LoggedIn from './components/LoggedIn';
import { Link, Switch, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <>
    <Switch>
        <Route exact path = "/">
            <Home />
        </Route>
        <Route path = "/Login">
            <Login />
        </Route>
        <Route path = "/Register">
            <Register />
        </Route>
        <Route path = "/LoggedIn">
            <LoggedIn/>
        </Route>
      
     
    </Switch>
</>
  );
}

export default App;
