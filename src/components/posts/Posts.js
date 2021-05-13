import {useEffect, useState} from "react";
import axiosInstance from '../../services/api'
import Post from "../post/Post";
import './Posts.css'

export default function Posts() {

    let [posts, setPosts] = useState([]);
    let [singlePost, setSingePost] = useState(null);

    useEffect(() => {
        axiosInstance.get('/posts').then(value => setPosts(value.data))
    },[])

    const search = (id)=> {
        let findPost = posts.find(value => value.id === id);
        setSingePost(findPost);
    }

    return (
        <div className={'wrap'}>
            <div className={'postsBox'}>
                {
                    posts.map((value) => <Post
                        key={value.id}
                        item={value}
                        search={search}
                    />)
                }
            </div>

            <div className={'singePost'}>
                {
                    singlePost && <p>{singlePost.body}</p>
                }
            </div>
        </div>
    );
}