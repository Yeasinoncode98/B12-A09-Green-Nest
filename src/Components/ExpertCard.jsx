import React from "react";
import { motion } from "framer-motion";

const ExpertCard = ({ expert }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="relative bg-gradient-to-br from-green-50 via-white to-green-100 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-green-200 group overflow-hidden"
    >
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-green-200 via-transparent to-transparent opacity-0 group-hover:opacity-30 transition-all duration-500 rounded-2xl"></div>

      {/* Profile Image */}
      <div className="flex flex-col items-center text-center relative z-10">
        <div className="relative">
          <img
            src={expert.image}
            alt={expert.name}
            className="w-28 h-28 object-cover rounded-full border-4 border-white shadow-md group-hover:shadow-green-200 transition-all duration-500"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-300 to-emerald-400 opacity-0 group-hover:opacity-20 blur-md transition-all duration-500"></div>
        </div>

        {/* Name & Specialty */}
        <h3 className="mt-4 text-xl font-bold text-green-800 group-hover:text-green-700 transition-all">
          {expert.name}
        </h3>
        <p className="text-sm text-gray-500 mt-1">{expert.specialty}</p>

        {/* Decorative line */}
        <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-emerald-600 rounded-full mt-3 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="mt-5 bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold px-5 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
        >
          Book Session
        </motion.button>
      </div>

      {/* Animated background blur circles */}
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-green-200 rounded-full blur-3xl opacity-40 group-hover:opacity-60 transition-all duration-700"></div>
      <div className="absolute -top-10 -left-10 w-28 h-28 bg-emerald-200 rounded-full blur-3xl opacity-40 group-hover:opacity-60 transition-all duration-700"></div>
    </motion.div>
  );
};

export default ExpertCard;
