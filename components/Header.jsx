import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <div className="LeftChild">
        <button>안현준의 블로그</button>
      </div>
      <div className="RightChild">
        <button>검색</button>
        <button>불빛</button>
      </div>
    </div>
  );
};

export default Header;
