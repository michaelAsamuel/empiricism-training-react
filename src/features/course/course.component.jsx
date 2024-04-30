import "./course.style.css";

const Course = ({ course }) => {
  const { id, name, description, CourseDuration } = course;

  return (
    <div className="course-container">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{CourseDuration}</p>
    </div>
  );
};

export default Course;
