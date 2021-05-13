import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Cast from "./components/cast/Cast";
import Inventory from "./components/inventory/Inventory";

export default function App() {


  return (
    <div>
      <Router>
        <div>
          <Link to={'/cast'}>To Characters</Link>
          <Link to={'/inventory'}>To Inventory</Link>
        </div>
        <Switch>
          <Route exact={true} path={'/cast'} render={(props)=> (<Cast/>)}/>
          <Route exact={true} path={'/inventory'} render={(props)=> (<Inventory/>)}/>
        </Switch>
      </Router>
    </div>
  );
}




