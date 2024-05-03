import "./course-card.style.css";
import { useContext, useState } from "react";
import { ShoppingCartContext } from "../../context/shopping-cart.context";

const Course = ({ course }) => {
  const { id, name, description, CourseDuration } = course;
  const { cartItems, addItemToCart } = useContext(ShoppingCartContext);

  const addCourseToCart = () => {
    addItemToCart(course);
  };

  return (
    <div className="course-container">
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
        <div className="course-center">{CourseDuration}</div>
      </div>
      <div className="course-center">
        <button type="button" onClick={addCourseToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Course;
