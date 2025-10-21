// // src/Components/PlantCard.jsx
// import React from "react";
// import { Link } from "react-router-dom";

// const PlantCard = ({ plant }) => {
//   return (
//     <div className="card bg-base-100 shadow hover:shadow-lg transition p-4">
//       <figure className="h-48 flex items-center justify-center overflow-hidden">
//         <img
//           src={plant.image}
//           alt={plant.plantName}
//           className="object-cover h-full w-full"
//         />
//       </figure>
//       <div className="card-body p-2">
//         <h2 className="card-title text-lg">{plant.plantName}</h2>
//         <p className="text-sm text-gray-600">{plant.category}</p>
//         <div className="flex justify-between items-center mt-2">
//           <div>
//             <div className="font-bold">${plant.price}</div>
//             <div className="text-sm text-yellow-600">⭐ {plant.rating}</div>
//           </div>
//           <Link to={`/plants/${plant.plantId}`} className="btn btn-sm">
//             View Details
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PlantCard;

import React from "react";
import { Link } from "react-router-dom";

export default function PlantCard({ plant }) {
  return (
    <div className="card bg-white shadow rounded-lg overflow-hidden">
      <figure className="h-48 flex items-center justify-center bg-slate-50">
        <img
          src={plant.image}
          alt={plant.plantName}
          className="object-contain h-40"
        />
      </figure>
      <div className="p-4">
        <h3 className="font-semibold">{plant.plantName}</h3>
        <div className="text-sm text-slate-500">
          {plant.category} • {plant.careLevel}
        </div>
        <div className="mt-2 flex items-center justify-between">
          <div>
            <span className="font-bold">${plant.price}</span>
            <div className="text-xs text-slate-500">Rating: {plant.rating}</div>
          </div>
          <Link
            to={`/plants/${plant.plantId}`}
            className="btn btn-sm btn-outline"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
