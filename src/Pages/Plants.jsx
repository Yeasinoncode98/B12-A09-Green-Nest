// // src/Pages/Plants.jsx
// import React, { useEffect, useState } from "react";
// import PlantCard from "../Components/PlantCard";

// const Plants = () => {
//   const [plants, setPlants] = useState([]);
//   const [query, setQuery] = useState("");

//   useEffect(() => {
//     fetch("/plants.json")
//       .then((res) => res.json())
//       .then((data) => setPlants(data))
//       .catch(console.error);
//   }, []);

//   const filtered = plants.filter(
//     (p) =>
//       p.plantName.toLowerCase().includes(query.toLowerCase()) ||
//       p.category.toLowerCase().includes(query.toLowerCase())
//   );

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-2xl font-semibold mb-4">All Plants</h1>

//       <div className="mb-6 flex gap-4">
//         <input
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           placeholder="Search plants or category"
//           className="input input-bordered w-full"
//         />
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filtered.map((p) => (
//           <PlantCard key={p.plantId} plant={p} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Plants;

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
