import {useEffect, useState} from "react";
import axiosInstance from '../../components/services/api'
import Post from "../post/Post";
import './Posts.css'

export default function Posts() {

    let [posts, setPosts] = useState([]);
    let [singlePost, setSingePost] = useState({});

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
                   singlePost ? (<div>{singlePost.body}</div>) : (<div></div>)
                }
            </div>
        </div>
    );
}