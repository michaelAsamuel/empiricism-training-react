import { Outlet } from "react-router-dom";
import { CourseCatalog } from "../course-catalog/course-catalog.component";

const Home = () => {
  return (
    <div className="home-container">
      <CourseCatalog />
    </div>
  );
};

export default Home;
