import "./course-catalog.style.css";
import { CourseCatalogContext } from "../../context/course-catalog.context.jsx";
import Course from "../course-card/course-card.component.jsx";
import { useContext } from "react";

export const CourseCatalog = () => {
  const { courses } = useContext(CourseCatalogContext);
  return (
    <div className="course-catalog-container">
      <h2>Course Catalog </h2>
      <div className="preview">
        {courses.map((course) => {
          return <Course key={course.id} course={course} />;
        })}
      </div>
    </div>
  );
};
