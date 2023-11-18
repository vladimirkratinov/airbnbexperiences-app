import React from "react";
import "./style.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

function App() {
  const cards = data.map(object => {
    return <Card
    key={object.id} 
    image={object.image}
    title={object.title}
    rating={object.stats.rating}
    reviewCount={object.stats.reviewCount}
    duration={object.duration}
    price={object.price}
    />
  })

  console.log(data)

  return (
    <div>
      <NavBar />
      <Hero />
      <div className="grid-container">
        {cards}
      </div>
    </div>
  );
}

export default App;
