import "./course-card.style.css";

const Course = ({ course }) => {
  const { id, name, description, CourseDuration } = course;

  const addToCartClick = () => {
    console.log("TODO: Add to cart");
  };

  return (
    <div className="course-container">
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
        <p>{CourseDuration}</p>
      </div>
      <div>
        <button type="button" onClick={addToCartClick}>
          {" "}
          Add to Cart{" "}
        </button>
      </div>
    </div>
  );
};

export default Course;
