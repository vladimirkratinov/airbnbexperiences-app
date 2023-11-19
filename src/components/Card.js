import React from "react"

export default function Card(props) {
  console.log("list of props")
  console.log(props)
  let badgeText
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.location === "Online") {
    badgeText = "ONLINE"
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={props.image} alt="card1" className="card--image" />
      <div className="card--rating">
        <img src="star.png" alt="star" className="card--rating--icon" />
        <p className="card--details">
          {props.stats.rating} ({props.stats.reviewCount}) • {props.duration}
        </p>
      </div>
      <p className="card--title">{props.title}</p>
      <p className="card--price">
        <b>From ${props.price} CAD</b>/person
      </p>
    </div>
  );
}
