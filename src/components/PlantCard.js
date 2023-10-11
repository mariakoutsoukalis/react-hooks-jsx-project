import React, {useState, useEffect} from "react";

function PlantCard() {
const [plants, setPlants] = useState([])
  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then(res => res.json())
      .then(data => setPlants(data.plants))
  }, [])
  
  return (
    <div>
      {plants.map(plant => (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
    
      {true ? (
        <button className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
    ))}
    </div>
    )
  }

export default PlantCard;
