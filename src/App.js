import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Dashboard from './pages/Dashboard';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/order">

        </Route>
        <Route path="/menu">

        </Route>
      </Switch>
    </Router>

  );
}

export default App;
