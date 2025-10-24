import React from "react";
import { Link } from "react-router-dom";

export default function PlantCard({ plant }) {
  return (
    <div className="card bg-white rounded-2xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group border border-green-100">
      <figure className="w-full h-[280px] bg-green-50 overflow-hidden">
        <img
          src={plant.image}
          alt={plant.plantName}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </figure>

      <div className="p-5 space-y-3">
        <div>
          <span className="px-3 py-1 text-xs font-semibold text-green-600 bg-green-100 rounded-full inline-block mb-2">
            {plant.category}
          </span>
        </div>

        <h3 className="font-bold text-lg text-gray-800 group-hover:text-green-600 transition-colors duration-300">
          {plant.plantName}
        </h3>

        <p className="text-sm text-gray-500">
          🌱 Care:{" "}
          <span className="font-semibold text-gray-700">{plant.careLevel}</span>
        </p>

        <div className="flex items-center justify-between pt-3">
          <div>
            <span className="font-bold text-2xl text-green-600">
              ${plant.price}
            </span>
            <p className="text-sm text-yellow-500 font-semibold flex items-center gap-1">
              ⭐ {plant.rating}
            </p>
          </div>

          <Link
            to={`/plants/${plant.plantId}`}
            className="btn bg-green-500 hover:bg-green-600 border-none text-white transition-all duration-300 rounded-full px-5"
          >
            Details →
          </Link>
        </div>
      </div>
    </div>
  );
}
