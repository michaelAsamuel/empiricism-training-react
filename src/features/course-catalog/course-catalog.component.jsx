import "./course-catalog.style.css";
import courses from "../../init-seed/course-data.json";
import Course from "../course/course.component.jsx";

export const CourseCatalog = () => {
  const { id, name, description } = courses;

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
