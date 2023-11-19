import React from "react";
import "./style.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

function App() {
  const cards = data.map(item => {
    return <Card key={item.id} {...item} />
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
