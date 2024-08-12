import { useNavigate } from "react-router-dom";
import { PostStateContext } from "../App";
import { useContext, useState } from "react";
import Header from "../components/Header";
import PostList from "../components/PostList";

const Home = () => {
  const data = useContext(PostStateContext);
  const nav = useNavigate();

  return (
    <div>
      <Header></Header>
      <PostList data={data}></PostList>
      <button
        onClick={() => {
          nav("/new");
        }}
      >
        New Post
      </button>
    </div>
  );
};

export default Home;
