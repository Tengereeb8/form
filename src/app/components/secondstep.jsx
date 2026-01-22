// "use client";

// import { useState } from "react";
// import { Input } from "./input";

// export const SecondStep = ({
//   text,
//   value,
//   onChange,
//   formData,
//   step,
//   setStep,
//   handledPrevStep,
// }) => {
//   const [error, setError] = useState("");

//   // EMAIL VALIDATION
//   const handleChangeEmail = (inputValue) => {
//     if (
//       inputValue.length > 0 &&
//       !inputValue.toLowerCase().endsWith("@gmail.com")
//     ) {
//       setError("Email must end with @gmail.com");
//     } else {
//       setError("");
//     }
//   };

//   // PHONE VALIDATION
//   const handleChangerOfPhoneNumber = (inputValue) => {
//     if (inputValue.length > 0 && !/^\d+$/.test(inputValue)) {
//       setError("Only numbers are approved");
//     } else {
//       setError("");
//     }
//   };

//   // PASSWORD VALIDATION
//   const handleChangeOfPassword = (inputValue) => {
//     // Example: Minimum 8 characters
//     if (inputValue.length > 0 && inputValue.length < 8) {
//       setError("Password must be at least 8 characters");
//     } else {
//       setError("");
//     }
//   };

//   // MASTER HANDLER
//   // const handleInputChange = (e) => {
//   //   const inputValue = e.target.value;
//   //   onChange(inputValue); // Update parent state

//   //   // Determine which validation to run based on the label text
//   //   const label = text.toLowerCase();
//   //   if (label.includes("email")) {
//   //     handleChangeEmail(inputValue);
//   //   } else if (label.includes("phone")) {
//   //     handleChangerOfPhoneNumber(inputValue);
//   //   } else if (label.includes("password")) {
//   //     handleChangeOfPassword(inputValue);
//   //   }
//   // };

//   const nextPage = (e) => {
//     // 1. Check if empty
//     const inputValue = e.target.value;
//     onChange(inputValue); // Update parent state

//     // Determine which validation to run based on the label text
//     const label = text.toLowerCase();
//     if (label.includes("email")) {
//       handleChangeEmail(inputValue);
//     } else if (label.includes("phone")) {
//       handleChangerOfPhoneNumber(inputValue);
//     } else if (label.includes("password")) {
//       handleChangeOfPassword(inputValue);
//     }
//     // 2. Check if there is an existing validation error
//     if (error) {
//       return;
//     }

//     // 3. If all good, move to next step
//     setStep((prev) => prev + 1);
//   };

//   return (
//     <div className="relative min-h-[200px]">
//       <div className="flex flex-col gap-1">
//         <p className="text-sm font-semibold">
//           {text} <span className="text-red-500">*</span>
//         </p>

//         <Input
//           value={value}
//           error={!!error} // Pass boolean to Input for styling
//         />

//         {error && (
//           <span className="text-red-500 text-[10px] mt-1">{error}</span>
//         )}
//       </div>

//       <div className="relative bottom-0  left-0 right-0 flex gap-2">
//         {step > 1 && (
//           <button
//             type="button"
//             onClick={handledPrevStep}
//             className="flex-1 h-11 border border-gray-300 rounded-md hover:bg-gray-50"
//           >
//             Back
//           </button>
//         )}
//         <button
//           type="button"
//           onClick={nextPage}
//           className="flex-1 h-11 flex justify-center items-center text-white bg-[#121316] rounded-md"
//         >
//           Continue
//         </button>
//       </div>
//     </div>
//   );
// };
// "use client";
// import { useState } from "react";
// import { Input } from "./input";

// export const SecondStep = ({
//   text, // e.g., "Email", "Phone Number", or "Password"
//   value, // Current value from parent formData
//   onChange, // Update function from parent
//   step,
//   setStep,
//   handledPrevStep,
// }) => {
//   const [error, setError] = useState("");

//   // Validation Logic
//   const validate = (val) => {
//     const label = text.toLowerCase();
//     if (!val || val.trim() === "") return "This field is required";

//     if (label.includes("email") && !val.toLowerCase().endsWith("@gmail.com")) {
//       return "Email must end with @gmail.com";
//     }
//     if (label.includes("phone") && !/^\d+$/.test(val)) {
//       return "Only numbers approved";
//     }
//     if (label.includes("password") && val.length < 8) {
//       return "Password must be at least 8 characters";
//     }
//     return "";
//   };

//   const handleInternalChange = (e) => {
//     const newValue = e.target.value;
//     onChange(newValue); // Send to parent
//     setError(validate(newValue)); // Check for errors immediately
//   };

//   const nextPage = () => {
//     const validationError = validate(value);
//     if (validationError) {
//       setError(validationError);
//     } else {
//       setStep((prev) => prev + 1);
//     }
//   };

//   // Determine input type
//   const isPassword = text.toLowerCase().includes("password");

//   return (
//     <div className="flex flex-col gap-1">
//       <p className="text-sm font-semibold">
//         {text} <span className="text-red-500">*</span>
//       </p>

//       <Input
//         type={isPassword ? "password" : "text"}
//         placeholder={`Enter ${text}`}
//         value={value}
//         onChange={handleInternalChange}
//         error={!!error}
//       />

//       {error && <span className="text-red-500 text-[10px]">{error}</span>}

//       <div className="flex gap-2 mt-8">
//         <button
//           type="button"
//           onClick={handledPrevStep}
//           className="flex-1 h-11 border border-gray-300 rounded-md"
//         >
//           <span></span>Back
//         </button>
//         <button
//           type="button"
//           onClick={nextPage}
//           className="flex-1 h-11 text-white bg-[#121316] rounded-md"
//         >
//           Continue
//         </button>
//       </div>
//     </div>
//   );
// };
"use client";
import { useState } from "react";
import { Input } from "./input";
import { Navigation } from "./navigation";

export const SecondStep = ({
  step,
  setStep,
  handledPrevStep,
  formData,
  updateField,
}) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    // Email Validation
    if (!formData.email?.toLowerCase().endsWith("@gmail.com")) {
      newErrors.email = "Email must end with @gmail.com";
    }

    // Phone Validation
    if (!/^\d+$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Only numbers approved";
    }

    // Password Validation
    if ((formData.password?.length || 0) < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    // Confirm Password Validation
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    // Check if any fields are empty
    ["email", "phoneNumber", "password", "confirmPassword"].forEach((field) => {
      if (!formData[field]) newErrors[field] = "Required";
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      setStep(step + 1);
    }
  };

  return (
    <div className="">
      <div className="flex flex-col gap-4">
        {/* Email Field */}
        <div className="flex flex-col gap-1">
          <p className="text-sm font-semibold">
            Email <span className="text-red-500">*</span>
          </p>
          <Input
            placeholder="Enter email"
            value={formData.email}
            onChange={(e) => updateField("email", e.target.value)}
            error={!!errors.email}
          />
          {errors.email && (
            <span className="text-red-500 text-[10px]">{errors.email}</span>
          )}
        </div>

        {/* Phone Field */}
        <div className="flex flex-col gap-1">
          <p className="text-sm font-semibold">
            Phone Number <span className="text-red-500">*</span>
          </p>
          <Input
            placeholder="Enter phone number"
            value={formData.phoneNumber}
            onChange={(e) => updateField("phoneNumber", e.target.value)}
            error={!!errors.phoneNumber}
          />
          {errors.phoneNumber && (
            <span className="text-red-500 text-[10px]">
              {errors.phoneNumber}
            </span>
          )}
        </div>

        {/* Password Field */}
        <div className="flex flex-col gap-1">
          <p className="text-sm font-semibold">
            Password <span className="text-red-500">*</span>
          </p>
          <Input
            type="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={(e) => updateField("password", e.target.value)}
            error={!!errors.password}
          />
          {errors.password && (
            <span className="text-red-500 text-[10px]">{errors.password}</span>
          )}
        </div>

        {/* Confirm Password Field */}
        <div className="flex flex-col gap-1">
          <p className="text-sm font-semibold">
            Confirm Password <span className="text-red-500">*</span>
          </p>
          <Input
            type="password"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={(e) => updateField("confirmPassword", e.target.value)}
            error={!!errors.confirmPassword}
          />
          {errors.confirmPassword && (
            <span className="text-red-500 text-[10px]">
              {errors.confirmPassword}
            </span>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-2 mt-4">
          <button
            onClick={handledPrevStep}
            className="flex-1 h-11 border border-gray-300 rounded-md"
          >
            Back
          </button>
          <button
            onClick={handleNext}
            className="flex-1 h-11 text-white bg-[#121316] rounded-md"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};
