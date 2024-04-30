import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.css";

const Navigation = () => {
  return (
    <>
      <div className="nav-bar">
        <Link className="nav-logo" to="/">
          <div>Empiricism LLP</div>
        </Link>
        <div className="links-container">
          <Link className="nav-link" to="/courses">
            Courses
          </Link>
          <Link className="nav-link" to="/contact">
            Contact us
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
