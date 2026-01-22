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
import { Navigation } from "./navigation";

export const FirstStep = ({
  text,
  placeholder,
  value,
  onChange,
  step,
  hadledNextStep,
}) => {
  const [error, setError] = useState({
    isValid: false,
    message: "",
  });

  const handleChange = (e) => {
    const inputValue = e.target.value;

    const isFirstName = text.toLowerCase().includes("firstname");
    const isLastName = text.toLowerCase().includes("lastname");
    if (isFirstName && /\d/.test(inputValue)) {
      setError({
        isValid: false,
        message: "Numbers are not allowed",
      });
    } else if (isLastName && /\d/.test(inputValue)) {
      setError({
        isValid: false,
        message: "Numbers are not allowed",
      });
    } else {
      setError({
        isValid: true,
        message: "",
      });
    }

    onChange(inputValue);
  };
  console.log(hadledNextStep);

  return (
    <div>
      <div className="flex flex-col gap-1">
        <p className="text-sm font-semibold">
          {text} <span className="text-red-500">*</span>
        </p>
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          className={`border w-full h-11 rounded-lg py-3 px-3.25 outline-none transition-colors ${
            !error.isValid ? "border-red-500" : "border-[#0ca5e9]"
          }`}
        />
        {!error.isValid && (
          <span className="text-red-500 text-[10px]">{error.message}</span>
        )}
      </div>

      <div className="absolute bottom-0 mb-8 left-8 right-8 flex gap-2">
        {step > 1 && (
          <button
            type="button"
            className="flex-1 h-11 border border-gray-300 rounded-md hover:bg-gray-50"
          >
            Back
          </button>
        )}
        <button
          onClick={hadledNextStep}
          disabled={!error.isValid}
          className="w-full h-11 flex justify-center items-center text-white bg-[#121316] rounded-md "
        >
          Continue
        </button>
      </div>
    </div>
  );
};
