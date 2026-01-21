"use client";

import { useState } from "react";
import { Input } from "./input";

export const SecondStep = ({
  text,
  placeholder,
  value,
  onChange,
  formData,
  step,
  hadledNextStep,
  setStep,
}) => {
  const [error, setError] = useState("");
  const handleChange = (e) => {
    const inputValue = e.target.value;
    onChange(inputValue);

    if (
      inputValue.length > 0 &&
      !inputValue.toLowerCase().endsWith("@gmail.com")
    ) {
      setError("Email must end with @gmail.com");
    }
  };
  const handleChangerOfPhoneNumber = (e) => {
    const inputValue = e.target.value;
    onChange(inputValue);
    if (!/\d+/.test(inputValue)) {
      setError("Only Numbers approved");
    }
  };

  return (
    <div>
      {" "}
      <div className="flex flex-col gap-1">
        <p className="text-sm font-semibold">
          {text} <span className="text-red-500">*</span>
        </p>
        <Input
          placeholder={placeholder}
          value={value}
          handleChangerOfPhoneNumber={handleChangerOfPhoneNumber}
          error={error}
        />
        {}
        {error && <span className="text-red-500 text-[10px]">{error}</span>}
      </div>
      <div className="absolute bottom-0 mb-8 left-8 right-8 flex gap-2">
        {step > 1 && (
          <button
            onClick={() => setStep(step - 1)}
            className="flex-1 h-11 border border-gray-300 rounded-md hover:bg-gray-50"
          >
            Back
          </button>
        )}
        <div>
          <button
            onClick={hadledNextStep}
            className="w-104 h-11 flex justify-center items-center text-white bg-[#121316] rounded-md"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};
