import React from "react";
import { useNavigate } from "react-router-dom";

const PostItem = ({post, remove}) => {

 const navigate = useNavigate();

 return (
    <div className="post">
        <div className="post__contant">
            <strong>{post.id}. {post.title}</strong>
            <div>{post.body}</div>
        </div>
        <div className="post__btn-wrapper">
            <div className="post__btn">
                <button onClick={() => navigate(`/posts/${post.id}`, {state: { post }})}>Открыть</button>
            </div>
            <div className="post__btn">
                <button onClick={() => remove(post)}>Удалить</button>
            </div>
        </div>
    </div>
 )};

export default PostItem;
