import { PostStateContext } from "../App";
import { useState } from "react";
import PostItem from "./PostItem";

const PostList = ({ data }) => {
  console.log(data);
  return (
    <div className="PostList">
      <h1>dasd</h1>
      {data.map((item) => (
        <PostItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default PostList;
