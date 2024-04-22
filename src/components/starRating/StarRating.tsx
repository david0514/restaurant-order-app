import React, { useState } from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

function StarRating({ totalStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div>
      {[...Array(totalStars)].map((star, index) => {
        const ratingValue = index + 1;

        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
              style={{ display: 'none' }}
            />
            <FaStar
              className="star"
              cursor={'pointer'}
              color={ratingValue <= (hover || rating) ? '#000000' : '#e4e5e9'}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(rating)}
              size="24"
            />
          </label>
        );
      })}
    </div>
  );
}

export default StarRating;
