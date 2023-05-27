import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import React from 'react'
import Dashboard from './pages/Dashboard';
import Menu from './pages/Menu';
import CreateMenu from './pages/CreateMenu';
import EditMenu from './pages/EditMenu';
import Restaurant from './pages/Restaurant';
import CreateRestaurant from './pages/CreateRestaurant';
import Order from './pages/Order';
import Analytics from './pages/Analytic';
import Login from './components/Login/Login';
import Signup from './components/Login/Signup';
function App() {
  return (
    <Router>
      <Switch>
        < Route exact path="/">
          <Redirect to='/dashboard' />
        </Route>

        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/analytics">
          <Analytics />
        </Route>
        <Route path="/order">
          <Order />
        </Route>
        <Route path="/restaurant">
          <Restaurant />
        </Route>

        <Route path="/menu">
          <Menu />
        </Route>

        <Route path="/create-menu">
          <CreateMenu />
        </Route>

        <Route path="/create-restaurant">
          <CreateRestaurant />
        </Route>

        <Route path="/edit-menu">
          <EditMenu />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
