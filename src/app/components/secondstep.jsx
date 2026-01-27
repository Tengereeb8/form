"use client";
import { useState } from "react";
import { Input } from "./input";
import { Navigation } from "./navigation";
import { motion } from "framer-motion";

export const SecondStep = ({
  step,
  setStep,
  handledPrevStep,
  formData,
  updateField,
}) => {
  const [errors, setErrors] = useState({});
  console.log(errors);

  const validate = () => {
    let newErrors = {};
    const phone = formData.phoneNumber?.trim || "";

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please Enter valid Email";
    }

    if (/^\d{8}$/.test(phone)) {
      newErrors.phoneNumber = "Only numbers approved";
    }

    if ((formData.password?.length || 0) < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

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
    <motion.div
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative h-full"
    >
      <div className=" mt-7 flex flex-col gap-3 bg-white w-120 rounded-lg p-8 h-174 relative shadow-lg">
        <div className="flex flex-col gap-4 flex-1">
          <Navigation />
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
              <span className="text-red-500 text-[10px]">
                {errors.password}
              </span>
            )}
          </div>

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
        </div>

        <div className="flex gap-2 mt-4">
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
