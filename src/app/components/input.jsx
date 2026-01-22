// export const Input = ({
//   handleChangerOfPhoneNumber,
//   error,
//   handleChange,
//   handleChangeOfPassword,
// }) => {
//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Enter email"
//         onChange={handleChange}
//         className={`border w-full h-11 rounded-lg py-3 px-3.25 outline-none transition-colors ${
//           error ? "border-red-500" : "border-[#0ca5e9]"
//         }`}
//       />
//       <input
//         type="text"
//         placeholder="Enter phone number"
//         onChange={handleChangerOfPhoneNumber}
//         className={`border w-full h-11 rounded-lg py-3 px-3.25 outline-none transition-colors ${
//           error ? "border-red-500" : "border-[#0ca5e9]"
//         }`}
//       />{" "}
//       <input
//         type="text"
//         placeholder="Enter Password"
//         className="border w-full rounded-lg py-3 px-3.25 outline-none border-[#0ca5e9]"
//       />{" "}
//       <input
//         type="text"
//         onChange={handleChangeOfPassword}
//         placeholder="Confirm Password"
//         className="border w-full rounded-lg py-3 px-3.25 outline-none border-[#0ca5e9]"
//       />
//     </div>
//   );
// };
// export const Input = ({
//   placeholder,
//   value,
//   onChange,
//   error,
//   type = "text", // Default to text, but can be "password"
// }) => {
//   return (
//     <input
//       type={type}
//       placeholder={placeholder}
//       value={value}
//       onChange={onChange}
//       className={`border w-full h-11 rounded-lg py-3 px-3.25 outline-none transition-colors ${
//         error ? "border-red-500" : "border-[#0ca5e9]"
//       }`}
//     />
//   );
// };
export const Input = ({
  placeholder,
  value,
  onChange,
  error,
  type = "text",
}) => {
  return (
    <div className="w-full">
      <input
        type={type}
        placeholder={placeholder}
        value={value || ""}
        onChange={onChange}
        className={`border w-full h-11 rounded-lg py-3 px-3.25 outline-none transition-colors ${
          error ? "border-red-500" : "border-[#0ca5e9]"
        }`}
      />
    </div>
  );
};
