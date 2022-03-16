import "../../styles/App.css";
import {useContext, useEffect, useState} from "react";
import React from "react";
import PostList from "../../components/PostList";
import PostForm from "../../components/PostForm";
import MyModal from "../../components/UI/modal/MyModal";
import MyButton from "../../components/UI/buttons/MyButton";
import { usePosts} from "../hooks/usePosts";
import PostService from "../API/PostService";
import PostFilter from "../../components/PostFilter";
import MyLoader from "../../components/UI/loader/MyLoader";
import { useFetching } from "../hooks/useFetching";
import { getPageCount } from "../../utils/pages";
import MyPagination from "../../components/UI/pagination/MyPagination";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort:'', query:''});
  const [modal, setModal] = useState(false);
  const sortedAndSearchesPosts = usePosts(posts, filter.sort, filter.query);
  const [totalPages, setTotalPages] = useState(0);
  const [limit] = useState(10);
  const [page, setPage] = useState(1);

  const [fetchPosts, isPostsLoading, postError] = useFetching( async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  });

  useEffect(() => {
    fetchPosts()
  }, [page])

  function changePage (page) {
    setPage(page);
    fetchPosts();
  }


  function createPost (newPost) {
    setPosts([...posts, newPost]);
    setModal(false)
  }

  function removePost (post){
   setPosts(posts.filter(p => p.id !== post.id))
  }
  
  return (
    <div>
       <div className="container">
        <MyButton onClick={() => setModal(true)}>Создать новый пост</MyButton>
        <MyModal visible={modal} setVisible={setModal}>
          <PostForm create={createPost}/>
        </MyModal>
        <PostFilter filter={filter} setFilter={setFilter}/>
      </div>
      {postError && 
      <h1>Ошибка ${postError}</h1>
      }
      {isPostsLoading 
      ? <MyLoader/>
      :
      <PostList remove={removePost} posts={sortedAndSearchesPosts} title={"Список постов"}/>
      }
      <MyPagination totalPages={totalPages} changePage={changePage} page={page}/>
    </div>
  );
}

export default Posts;
