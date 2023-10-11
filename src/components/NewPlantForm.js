import React, {useState,useEffect} from "react";

function NewPlantForm() {
const [plant, setNewPlant] = useState([])
const newPlant = {name, image, price}

useEffect(() => {
fetch("http://localhost:6001/plants", {
  method: "POST",
  headers: {
    "Content-type": "application/json",
  },
  body: JSON.stringify(
    {...newPlant})
})
  .then(response => response.json())
  .then(data => {
    setNewPlant(data.plant)
  })
},[]);

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form>
        <input type="text" name="name" placeholder="Plant name" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
