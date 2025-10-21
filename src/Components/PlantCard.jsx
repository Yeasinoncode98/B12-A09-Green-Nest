// import React from "react";
// import { Link } from "react-router-dom";

// export default function PlantCard({ plant }) {
//   return (
//     <div className="card bg-white shadow rounded-lg overflow-hidden mt-[80px] ">
//       <figure className="w-full h-[200px] bg-slate-50">
//         <img
//           src={plant.image}
//           alt={plant.plantName}
//           className="w-full h-full object-cover"
//         />
//       </figure>
//       <div className="p-4">
//         <h3 className="font-semibold">{plant.plantName}</h3>
//         <div className="text-sm text-slate-500">
//           {plant.category} • {plant.careLevel}
//         </div>
//         <div className="mt-2 flex items-center justify-between">
//           <div>
//             <span className="font-bold">${plant.price}</span>
//             <div className="text-xs text-slate-500">Rating: {plant.rating}</div>
//           </div>
//           <Link
//             to={`/plants/${plant.plantId}`}
//             className="btn btn-sm btn-outline"
//           >
//             View Details
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

//............

import React from "react";
import { Link } from "react-router-dom";

export default function PlantCard({ plant }) {
  return (
    <div className="card bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <figure className="w-full h-[280px] bg-slate-50">
        <img
          src={plant.image}
          alt={plant.plantName}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </figure>
      <div className="p-6">
        <div className="badge badge-primary badge-outline mb-3">
          {plant.category}
        </div>
        <h3 className="font-bold text-xl mb-2">{plant.plantName}</h3>
        <div className="text-sm text-slate-500 mb-4">
          Care Level: <span className="font-semibold">{plant.careLevel}</span>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div>
            <span className="font-bold text-2xl text-primary">
              ${plant.price}
            </span>
            <div className="text-sm text-yellow-500 flex items-center gap-1 mt-1">
              ⭐ {plant.rating}
            </div>
          </div>
          <Link to={`/plants/${plant.plantId}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
