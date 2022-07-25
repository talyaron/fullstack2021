import { Outlet, Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home">
      <p> הדרך ליעד - איתך עד לחיסכון</p>
      <button className="Home__btn">
        <Link to="about" className="Home__Link">
          קצת עלינו
        </Link>
      </button>
      <button className="Home__btn">
        <Link to="conect" className="Home__Link">
          יצירת קשר
        </Link>
      </button>
      <Outlet />
    </div>
  );
};

export default Home;
