import React from "react";
import "../CardListStyles.css";
import ImageRenderer from "../LazyImages/ImageRenderer";

const Card = ({ image, title, description, placeholder }) => {
  return (
    <div className="card">
      <div className="card-img-div">
        {image ? (
          <div className="card-img">
            <ImageRenderer src={image} alt={title} />
          </div>
        ) : (
          <h3>{placeholder}</h3>
        )}
      </div>
      <div>
        <h3 className="card-title">{title}</h3>
        <span
          className="card-description"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </div>
  );
};

export default Card;
