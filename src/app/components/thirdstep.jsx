// "use client";

// import { useState } from "react";
// import { Input } from "./input";

// export const Thirdstep = ({ formData, handledPrevStep, updateField }) => {
//   const handleNext=()=>{}
//   return (
//     <div className="flex flex-col gap-2">
//       <p className="text-sm font-semibold text-gray-700">
//         Date of Birth <span className="text-red-500">*</span>
//       </p>
//       <Input
//         type="date"
//         placeholder="mm/dd/yyyy"
//         value={formData.date}
//         onChange={(e) => updateField("confirmPassword", e.target.value)}
//       />
//       <p className="text-sm font-semibold text-gray-700">
//         Profile Photo <span className="text-red-500">*</span>
//       </p>
//       <label
//         htmlFor="file-upload"
//         className="border-2 border-dashed border-[#0ca5e9] w-104 h-45 bg-[#f0f9ff] rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-[#e0f2fe] transition-colors"
//       >
//         <img src="/profile.svg" alt="" />
//         <p className="black">Add Image</p>
//         <span className="text-xs text-gray-500"></span>
//       </label>
//       <div className="flex gap-2 mt-4">
//         <button
//           onClick={handledPrevStep}
//           className="flex-1 h-11 border border-gray-300 rounded-md"
//         >
//           Back
//         </button>
//         <button className="flex-1 h-11 text-white bg-[#121316] rounded-md">
//           Submit
//         </button>
//       </div>
//     </div>
//   );
// };
// "use client";
// import { useState, useEffect } from "react";
// import { Input } from "./input";
// import { motion } from "framer-motion";
// import { Navigation } from "./navigation";

// export const Thirdstep = ({
//   formData,
//   handledPrevStep,
//   updateField,
//   setStep,
//   step,
// }) => {
//   const [error, setError] = useState("");
//   const [preview, setPreview] = useState(null);

//   useEffect(() => {
//     if (formData.profileImage && formData.profileImage instanceof File) {
//       const objectUrl = URL.createObjectURL(formData.profileImage);
//       setPreview(objectUrl);
//       return () => URL.revokeObjectURL(objectUrl);
//     }
//   }, [formData.profileImage]);

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       updateField("profileImage", file);
//       setPreview(URL.createObjectURL(file));
//       setError("");
//     }
//   };

//   const handleNext = () => {
//     if (!formData.dateOfBirth) {
//       setError("Please select your date of birth.");
//       return;
//     }
//     if (!formData.profileImage) {
//       setError("Please upload a profile photo.");
//       return;
//     }
//     setError("");
//     setStep(4);
//   };

//   return (
//     <motion.div
//       initial={{ x: 50, opacity: 0 }}
//       animate={{ x: 0, opacity: 1 }}
//       transition={{ duration: 1 }}
//     >
//       <div className=" mt-7 flex flex-col gap-3 bg-white w-120 rounded-lg p-8 h-174 relative shadow-lg">
//         <Navigation />
//         {/* --- DATE OF BIRTH SECTION --- */}
//         <div className="flex flex-col gap-2">
//           <p className="text-sm font-semibold text-gray-700">
//             Date of Birth <span className="text-red-500">*</span>
//           </p>
//           <Input
//             type="date"
//             value={formData.dateOfBirth || ""}
//             onChange={(e) => updateField("dateOfBirth", e.target.value)}
//             error={error.includes("date")}
//           />
//         </div>

//         {/* --- PROFILE PHOTO SECTION --- */}
//         <div className="flex flex-col gap-2">
//           <p className="text-sm font-semibold text-gray-700">
//             Profile Photo <span className="text-red-500">*</span>
//           </p>

//           <input
//             type="file"
//             id="file-upload"
//             accept="image/*"
//             className="hidden"
//             onChange={handleFileChange}
//           />

//           <label
//             htmlFor="file-upload"
//             className={`border-2 border-dashed w-full h-48 rounded-lg flex flex-col items-center justify-center cursor-pointer overflow-hidden transition-all ${
//               error.includes("photo")
//                 ? "border-red-500 bg-red-50"
//                 : "border-[#0ca5e9] bg-[#f0f9ff]"
//             } hover:bg-[#e0f2fe]`}
//           >
//             {preview ? (
//               <div className="relative w-104 h-45">
//                 <img
//                   src={preview}
//                   alt="Profile Preview"
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
//                   <p className="text-white text-sm font-medium bg-black/50 px-3 py-1 rounded-full">
//                     Change Photo
//                   </p>
//                 </div>
//               </div>
//             ) : (
//               <>
//                 <img
//                   src="/profile.svg"
//                   alt="Upload Icon"
//                   className="w-12 h-12 mb-2"
//                 />
//                 <p className="text-[#121316] font-medium">Add Image</p>
//               </>
//             )}
//           </label>
//         </div>

//         {/* ERROR MESSAGE */}
//         {error && (
//           <span className="text-red-500 text-[10px] font-medium">{error}</span>
//         )}

//         {/* NAVIGATION BUTTONS */}
//         <div className=" aboslute flex gap-2 mt-30.5">
//           <button
//             type="button"
//             onClick={handledPrevStep}
//             className="h-11 border border-gray-300 rounded-md w-32"
//           >
//             &lt; Back
//           </button>
//           <button
//             type="button"
//             onClick={handleNext}
//             className="h-11 text-white bg-[#121316] rounded-md flex-1"
//           >
//             Continue {step}/3 &gt;
//           </button>
//         </div>
//       </div>
//     </motion.div>
//   );
// };
"use client";
import { useState, useEffect } from "react";
import { Input } from "./input";
import { motion } from "framer-motion";
import { Navigation } from "./navigation";

export const Thirdstep = ({
  formData,
  handledPrevStep,
  updateField,
  setStep,
  step,
}) => {
  const [error, setError] = useState("");
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (formData.profileImage && formData.profileImage instanceof File) {
      const objectUrl = URL.createObjectURL(formData.profileImage);
      setPreview(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [formData.profileImage]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      updateField("profileImage", file);
      setPreview(URL.createObjectURL(file));
      setError("");
    }
  };
  console.log(handledPrevStep);

  const handleNext = () => {
    if (!formData.dateOfBirth) {
      setError("Required");
      return;
    }
    if (!formData.profileImage) {
      setError("Required");
      return;
    }
    setError("");
    setStep(4);
  };

  return (
    <motion.div
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative h-full"
    >
      <div className="mt-7 flex flex-col gap-3 bg-white w-120 rounded-lg p-8 h-174 relative shadow-lg">
        <div className="flex flex-col gap-4 flex-1">
          <Navigation />

          {/* --- DATE OF BIRTH SECTION --- */}
          <div className="flex flex-col gap-1">
            <p className="text-sm font-semibold">
              Date of Birth <span className="text-red-500">*</span>
            </p>
            <Input
              type="date"
              value={formData.dateOfBirth || ""}
              onChange={(e) => updateField("dateOfBirth", e.target.value)}
              error={error.includes("date")}
            />
          </div>

          {/* --- PROFILE PHOTO SECTION --- */}
          <div className="flex flex-col gap-1">
            <p className="text-sm font-semibold">
              Profile Photo <span className="text-red-500">*</span>
            </p>

            <input
              type="file"
              id="file-upload"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />

            <label
              htmlFor="file-upload"
              className={`border-2 border-dashed w-full h-48 rounded-lg flex flex-col items-center justify-center cursor-pointer overflow-hidden transition-all ${
                error.includes("photo")
                  ? "border-red-500 bg-red-50"
                  : "border-[#0ca5e9] bg-[#f0f9ff]"
              } hover:bg-[#e0f2fe]`}
            >
              {preview ? (
                <div className="relative w-full h-full">
                  <img
                    src={preview}
                    alt="Profile Preview"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <p className="text-white text-sm font-medium bg-black/50 px-3 py-1 rounded-full">
                      Change Photo
                    </p>
                  </div>
                </div>
              ) : (
                <>
                  <img
                    src="/profile.svg"
                    alt="Upload Icon"
                    className="w-12 h-12 mb-2"
                  />
                  <p className="text-[#121316] font-medium">Add Image</p>
                </>
              )}
            </label>

            {/* ERROR MESSAGE */}
            {error && <span className="text-red-500 text-[10px]">{error}</span>}
          </div>
        </div>

        {/* NAVIGATION BUTTONS */}
        <div className="flex gap-2 mb-8 mt-33.5">
          <button
            onClick={handledPrevStep}
            className="h-11 border border-gray-300 rounded-md w-32"
          >
            &lt; Back
          </button>
          <button
            onClick={handleNext}
            className="h-11 text-white bg-[#121316] rounded-md flex-1"
          >
            Continue {step}/3 &gt;
          </button>
        </div>
      </div>
    </motion.div>
  );
};
