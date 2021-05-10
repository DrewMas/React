import './Post.css'
import {useState} from "react";

export default function Post({item, search}) {
    return (
        <div className={'post'}>
            <div>{item.id} -
                <i>Title</i> - {item.title} <br/>
            </div>
            <div>
                <button onClick={() => search(item.id)}>Post</button>
            </div>
        </div>

    );
}

