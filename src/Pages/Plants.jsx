import React, { useEffect, useState } from "react";
import PlantCard from "../Components/PlantCard";

export default function Plants() {
  const [plants, setPlants] = useState([]);
  const [filteredPlants, setFilteredPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    fetch("/plants.json")
      .then((r) => r.json())
      .then((data) => {
        setPlants(data);
        setFilteredPlants(data);
      })
      .catch(console.error);
  }, []);

  // Handle search - case insensitive and handles extra spaces
  useEffect(() => {
    let results = plants;

    // Search filter
    if (searchTerm.trim()) {
      results = results.filter((plant) => {
        // Remove all spaces from search term for flexible matching
        const searchLower = searchTerm.toLowerCase().trim().replace(/\s+/g, "");

        // Remove all spaces from plant data for comparison
        const nameLower = plant.plantName.toLowerCase().replace(/\s+/g, "");
        const categoryLower = plant.category.toLowerCase().replace(/\s+/g, "");
        const providerLower = plant.providerName
          .toLowerCase()
          .replace(/\s+/g, "");

        return (
          nameLower.includes(searchLower) ||
          categoryLower.includes(searchLower) ||
          providerLower.includes(searchLower)
        );
      });
    }

    // Sort filter
    if (sortOrder === "asc") {
      results = [...results].sort((a, b) => a.price - b.price);
    } else if (sortOrder === "desc") {
      results = [...results].sort((a, b) => b.price - a.price);
    }

    setFilteredPlants(results);
  }, [searchTerm, sortOrder, plants]);

  return (
    <div className="container mx-auto px-4">
      {/* Centered Title */}
      <h2 className="text-2xl font-bold mb-6 text-center">All Plants</h2>

      {/* Centered Search and Sort Controls */}
      <div className="mb-6 flex flex-col items-center gap-4">
        {/* Search Bar - Medium Width */}
        <div className="w-full max-w-md">
          <input
            type="text"
            placeholder="Search plants by name, category, or provider..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input input-bordered w-full"
          />
        </div>

        {/* Sort Dropdown - Medium Width */}
        <div className="w-full max-w-md">
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="select select-bordered w-full"
          >
            <option value="">Sort by Price</option>
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-4 text-sm text-slate-600 text-center">
        Showing {filteredPlants.length} of {plants.length} plants
      </div>

      {/* Plant Cards */}
      {filteredPlants.length > 0 ? (
        <div className="grid md:grid-cols-4 gap-8">
          {filteredPlants.map((p) => (
            <PlantCard key={p.plantId} plant={p} />
          ))}
        </div>
      ) : (
        <div className="text-center py-10 text-slate-500">
          <p className="text-lg">No plants found matching your search.</p>
          <button
            onClick={() => {
              setSearchTerm("");
              setSortOrder("");
            }}
            className="btn btn-primary btn-sm mt-4"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}
