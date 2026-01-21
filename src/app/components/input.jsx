export const Input = ({
  placeholder,
  value,
  handleChangerOfPhoneNumber,
  error,
}) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={handleChangerOfPhoneNumber}
      className={`border w-full h-11 rounded-lg py-3 px-3.25 outline-none transition-colors ${
        error ? "border-red-500" : "border-[#0ca5e9]"
      }`}
    />
  );
};
