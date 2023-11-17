import React from "react";

export default function Card({
  image,
  title,
  rating,
  reviewCount,
  duration,
  price,
}) {
  return (
    <div className="card">
      <img src={image} alt="card1" className="card--image" />
      <div className="card--rating">
        <img src="star.png" alt="star" className="card--rating--icon" />
        <p className="card--details">
          {rating} ({reviewCount}) • {duration}
        </p>
      </div>
      <p className="card--title">{title}</p>
      <p className="card--price">
        <b>From ${price} CAD</b>/person
      </p>
    </div>
  );
}
