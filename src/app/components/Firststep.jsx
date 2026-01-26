"use client";
import { useState } from "react";
import { Input } from "./input";
import { motion } from "framer-motion";
import { Navigation } from "./navigation";

export const FirstStep = ({
  formData,
  step,
  hadledNextStep,
  updateField,
  handleBackStep,
}) => {
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    userName: "",
  });

  const validate = () => {
    let newErrors = {
      firstName: "",
      lastName: "",
      userName: "",
    };

    if (!formData.firstName || formData.firstName.trim() === "") {
      newErrors.firstName = "Required";
    } else if (/\d/.test(formData.firstName)) {
      newErrors.firstName = "Numbers are not allowed";
    }

    if (!formData.lastName || formData.lastName.trim() === "") {
      newErrors.lastName = "Required";
    } else if (/\d/.test(formData.lastName)) {
      newErrors.lastName = "Numbers are not allowed";
    }

    if (!formData.userName || formData.userName.trim() === "") {
      newErrors.userName = "Required";
    }

    setErrors(newErrors);
    return Object.values(newErrors).every((msg) => msg === "");
  };

  const handleContinue = () => {
    if (validate()) {
      hadledNextStep();
    }
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
          <div className="flex flex-col gap-1">
            <p className="text-sm font-semibold">
              First Name <span className="text-red-500">*</span>
            </p>
            <Input
              placeholder="Enter Firstname"
              value={formData.firstName}
              onChange={(e) => updateField("firstName", e.target.value)}
              error={!!errors.firstName}
            />
            {errors.firstName && (
              <span className="text-red-500 text-[10px]">
                {errors.firstName}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-semibold">
              Last Name <span className="text-red-500">*</span>
            </p>
            <Input
              placeholder="Enter Lastname"
              value={formData.lastName}
              onChange={(e) => updateField("lastName", e.target.value)}
              error={!!errors.lastName}
            />
            {errors.lastName && (
              <span className="text-red-500 text-[10px]">
                {errors.lastName}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-semibold">
              Username <span className="text-red-500">*</span>
            </p>
            <Input
              placeholder="Enter Username"
              value={formData.userName}
              onChange={(e) => updateField("userName", e.target.value)}
              error={!!errors.userName}
            />
            {errors.userName && (
              <span className="text-red-500 text-[10px]">
                {errors.userName}
              </span>
            )}
          </div>
        </div>

        <div className="flex gap-2  mt-35">
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
            onClick={handleContinue}
            className={`h-11 flex justify-center items-center text-white rounded-md transition-all bg-[#121316] ${
              step > 1 ? "flex-1" : "w-full"
            }`}
          >
            Continue &gt;
          </button>
        </div>
      </div>
    </motion.div>
  );
};
