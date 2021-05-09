import Users from "./components/users/users";
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";


export default function App() {


    return (
        <div>
            {/*<Users/>*/}

            <Router>
                <Link to={'/users'}>To Users</Link>
                <br/>
                <Link to={'/posts'}>To Posts</Link>
                <br/>
                <Link to={'/comments'}>To Comments</Link>
                <Switch>
                    <Route path={'/users'} render={() => (<Users/>)}/>
                    <Route path={'/posts'} render={() => (<Posts/>)}/>
                    <Route path={'/comments'} render={() => (<Comments/>)}/>
                </Switch>
            </Router>
        </div>
    );
}