// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { toast } from "react-toastify";

// export default function PlantDetails() {
//   const { id } = useParams();
//   const [plant, setPlant] = useState(null);
//   const [form, setForm] = useState({ name: "", email: "" });

//   useEffect(() => {
//     fetch("/plants.json")
//       .then((r) => r.json())
//       .then((data) => {
//         const found = data.find((p) => String(p.plantId) === String(id));
//         setPlant(found);
//       });
//   }, [id]);

//   if (!plant)
//     return (
//       <div className="text-center mt-10 text-slate-500">Plant not found.</div>
//     );

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     toast.success("Consultation booked! Our expert will contact you.");
//     setForm({ name: "", email: "" });
//   };

//   return (
//     <div className="grid md:grid-cols-2 gap-6 mt-6">
//       {/* Plant Info */}
//       <div className="bg-white p-6 rounded-xl shadow-md">
//         <div className="w-full h-80 overflow-hidden rounded-lg">
//           <img
//             src={plant.image}
//             alt={plant.plantName}
//             className="w-full h-full object-cover"
//           />
//         </div>

//         <h2 className="text-3xl font-extrabold text-green-700 mt-6">
//           {plant.plantName}
//         </h2>

//         <p className="text-base text-slate-600 mt-3 leading-relaxed">
//           {plant.description}
//         </p>

//         <div className="mt-5 space-y-2 text-sm text-slate-700">
//           <div className="flex justify-between">
//             <span className="font-medium">💲 Price:</span>
//             <span className="font-semibold text-green-600">${plant.price}</span>
//           </div>
//           <div className="flex justify-between">
//             <span className="font-medium">⭐ Rating:</span>
//             <span className="text-yellow-600 font-semibold">
//               {plant.rating} / 5
//             </span>
//           </div>
//           <div className="flex justify-between">
//             <span className="font-medium">📦 Stock Available:</span>
//             <span className="font-semibold">{plant.availableStock}</span>
//           </div>
//         </div>
//       </div>

//       {/* Consultation Form */}
//       <div className="bg-white p-6 rounded-xl shadow-md">
//         <h3 className="text-xl font-semibold text-green-700 mb-4">
//           Book a Free Consultation 🌿
//         </h3>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             value={form.name}
//             onChange={(e) => setForm({ ...form, name: e.target.value })}
//             placeholder="Your Name"
//             className="input input-bordered w-full"
//             required
//           />
//           <input
//             value={form.email}
//             onChange={(e) => setForm({ ...form, email: e.target.value })}
//             placeholder="Your Email"
//             className="input input-bordered w-full"
//             required
//           />
//           <button type="submit" className="btn btn-primary w-full">
//             Book Now
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// ........2................

// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom"; // useNavigate to redirect
// import { toast } from "react-toastify";
// import { useAuth } from "../context/AuthContext"; // Import the useAuth hook

// export default function PlantDetails() {
//   const { id } = useParams();
//   const navigate = useNavigate(); // Hook to handle redirection
//   const { user } = useAuth(); // Get user from AuthContext
//   const [plant, setPlant] = useState(null);
//   const [form, setForm] = useState({ name: "", email: "" });

//   useEffect(() => {
//     fetch("/plants.json")
//       .then((r) => r.json())
//       .then((data) => {
//         const found = data.find((p) => String(p.plantId) === String(id));
//         setPlant(found);
//       });
//   }, [id]);

//   if (!plant)
//     return (
//       <div className="text-center mt-10 text-slate-500">Plant not found.</div>
//     );

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!user) {
//       // If user is not logged in, redirect them to the login page
//       toast.error("Please log in to book a consultation.");
//       navigate("/login"); // Redirect to login page
//       return;
//     }

//     toast.success("Consultation booked! Our expert will contact you.");
//     setForm({ name: "", email: "" });
//   };

//   return (
//     <div className="grid md:grid-cols-2 gap-6 mt-6">
//       {/* Plant Info */}
//       <div className="bg-white p-6 rounded-xl shadow-md">
//         <div className="w-full h-80 overflow-hidden rounded-lg">
//           <img
//             src={plant.image}
//             alt={plant.plantName}
//             className="w-full h-full object-cover"
//           />
//         </div>

//         <h2 className="text-3xl font-extrabold text-green-700 mt-6">
//           {plant.plantName}
//         </h2>

//         <p className="text-base text-slate-600 mt-3 leading-relaxed">
//           {plant.description}
//         </p>

//         <div className="mt-5 space-y-2 text-sm text-slate-700">
//           <div className="flex justify-between">
//             <span className="font-medium">💲 Price:</span>
//             <span className="font-semibold text-green-600">${plant.price}</span>
//           </div>
//           <div className="flex justify-between">
//             <span className="font-medium">⭐ Rating:</span>
//             <span className="text-yellow-600 font-semibold">
//               {plant.rating} / 5
//             </span>
//           </div>
//           <div className="flex justify-between">
//             <span className="font-medium">📦 Stock Available:</span>
//             <span className="font-semibold">{plant.availableStock}</span>
//           </div>
//         </div>
//       </div>

//       {/* Consultation Form */}
//       <div className="bg-white p-6 rounded-xl shadow-md">
//         <h3 className="text-xl font-semibold text-green-700 mb-4">
//           Book a Free Consultation 🌿
//         </h3>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             value={form.name}
//             onChange={(e) => setForm({ ...form, name: e.target.value })}
//             placeholder="Your Name"
//             className="input input-bordered w-full"
//             required
//           />
//           <input
//             value={form.email}
//             onChange={(e) => setForm({ ...form, email: e.target.value })}
//             placeholder="Your Email"
//             className="input input-bordered w-full"
//             required
//           />
//           <button type="submit" className="btn btn-primary w-full">
//             Book Now
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// 3.........

// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate, useLocation } from "react-router-dom";
// import { toast } from "react-toastify";
// import { useAuth } from "../context/AuthContext";

// export default function PlantDetails() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { user } = useAuth();
//   const [plant, setPlant] = useState(null);
//   const [form, setForm] = useState({ name: "", email: "" });

//   useEffect(() => {
//     fetch("/plants.json")
//       .then((r) => r.json())
//       .then((data) => {
//         const found = data.find((p) => String(p.plantId) === String(id));
//         setPlant(found);
//       });
//   }, [id]);

//   // Pre-fill form if user is logged in
//   useEffect(() => {
//     if (user) {
//       setForm({
//         name: user.displayName || "",
//         email: user.email || "",
//       });
//     }
//   }, [user]);

//   if (!plant)
//     return (
//       <div className="text-center mt-10 text-slate-500">Plant not found.</div>
//     );

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Check if user is logged in
//     if (!user) {
//       toast.error("🔒 Please log in to book a consultation!");
//       // Save current location to redirect back after login
//       navigate("/login", { state: { from: location } });
//       return;
//     }

//     // Book consultation for logged-in users
//     toast.success("✅ Consultation booked! Our expert will contact you soon.");
//     // Don't clear the form - keep user data filled
//   };

//   return (
//     <div className="container mx-auto px-4">
//       <div className="grid md:grid-cols-2 gap-6 mt-6">
//         {/* Plant Info */}
//         <div className="bg-white p-6 rounded-xl shadow-md">
//           <div className="w-full h-80 overflow-hidden rounded-lg">
//             <img
//               src={plant.image}
//               alt={plant.plantName}
//               className="w-full h-full object-cover"
//             />
//           </div>
//           <h2 className="text-3xl font-extrabold text-green-700 mt-6">
//             {plant.plantName}
//           </h2>
//           <p className="text-base text-slate-600 mt-3 leading-relaxed">
//             {plant.description}
//           </p>
//           <div className="mt-5 space-y-2 text-sm text-slate-700">
//             <div className="flex justify-between">
//               <span className="font-medium">💲 Price:</span>
//               <span className="font-semibold text-green-600">
//                 ${plant.price}
//               </span>
//             </div>
//             <div className="flex justify-between">
//               <span className="font-medium">⭐ Rating:</span>
//               <span className="text-yellow-600 font-semibold">
//                 {plant.rating} / 5
//               </span>
//             </div>
//             <div className="flex justify-between">
//               <span className="font-medium">📦 Stock Available:</span>
//               <span className="font-semibold">{plant.availableStock}</span>
//             </div>
//           </div>
//         </div>

//         {/* Consultation Form */}
//         <div className="bg-white p-6 rounded-xl shadow-md">
//           <h3 className="text-xl font-semibold text-green-700 mb-4">
//             Book a Free Consultation 🌿
//           </h3>

//           {!user && (
//             <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
//               <p className="text-sm text-yellow-800">
//                 🔒 You must be logged in to book a consultation.
//               </p>
//             </div>
//           )}

//           <form onSubmit={handleSubmit} className="space-y-4">
//             <input
//               value={form.name}
//               onChange={(e) => setForm({ ...form, name: e.target.value })}
//               placeholder="Your Name"
//               className="input input-bordered w-full"
//               disabled={!user}
//               required
//             />
//             <input
//               value={form.email}
//               onChange={(e) => setForm({ ...form, email: e.target.value })}
//               placeholder="Your Email"
//               type="email"
//               className="input input-bordered w-full"
//               disabled={!user}
//               required
//             />
//             <button
//               type="submit"
//               className={`btn w-full ${user ? "btn-primary" : "btn-disabled"}`}
//             >
//               {user ? "Book Now" : "Login to Book"}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// 4.................

import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";

export default function PlantDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
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

  // Pre-fill form if user is logged in
  useEffect(() => {
    if (user) {
      setForm({
        name: user.displayName || "",
        email: user.email || "",
      });
    }
  }, [user]);

  if (!plant)
    return (
      <div className="text-center mt-10 text-slate-500">Plant not found.</div>
    );

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if user is logged in
    if (!user) {
      toast.error("🔒 Please log in to book a consultation!");
      navigate("/login", { state: { from: location } });
      return;
    }

    // Book consultation for logged-in users
    toast.success("✅ Consultation booked! Our expert will contact you soon.");

    // Clear the form after successful booking
    setForm({ name: "", email: "" });
  };

  return (
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {/* Plant Info */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="w-full h-80 overflow-hidden rounded-lg">
            <img
              src={plant.image}
              alt={plant.plantName}
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-3xl font-extrabold text-green-700 mt-6">
            {plant.plantName}
          </h2>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            {plant.description}
          </p>
          <div className="mt-5 space-y-2 text-sm text-slate-700">
            <div className="flex justify-between">
              <span className="font-medium">💲 Price:</span>
              <span className="font-semibold text-green-600">
                ${plant.price}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">⭐ Rating:</span>
              <span className="text-yellow-600 font-semibold">
                {plant.rating} / 5
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">📦 Stock Available:</span>
              <span className="font-semibold">{plant.availableStock}</span>
            </div>
          </div>
        </div>

        {/* Consultation Form */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-green-700 mb-4">
            Book a Free Consultation 🌿
          </h3>

          {!user && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
              <p className="text-sm text-yellow-800">
                🔒 You must be logged in to book a consultation.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your Name"
              className="input input-bordered w-full"
              disabled={!user}
              required
            />
            <input
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="Your Email"
              type="email"
              className="input input-bordered w-full"
              disabled={!user}
              required
            />
            <button
              type="submit"
              className={`btn w-full ${user ? "btn-primary" : "btn-disabled"}`}
            >
              {user ? "Book Now" : "Login to Book"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
