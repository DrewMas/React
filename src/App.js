import Users from "./components/users/Users";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";
import './App.css'

export default function App() {


  return (
      <div>
        {/*<Users/>*/}

        <Router>
          <div className={'router'}>
            <button className={'buttonLink'}><Link to={'/users'} className={'link'}>To Users</Link></button>
            <button className={'buttonLink'}><Link to={'/posts'} className={'link'}>To Posts</Link></button>
            <button className={'buttonLink'}><Link to={'/comments'} className={'link'}>To Comments</Link>
            </button>
          </div>
          <Switch>
            <Route path={'/users'} render={() => (<Users/>)}/>
            <Route path={'/posts'} render={() => (<Posts/>)}/>
            <Route path={'/comments'} render={() => (<Comments/>)}/>
          </Switch>
        </Router>
      </div>
  );
}