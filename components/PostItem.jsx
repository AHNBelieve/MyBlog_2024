import "./PostItem.css";
import { useNavigate } from "react-router-dom";

const PostItem = ({ id, createdDate, title, content }) => {
  const nav = useNavigate();
  return (
    <div className="PostItem" onClick={() => nav(`/post/${id}`)}>
      <h1>{title}</h1>
      <h5>{new Date(createdDate).toLocaleDateString()}</h5>
    </div>
  );
};

export default PostItem;
