// // src/Pages/PlantDetails.jsx
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { toast } from "react-toastify";

// const PlantDetails = () => {
//   const { id } = useParams();
//   const [plant, setPlant] = useState(null);
//   const [form, setForm] = useState({ name: "", email: "" });

//   useEffect(() => {
//     fetch("/plants.json")
//       .then((res) => res.json())
//       .then((data) => {
//         const found = data.find((p) => String(p.plantId) === String(id));
//         setPlant(found);
//       })
//       .catch(console.error);
//   }, [id]);

//   const handleBook = (e) => {
//     e.preventDefault();
//     // pretend booking, show success
//     toast.success("Consultation booked successfully!");
//     setForm({ name: "", email: "" });
//   };

//   if (!plant) return <div className="p-8">Loading plant...</div>;

//   return (
//     <div className="container mx-auto p-6">
//       <div className="grid md:grid-cols-2 gap-6">
//         <img
//           src={plant.image}
//           alt={plant.plantName}
//           className="w-full h-96 object-cover rounded"
//         />
//         <div>
//           <h1 className="text-3xl font-bold">{plant.plantName}</h1>
//           <p className="text-gray-600 mt-2">{plant.description}</p>

//           <div className="mt-4">
//             <div className="flex gap-4 items-center">
//               <div className="text-2xl font-semibold">${plant.price}</div>
//               <div>⭐ {plant.rating}</div>
//               <div className="text-sm">Stock: {plant.availableStock}</div>
//             </div>

//             <div className="mt-6">
//               <h3 className="font-semibold">Book Consultation</h3>
//               <form onSubmit={handleBook} className="space-y-3 mt-2">
//                 <input
//                   required
//                   value={form.name}
//                   onChange={(e) => setForm({ ...form, name: e.target.value })}
//                   placeholder="Your name"
//                   className="input input-bordered w-full"
//                 />
//                 <input
//                   required
//                   value={form.email}
//                   onChange={(e) => setForm({ ...form, email: e.target.value })}
//                   placeholder="Your email"
//                   className="input input-bordered w-full"
//                 />
//                 <button type="submit" className="btn btn-primary">
//                   Book Now
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PlantDetails;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function PlantDetails() {
  const { id } = useParams();
  const [plant, setPlant] = useState(null);
  const [form, setForm] = useState({ name: "", email: "" });

  useEffect(() => {
    fetch("/plants.json")
      .then((r) => r.json())
      .then((data) => {
        const found = data.find((p) => String(p.plantId) === String(id));
        setPlant(found);
      });
  }, [id]);

  if (!plant) return <div>Plant not found.</div>;

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Consultation booked! Our expert will contact you.");
    setForm({ name: "", email: "" });
  };

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white p-4 rounded shadow">
        <img
          src={plant.image}
          alt={plant.plantName}
          className="w-full h-80 object-contain"
        />
        <h2 className="font-bold text-2xl mt-4">{plant.plantName}</h2>
        <p className="text-sm text-slate-600">{plant.description}</p>
        <div className="mt-3 text-sm">
          <div>
            Price: <span className="font-semibold">${plant.price}</span>
          </div>
          <div>Rating: {plant.rating}</div>
          <div>Stock: {plant.availableStock}</div>
        </div>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h3 className="font-semibold text-lg mb-2">Book Consultation</h3>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Name"
            className="input w-full"
            required
          />
          <input
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="Email"
            className="input w-full"
            required
          />
          <button className="btn btn-primary w-full">Book Now</button>
        </form>
      </div>
    </div>
  );
}
