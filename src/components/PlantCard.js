import React from "react";

function PlantCard({ plant, onUpdatePlant }) {
  const handleSoldOut = () => {
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ soldOut: !plant.soldOut }),
    })
      .then((res) => res.json())
      .then((updatedPlant) => onUpdatePlant(updatedPlant));
  };

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: ${plant.price.toFixed(2)}</p>
      <button
        className={plant.soldOut ? "" : "primary"}
        onClick={handleSoldOut}
      >
        {plant.soldOut ? "Out of Stock" : "In Stock"}
      </button>
    </li>
  );
}

export default PlantCard;