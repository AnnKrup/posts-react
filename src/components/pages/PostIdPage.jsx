import React, { useEffect } from "react";
import {useLocation, useParams} from "react-router";
import { useState } from "react/cjs/react.development";
import PostService from "../API/PostService";
import { useFetching } from "../hooks/useFetching";
import MyLoader from "../UI/loader/MyLoader";

const PostIdPage = () => {
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const params = useParams();
    const { state } = useLocation();
    const [fetchingPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(params.id);
             setPost(response.data);
    });
    const [fetchingComments, isComLoading, ComError] = useFetching(async (id) => {
        const response = await PostService.getCommentsById(params.id);
        setComments(response.data);
    });
    
    useEffect( () => {
        fetchingPostById(params.id);
        fetchingComments(params.id);
    }, [])

 return (
     <div>
     { isLoading
        ? <MyLoader/>
        : <div c>
            <h1>Страница с постом номер {params.id}</h1>
            <div className="current-post">{post.id}{error ? state.post.title : post.title}</div>
            <br/> 
            { isComLoading
            ? <MyLoader/>
            : <div>
                    <h3>{comments.length ? "Комментарии пользователей:" : ""}</h3>
                    {comments.map( comm =>
                        <div key={comm.id}>
                            <h5>{comm.email}</h5>
                            <div>{comm.body}</div>
                            <hr/>
                        </div>)
                    }
              </div>
            }
          </div>
        }
    </div>
 );
};

export default PostIdPage;
