import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function Inventar({item}) {

    return (
        <div>
            <div>
                {item.title} - <Link to={item.description}>Description</Link> <br/>
                {item.category} <br/>
                Price is: {item.price} <br/>
                Available in stock: {item.stock}
                <hr/>
            </div>
        </div>
    )
}