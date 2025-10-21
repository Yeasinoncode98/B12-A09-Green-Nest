// src/Components/ExpertCard.jsx
import React from "react";

const ExpertCard = ({ expert }) => (
  <div className="card card-compact bg-base-100 shadow p-4">
    <div className="flex items-center gap-4">
      <div className="avatar">
        <div className="w-16 rounded-full">
          <img src={expert.image} alt={expert.name} />
        </div>
      </div>
      <div>
        <h3 className="font-semibold">{expert.name}</h3>
        <p className="text-sm text-gray-500">{expert.specialty}</p>
      </div>
    </div>
  </div>
);

export default ExpertCard;
