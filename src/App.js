import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React from 'react'
import Dashboard from './pages/Dashboard';
import Menu from './pages/Menu';
import CreateMenu from './pages/CreateMenu';
import EditMenu from './pages/EditMenu';
import Restaurant from './pages/Restaurant';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/order">

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

        <Route path="/edit-menu">
          <EditMenu />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
