import React, { useEffect, useState } from "react";
import PlantCard from "../Components/PlantCard";

export default function Plants() {
  const [plants, setPlants] = useState([]);
  useEffect(() => {
    fetch("/plants.json")
      .then((r) => r.json())
      .then(setPlants)
      .catch(console.error);
  }, []);
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">All Plants</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {plants.map((p) => (
          <PlantCard key={p.plantId} plant={p} />
        ))}
      </div>
    </div>
  );
}
