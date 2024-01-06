import React, { useState } from 'react';
import { FaQuoteLeft, FaQuoteRight, FaStar, FaThumbsUp } from 'react-icons/fa';
import "./CustomerComment.css";
import testimonials from "../../Data/testimonials"
const CustomerComment = () => {

  

  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };

  const handleNext = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="customer-comment">
      <h2 className="comment-heading">Müşterilerimizin Yorumları</h2>
      <div className="comment-grid">
        <div className="comment-box">
          <div className="quote-row">
            <FaQuoteLeft className="quote-icon" />
            <p className="comment-text">{testimonials[current].text}</p>
            <FaQuoteRight className="quote-icon" />
          </div>
          <h5 className="customer-name">{testimonials[current].customerName}</h5>
          <h5 className="location">{testimonials[current].location}</h5>
          <div className="star-row">
            <FaStar className="star-icon" />
            <FaStar className="star-icon" />
            <FaStar className="star-icon" />
            <FaStar className="star-icon" />
          </div>
          <div className="like-row">
            <FaThumbsUp className="like-icon" />
            <p className="like-count">{testimonials[current].like} Beğeni</p>
          </div>
          <div className="buttons">
            <button onClick={handlePrev}>Önceki</button>
            <button onClick={handleNext}>Sonraki</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerComment;
