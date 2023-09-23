import React from "react";
import { useState } from "react";

const Star = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div className="flex w-screen h-screen justify-center items-center">
      {[...Array(5)].map((_, i) => {
        i += 1;
        return (
          <button
            onClick={() => setRating(i)}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(rating)}
            onDoubleClick={() => setRating(0)}
            className={
              i <= (hover || rating)
                ? "text-yellow-500 text-2xl"
                : `text-2xl text-white`
            }
            key={i}
          >
            &#9733;
          </button>
        );
      })}
    </div>
  );
};

export default Star;
