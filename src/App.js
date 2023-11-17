import React from "react";
import "./style.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Card from "./components/Card";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <div className="grid-container">
        <Card
          image="card-1.jpeg"
          title="Portrait Photography in Vancouver"
          rating="4.88"
          reviewCount={50}
          duration="1 hour"
          price={95}
        />

        <Card
          image="card-2.jpeg"
          title="Night photography with a pro"
          rating="5.0"
          reviewCount={6}
          duration="2 hours"
          price={76}
        />

        <Card
          image="card-3.jpeg"
          title="Craft beer tour & tastings on a street art walk - Vancouver"
          rating="4.91"
          reviewCount={246}
          duration="3 hours"
          price={70}
        />

        <Card
          image="card-4.jpeg"
          title="Vancouver R&B Sounds"
          rating="4.89"
          reviewCount={38}
          duration="2 hours"
          price={28}
        />
      </div>
    </div>
  );
}

export default App;
