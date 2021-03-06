import React from 'react';
import StarRating from "./StarRating";
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import './starrating.css';



const StarRating = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    return (
      <div className="star-rating">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={index <= (hover || rating) ? "on" : "off"}
              onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            > <StarBorderRoundedIcon/>
              <span className="star">&#9733;</span>
            </button>
          );
        })}
      </div>
    );
  };
  
  

export default StarRating;
