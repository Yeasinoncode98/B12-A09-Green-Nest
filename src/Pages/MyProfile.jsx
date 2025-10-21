// //co pilot

// import React, { useState, useEffect } from "react";
// import { useAuth } from "../context/AuthContext";
// import { toast } from "react-toastify";

// export default function MyProfile() {
//   const { user, updateUserProfile } = useAuth();
//   const [form, setForm] = useState({
//     displayName: "",
//     photoURL: "",
//   });

//   // Initialize form with user data
//   useEffect(() => {
//     if (user) {
//       setForm({
//         displayName: user.displayName || "",
//         photoURL: user.photoURL || "",
//       });
//     }
//   }, [user]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     try {
//       await updateUserProfile({
//         displayName: form.displayName,
//         photoURL: form.photoURL,
//       });
//       toast.success("Profile updated!");
//     } catch (err) {
//       toast.error(err.message);
//     }
//   };

//   return (
//     <div className="bg-white p-6 rounded shadow max-w-xl mx-auto mt-6">
//       <h2 className="font-bold text-2xl mb-4">My Profile</h2>

//       <div className="flex items-center gap-4 mb-4">
//         <div className="avatar">
//           <div className="w-20 h-20 rounded-full">
//             <img
//               src={
//                 form.photoURL || "https://i.postimg.cc/3x4X0QmY/snake-plant.png"
//               }
//               alt="Profile Preview"
//             />
//           </div>
//         </div>
//         <div>
//           <div className="font-semibold">{form.displayName || "No name"}</div>
//           <div className="text-sm text-slate-500">{user?.email}</div>
//         </div>
//       </div>

//       <form onSubmit={handleUpdate} className="space-y-3">
//         <input
//           name="displayName"
//           value={form.displayName}
//           onChange={handleChange}
//           className="input w-full"
//           placeholder="Display name"
//         />
//         <input
//           name="photoURL"
//           value={form.photoURL}
//           onChange={handleChange}
//           className="input w-full"
//           placeholder="Photo URL"
//         />
//         <button type="submit" className="btn btn-primary w-full">
//           Update Profile
//         </button>
//       </form>
//     </div>
//   );
// }

//..............

// import React, { useState, useEffect } from "react";
// import { useAuth } from "../context/AuthContext";
// import { toast } from "react-toastify";

// export default function MyProfile() {
//   const { user, updateUserProfile } = useAuth();

//   // Initialize the form state to hold only what the user types.
//   // It starts with blank strings.
//   const [form, setForm] = useState({
//     displayName: "",
//     photoURL: "",
//   });

//   // 👇 REMOVED: const [resetAfterUpdate, setResetAfterUpdate] = useState(false);

//   // 👇 THE KEY FIX: Use a simple useEffect to load the *current* user data
//   // into the form state ONLY ONCE when the component mounts and 'user' is ready.
//   // This prevents it from re-running when 'user' is updated later.
//   useEffect(() => {
//     if (user) {
//       setForm({
//         displayName: user.displayName || "",
//         photoURL: user.photoURL || "",
//       });
//     }
//   }, [user]); // Only run when 'user' is first set/changed (initial load)

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     try {
//       await updateUserProfile({
//         displayName: form.displayName,
//         photoURL: form.photoURL,
//       });
//       toast.success("Profile updated!");

//       // ✅ THIS IS NOW GUARANTEED TO WORK: Clear the form state immediately.
//       // Since the useEffect is only for initial load, it won't re-sync.
//       setForm({ displayName: "", photoURL: "" });

//       // REMOVED: setResetAfterUpdate(true); // No longer needed
//     } catch (err) {
//       toast.error(err.message);
//     }
//   };

//   return (
//     <div className="bg-white p-6 rounded shadow max-w-xl mx-auto mt-6">
//       <h2 className="font-bold text-2xl mb-4">My Profile</h2>

//       <div className="flex items-center gap-4 mb-4">
//         <div className="avatar">
//           <div className="w-20 h-20 rounded-full">
//             <img
//               src={
//                 form.photoURL ||
//                 user?.photoURL ||
//                 "https://i.postimg.cc/3x4X0QmY/snake-plant.png"
//               }
//               alt="Profile Preview"
//             />
//           </div>
//         </div>
//         <div>
//           {/* Note: The preview box below will show the *new* name/URL from the
//              'user' context, but the input fields will be blank, which is correct
//              for a cleared form. */}
//           <div className="font-semibold">
//             {form.displayName || user?.displayName || "No name"}
//           </div>
//           <div className="text-sm text-slate-500">{user?.email}</div>
//         </div>
//       </div>

//       <form onSubmit={handleUpdate} className="space-y-3">
//         {/* The input's value must be tied to the 'form' state */}
//         <input
//           name="displayName"
//           value={form.displayName}
//           onChange={handleChange}
//           className="input w-full"
//           placeholder="Display name"
//         />
//         <input
//           name="photoURL"
//           value={form.photoURL}
//           onChange={handleChange}
//           className="input w-full"
//           placeholder="Photo URL"
//         />
//         <button type="submit" className="btn btn-primary w-full">
//           Update Profile
//         </button>
//       </form>
//     </div>
//   );
// }

////............

// import React, { useState, useEffect } from "react";
// import { useAuth } from "../context/AuthContext";
// import { toast } from "react-toastify";

// export default function MyProfile() {
//   const { user, updateUserProfile } = useAuth();
//   const [form, setForm] = useState({
//     displayName: "",
//     photoURL: "",
//   });
//   const [resetAfterUpdate, setResetAfterUpdate] = useState(false);

//   // Sync form with user data unless we just updated
//   useEffect(() => {
//     // 👇 The crucial block: If we just updated, we MUST NOT sync the form.
//     if (resetAfterUpdate) {
//       setResetAfterUpdate(false); // Clear the flag for the next cycle
//       // 🛑 This return statement is what makes it work! It keeps the form state blank.
//       return;
//     }

//     // Only run the sync logic if the user data is present AND we aren't resetting.
//     if (user) {
//       setForm({
//         displayName: user.displayName || "",
//         photoURL: user.photoURL || "",
//       });
//     }
//   }, [user, resetAfterUpdate]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     try {
//       await updateUserProfile({
//         displayName: form.displayName,
//         photoURL: form.photoURL,
//       });
//       toast.success("Profile updated!");

//       // ✅ 1. Set the form state to blank strings
//       setForm({ displayName: "", photoURL: "" });

//       // ✅ 2. Set the flag to true, blocking the next useEffect run
//       setResetAfterUpdate(true);
//     } catch (err) {
//       toast.error(err.message);
//     }
//   };

//   return (
//     <div className="bg-white p-6 rounded shadow max-w-xl mx-auto mt-6">
//       <h2 className="font-bold text-2xl mb-4">My Profile</h2>

//       <div className="flex items-center gap-4 mb-4">
//         <div className="avatar">
//           <div className="w-20 h-20 rounded-full">
//             <img
//               src={
//                 form.photoURL ||
//                 user?.photoURL ||
//                 "https://i.postimg.cc/3x4X0QmY/snake-plant.png"
//               }
//               alt="Profile Preview"
//             />
//           </div>
//         </div>
//         <div>
//           <div className="font-semibold">
//             {form.displayName || user?.displayName || "No name"}
//           </div>
//           <div className="text-sm text-slate-500">{user?.email}</div>
//         </div>
//       </div>

//       <form onSubmit={handleUpdate} className="space-y-3">
//         <input
//           name="displayName"
//           // The input must be controlled by the 'form' state for the clear to work
//           value={form.displayName}
//           onChange={handleChange}
//           className="input w-full"
//           placeholder="Display name"
//         />
//         <input
//           name="photoURL"
//           // The input must be controlled by the 'form' state for the clear to work
//           value={form.photoURL}
//           onChange={handleChange}
//           className="input w-full"
//           placeholder="Photo URL"
//         />
//         <button type="submit" className="btn btn-primary w-full">
//           Update Profile
//         </button>
//       </form>
//     </div>
//   );
// }

///

//;;;;;;;;;;;;;;;;;;;

// import React, { useState, useEffect } from "react";
// import { useAuth } from "../context/AuthContext";
// import { toast } from "react-toastify";

// export default function MyProfile() {
//   const { user, updateUserProfile } = useAuth();
//   const [form, setForm] = useState({
//     displayName: "",
//     photoURL: "",
//   });
//   const [resetAfterUpdate, setResetAfterUpdate] = useState(false);

//   // Sync form with user data unless we just updated
//   useEffect(() => {
//     // 🛑 CRITICAL: If the flag is true, we reset it AND RETURN (block sync).
//     if (resetAfterUpdate) {
//       setResetAfterUpdate(false);
//       return; // ⬅️ THIS RETURN IS NECESSARY TO KEEP THE FORM BLANK
//     }

//     // Only sync if the user data is present and we aren't resetting.
//     if (user) {
//       setForm({
//         displayName: user.displayName || "",
//         photoURL: user.photoURL || "",
//       });
//     }
//   }, [user, resetAfterUpdate]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleUpdate = async (e) => {
//     e.preventDefault();

//     // ✅ 1. Set the flag to block the next sync attempt FIRST
//     setResetAfterUpdate(true);

//     try {
//       await updateUserProfile({
//         displayName: form.displayName,
//         photoURL: form.photoURL,
//       });

//       // ✅ 2. Clear the input fields after successful update
//       setForm({ displayName: "", photoURL: "" });

//       toast.success("Profile updated!");
//     } catch (err) {
//       // If update fails, reset the flag so form can sync again
//       setResetAfterUpdate(false);
//       toast.error(err.message);
//     }
//   };

//   return (
//     <div className="bg-white p-6 rounded shadow max-w-xl mx-auto mt-6">
//       <h2 className="font-bold text-2xl mb-4">My Profile</h2>

//       <div className="flex items-center gap-4 mb-4">
//         <div className="avatar">
//           <div className="w-20 h-20 rounded-full">
//             <img
//               src={
//                 user?.photoURL ||
//                 "https://i.postimg.cc/3x4X0QmY/snake-plant.png"
//               }
//               alt="Profile Preview"
//             />
//           </div>
//         </div>
//         <div>
//           <div className="font-semibold">{user?.displayName || "No name"}</div>
//           <div className="text-sm text-slate-500">{user?.email}</div>
//         </div>
//       </div>

//       <form onSubmit={handleUpdate} className="space-y-3">
//         <input
//           name="displayName"
//           value={form.displayName}
//           onChange={handleChange}
//           className="input w-full"
//           placeholder="Display name"
//         />
//         <input
//           name="photoURL"
//           value={form.photoURL}
//           onChange={handleChange}
//           className="input w-full"
//           placeholder="Photo URL"
//         />
//         <button type="submit" className="btn btn-primary w-full">
//           Update Profile
//         </button>
//       </form>
//     </div>
//   );
// }

//....................

import React, { useState, useEffect, useRef } from "react";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

export default function MyProfile() {
  const { user, updateUserProfile } = useAuth();
  const [form, setForm] = useState({
    displayName: "",
    photoURL: "",
  });
  const [resetAfterUpdate, setResetAfterUpdate] = useState(false);
  const isUpdatingRef = useRef(false);

  // Sync form with user data unless we just updated
  useEffect(() => {
    // 🛑 CRITICAL: If the flag is true, we reset it AND RETURN (block sync).
    if (resetAfterUpdate) {
      setResetAfterUpdate(false);
      return; // ⬅️ THIS RETURN IS NECESSARY TO KEEP THE FORM BLANK
    }

    // Block sync if currently updating
    if (isUpdatingRef.current) {
      return;
    }

    // Only sync if the user data is present and we aren't resetting.
    if (user) {
      setForm({
        displayName: user.displayName || "",
        photoURL: user.photoURL || "",
      });
    }
  }, [user, resetAfterUpdate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    // Mark that we're updating
    isUpdatingRef.current = true;

    try {
      await updateUserProfile({
        displayName: form.displayName,
        photoURL: form.photoURL,
      });
      toast.success("Profile updated!");

      // ✅ 1. Clear the input fields immediately
      setForm({ displayName: "", photoURL: "" });

      // ✅ 2. Set the flag to block the next sync attempt
      setResetAfterUpdate(true);

      // Allow syncing again after a brief moment
      setTimeout(() => {
        isUpdatingRef.current = false;
      }, 300);
    } catch (err) {
      isUpdatingRef.current = false;
      toast.error(err.message);
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow max-w-xl mx-auto mt-6">
      <h2 className="font-bold text-2xl mb-4">My Profile</h2>

      <div className="flex items-center gap-4 mb-4">
        <div className="avatar">
          <div className="w-20 h-20 rounded-full">
            <img
              src={
                user?.photoURL ||
                "https://i.postimg.cc/3x4X0QmY/snake-plant.png"
              }
              alt="Profile Preview"
            />
          </div>
        </div>
        <div>
          <div className="font-semibold">{user?.displayName || "No name"}</div>
          <div className="text-sm text-slate-500">{user?.email}</div>
        </div>
      </div>

      <form onSubmit={handleUpdate} className="space-y-3">
        <input
          name="displayName"
          value={form.displayName}
          onChange={handleChange}
          className="input w-full"
          placeholder="Display name"
        />
        <input
          name="photoURL"
          value={form.photoURL}
          onChange={handleChange}
          className="input w-full"
          placeholder="Photo URL"
        />
        <button type="submit" className="btn btn-primary w-full">
          Update Profile
        </button>
      </form>
    </div>
  );
}
