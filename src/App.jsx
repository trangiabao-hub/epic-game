import "./index.css";
import "./app.css";
import { Link, Outlet, useLocation } from "react-router-dom";
function App() {
  const location = useLocation();
  console.log();
  return (
    <div className="page">
      <div className="page__left">
        <div className="img">
          <img src="/logo.png" width={80} alt="" />
        </div>

        <ul>
          <li className={`${location.pathname === "/" ? "active" : ""}`}>
            <h3>
              <Link to={"/"}>Store</Link>
            </h3>
          </li>
          <li className={`${location.pathname === "/library" ? "active" : ""}`}>
            <h3>
              <Link to={"/library"}>Library</Link>
            </h3>
          </li>
          <li>
            <h3>
              <Link to={"/library"}>Unreal Engine</Link>
            </h3>
          </li>
        </ul>
      </div>
      <div className="page__right">
        <div className="page__right__header">
          <i className="fa fa-angle-left"></i>

          <div className="search">
            <i className="fa fa-search"></i>
            <input type="text" placeholder="Search Store" />

            <ul>
              <li className="active">Discover</li>
              <li>Browse</li>
              <li>News</li>
            </ul>
          </div>
        </div>

        <Outlet />
      </div>
    </div>
  );
}

export default App;
