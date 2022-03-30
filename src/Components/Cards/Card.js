import React from "react";
import "../CardListStyles.css";

const Card = ({ image, title, description, placeholder }) => {
  return (
    <div className="card">
      <div className="card-img-div">
        {image ? (
          <div className="card-img">
            <img src={image} alt={title} />
          </div>
        ) : (
          <h3>{placeholder}</h3>
        )}
      </div>
      <div>
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
