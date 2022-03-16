
import MyButton from "./UI/buttons/MyButton"; 
import MyInput from "./UI/input/MyInput";
import { useState } from "react";
import React from 'react';

const PostForm = ({create}) => {

const [post, setPost] = useState({title: '', body: ''});

  function addNewPost(event) {
    event.preventDefault();

    const newPost = {
        ...post, id: Date.now()
    };
    create(newPost);
    setPost({title: '', body: ''})
  };

 return (
    <div>
        <form className="form">
        <MyInput 
          type="text" 
          placeholder="Название поста"
          value={post.title} 
          onChange={e => setPost({...post, title: e.target.value})}
        />
        <br/>
        <MyInput 
          type="text" 
          placeholder="Описание поста"
          value={post.body} 
          onChange={e => setPost({...post, body: e.target.value})}
        />
        <br/>
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
    </div>
 );
};

export default PostForm;
