import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function Person({item}) {

    return (
        <div>
            <div>
                {item.name} - {item.born} -
                <Link to={item.url}>Detailed info</Link>
            </div>
        </div>
    )
}