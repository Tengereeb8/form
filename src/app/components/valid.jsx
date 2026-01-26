// "use client";
// import { useState } from "react";
// import { Body } from "./body";
// import { Buttons } from "./button";
// import { Navigation } from "./navigation";

// export const Valid = () => {
//   const [step, setStep] = useState(1);
//    const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     userName: "",
//     email: "",
//     tel: "",
//     password: "",
//     confirmPassword: "",
//     date: "",
//     img: "",
//   });

//   return (
//     <div className="bg-[#f5f5f5] h-screen text-black flex justify-center items-center ">
//       <div className="bg-white w-120 rounded-lg p-8 h-164 relative">
//         <nav>
//           <Navigation />
//         </nav>
//         <main>
//           <Body />
//         </main>
//         <button className="absolute bottom-0 m-8 left-0">
//           <Buttons />
//         </button>
//       </div>
//     </div>
//   );
// };
"use client";
import { useState } from "react";
import { Body } from "./body";
import { Navigation } from "./navigation";
import { motion } from "framer-motion";

export const Valid = () => {
  const [error, setError] = useState("");
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    tel: "",
    password: "",
    confirmPassword: "",
    date: "",
    img: "",
  });

  const updateField = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const hadledNextStep = () => {
    if (
      !formData.firstName.trim() ||
      !formData.lastName.trim() ||
      !formData.userName.trim()
    ) {
      setError({
        isValid: false,
        message: "All fields must be filled",
      });
      return;
    }

    if (error && !error.isValid) {
      return;
    }

    setError({ isValid: true, message: "" });
    setStep((prev) => prev + 1);
  };
  const handledPrevStep = () => {
    setStep((prev) => prev - 1);
  };

  return (
    <div className="bg-[#f5f5f5] h-screen text-black flex justify-center items-center ">
      <div className="">
        <main>
          <Body
            step={step}
            formData={formData}
            updateField={updateField}
            hadledNextStep={hadledNextStep}
            error={error}
            handledPrevStep={handledPrevStep}
            setStep={setStep}
            setFormData={setFormData}
          />
        </main>
      </div>
    </div>
  );
};
