import "./App.css";

import { Routes, Route } from "react-router-dom";
import { useReducer, useRef, createContext } from "react";

import Home from "./pages/Home";
import New from "./pages/New";
import Post from "./pages/Post";
import NotFound from "./pages/NotFound";

export const PostStateContext = createContext();
export const PostDispatchContext = createContext();

// 적용 됐는지 확인!
const mockData = [
  {
    id: 1,
    createdDate: new Date(),
    title: "레츠고쇼!",
    content: "응애",
  },
  {
    id: 2,
    createdDate: new Date(),
    title: "레츠고쇼!",
    content: "응애",
  },
  {
    id: 3,
    createdDate: new Date(),
    title: "레츠고쇼!",
    content: "응애",
  },
];

//Reducer
function reducer(state, action) {
  let nextState;

  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      nextState = [action.data, ...state];
      return nextState;
    }
    case "UPDATE": {
      nextState = state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      );
      break;
    }
    case "DELETE": {
      nextState = state.filter((item) => String(item.id) !== String(action.id));
      break;
    }
    default:
      return state;
  }
  localStorage.setItem("Post", JSON.stringify(nextState));
  return nextState;
}

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  //dispatches
  const onCreate = (createdDate, title, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        title,
        content,
      },
    });
  };
  const onUpdate = (id, createdDate, title, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        createdDate,
        title,
        content,
      },
    });
  };
  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id,
    });
  };

  return (
    <>
      <PostStateContext.Provider value={data}>
        <PostDispatchContext.Provider value={{ onCreate, onDelete, onUpdate }}>
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/new" element={<New></New>} />
            <Route path="/post/:id" element={<Post></Post>} />
            <Route path="*" element={<NotFound></NotFound>} />
          </Routes>
        </PostDispatchContext.Provider>
      </PostStateContext.Provider>
    </>
  );
}

export default App;
