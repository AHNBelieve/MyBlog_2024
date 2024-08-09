import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import PostList from "../components/PostList";

const Home = () => {
  const nav = useNavigate();
  return (
    <div>
      <Header></Header>
      <PostList></PostList>
      <button
        onClick={() => {
          nav("/new");
        }}
      >
        새로운 일기 만들기
      </button>
    </div>
  );
};

export default Home;
