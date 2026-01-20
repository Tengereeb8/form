// "use client";

// import { useState } from "react";

// export const FirstStep = ({ text, placeholder, value, onChange }) => {
//   const [error, setError] = useState("");
//   const handleChange = (e) => {
//     const inputValue = e.target.value;
//     onChange(inputValue);
//     if (/\d/.test(inputValue)) {
//       setError("Numbers are not allowed.");
//       return;
//     } else {
//       setError("");
//     }
//     // if (inputValue.length === 0) {
//     //   setError("Field must be filled");
//     // }
//   };
//   return (
//     <div className="flex flex-col gap-2">
//       <p>
//         {text} <span className="text-red-500">*</span>
//       </p>
//       <input
//         type="text"
//         placeholder={placeholder}
//         value={value}
//         onChange={handleChange}
//         className={`border w-104 h-11 rounded-lg py-3 px-3.25 outline-none transition-colors ${error ? "border-red-500 " : "border-[#0ca5e9]"}`}
//       />
//       {error && <span className="text-red-500 text-sm">{error}</span>}
//     </div>
//   );
// };
"use client";
import { useState } from "react";

export const FirstStep = ({
  text,
  placeholder,
  value,
  onChange,
  validationType,
}) => {
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const inputValue = e.target.value;
    onChange(inputValue);

    if (validationType === "noNumbers" && /\d/.test(inputValue)) {
      setError("Numbers are not allowed.");
    } else {
      setError("");
    }
  };

  return (
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
          error ? "border-red-500" : "border-[#0ca5e9]"
        }`}
      />
      {error && <span className="text-red-500 text-[10px]">{error}</span>}
    </div>
  );
};
