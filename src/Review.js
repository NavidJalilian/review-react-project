import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import reviews from "./data";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  function nextPerson() {
    const random = Math.floor(Math.random() * 3);
    console.log("before if", random);
    if (random === index) return nextPerson();

    setIndex(random);
    console.log("in function", random);
  }

  return (
    <article className="review ">
      <div className="img-container">
        <img className="person-img " src={image} alt={name} />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button
          className="prev-btn"
          onClick={() => setIndex((p) => p - 1)}
          disabled={index === 0 && true}
        >
          <FaChevronLeft />
        </button>
        <button
          className="next-btn"
          onClick={() => setIndex((p) => p + 1)}
          disabled={index === 3 && true}
        >
          <FaChevronRight />
        </button>
      </div>
      <div className="random-btn" onClick={() => nextPerson()}>
        Random Person
      </div>
    </article>
  );
};
export default Review;
