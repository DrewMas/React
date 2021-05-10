import {useEffect, useState} from "react";
import axiosInstance from '../../components/services/api'
import Comment from "../comment/Comment";
import './Comments.css'

export default function Comments() {

    let [comments, setComments] = useState([]);
    let [singleComment, setSingleComment] = useState({});

    useEffect(() => {
        axiosInstance.get('/comments').then(value => setComments(value.data))
    }, [])

    const search = (id) => {
        let findComment = comments.find(value => value.id === id)
        setSingleComment(findComment);
        console.log(id)
    }

    return (
        <div className={'wrap'}>
            <div className={'commentsBox'}>
                {
                    comments.map((value) => <Comment
                        key={value.id}
                        item={value}
                        search={search}
                    />)
                }
            </div>

            <div className={'singleComment'}>
                {
                    singleComment ? (<div>{singleComment.body}</div>) : (<div></div>)
                }
            </div>
        </div>
    );
}