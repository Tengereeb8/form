// "use client";
// import { useState } from "react";

// export const FirstStep = ({
//   text,
//   placeholder,
//   value,
//   onChange,
//   formData,
//   step,
//   hadledNextStep,
// }) => {

//   const handleChange = (e) => {
//     setError({
//       isValid: true,
//       errorMessage: "Numbers are not allowed",
//     });
//   };

//   const [error, setError] = useState({
//     firstNameChecker: {
//       isValid: false,
//       errorMessage: "",
//     },
//   });

//   return (
//     <div>
//       <div className="flex flex-col gap-1">
//         <p className="text-sm font-semibold">
//           {text} <span className="text-red-500">*</span>
//         </p>
//         <input
//           type="text"
//           placeholder={placeholder}
//           value={value}
//           onChange={handleChange}
//           className={`border w-full h-11 rounded-lg py-3 px-3.25 outline-none transition-colors ${
//             error ? "border-red-500" : "border-[#0ca5e9]"
//           }`}
//         />
//         {error && <span className="text-red-500 text-[10px]">{error}</span>}
//       </div>
//       <div className="absolute bottom-0 mb-8 left-8 right-8 flex gap-2">
//         {step > 1 && (
//           <button
//             onClick={() => setStep(step - 1)}
//             className="flex-1 h-11 border border-gray-300 rounded-md hover:bg-gray-50"
//           >
//             Back
//           </button>
//         )}
//         <div>
//           <button
//             onClick={hadledNextStep}
//             className="w-104 h-11 flex justify-center items-center text-white bg-[#121316] rounded-md"
//           >
//             Continue
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };
"use client";
import { useState } from "react";
import { Input } from "./input";

export const FirstStep = ({
  formData,
  step,
  hadledNextStep,
  updateField,
  handleBackStep, // Assuming you pass a back function
}) => {
  // Local state for validation errors
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    userName: "",
  });

  const validate = (name, value) => {
    let errorMessage = "";

    // Check for numbers in Name fields
    if ((name === "firstName" || name === "lastName") && /\d/.test(value)) {
      errorMessage = "Numbers are not allowed";
    }

    // Check for empty strings (Required validation)
    if (value.trim() === "") {
      errorMessage = "This field is required";
    }

    setErrors((prev) => ({ ...prev, [name]: errorMessage }));
  };

  const handleInputChange = (field, value) => {
    // 1. Update the parent state
    updateField(field, value);
    // 2. Run validation logic
    validate(field, value);
  };

  // Determine if the "Continue" button should be disabled
  // Logic: Disable if any field is empty OR if there are error messages
  const isInvalid =
    !formData.firstName ||
    !formData.lastName ||
    !formData.userName ||
    Object.values(errors).some((msg) => msg !== "");

  return (
    <div className="h-120 relative flex flex-col gap-4">
      {/* First Name */}
      <div className="flex flex-col gap-1">
        <p className="text-sm font-semibold">
          First Name <span className="text-red-500">*</span>
        </p>
        <Input
          placeholder="Enter Firstname"
          value={formData.firstName}
          onChange={(e) => handleInputChange("firstName", e.target.value)}
        />
        {errors.firstName && (
          <span className="text-red-500 text-[10px]">{errors.firstName}</span>
        )}
      </div>

      {/* Last Name */}
      <div className="flex flex-col gap-1">
        <p className="text-sm font-semibold">
          Last Name <span className="text-red-500">*</span>
        </p>
        <Input
          placeholder="Enter Lastname"
          value={formData.lastName} // Fixed: was firstName
          onChange={(e) => handleInputChange("lastName", e.target.value)} // Fixed: was firstName
        />
        {errors.lastName && (
          <span className="text-red-500 text-[10px]">{errors.lastName}</span>
        )}
      </div>

      {/* User Name */}
      <div className="flex flex-col gap-1">
        <p className="text-sm font-semibold">
          Username <span className="text-red-500">*</span>
        </p>
        <Input
          placeholder="Enter Username"
          value={formData.userName} // Fixed: was firstName
          onChange={(e) => handleInputChange("userName", e.target.value)} // Fixed: was firstName
        />
        {errors.userName && (
          <span className="text-red-500 text-[10px]">{errors.userName}</span>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-0 mb-8 left-0 right-0 flex gap-2">
        {step > 1 && (
          <button
            type="button"
            onClick={handleBackStep}
            className="flex-1 h-11 border border-gray-300 rounded-md hover:bg-gray-50"
          >
            &lt; Back
          </button>
        )}
        <button
          onClick={hadledNextStep}
          disabled={isInvalid}
          className={`h-11 flex justify-center items-center text-white rounded-md transition-all ${
            isInvalid ? "bg-gray-400 cursor-not-allowed" : "bg-[#121316] w-full"
          } ${step > 1 ? "flex-1" : "w-full"}`}
        >
          Continue &gt;
        </button>
      </div>
    </div>
  );
};
