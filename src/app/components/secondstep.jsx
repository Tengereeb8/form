"use client";

import { useState } from "react";

export const SecondStep = ({
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

    if (
      validationType === "gmail" &&
      inputValue.length > 0 &&
      !inputValue.toLowerCase().endsWith("@gmail.com")
    ) {
      setError("Email must end with @gmail.com");
    }
  };
  const handleChangerOfPhoneNumber = (e) => {
    const inputValue = e.target.value;
    onChange(inputValue);
    if (validationType === "numbersOnly" && !/\d+/.test(inputValue)) {
      setError("Only Numbers approved");
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
