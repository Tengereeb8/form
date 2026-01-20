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

export const Valid = () => {
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

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-[#f5f5f5] h-screen text-black flex justify-center items-center ">
      <div className="bg-white w-120 rounded-lg p-8 h-174 relative shadow-lg">
        <nav>
          <Navigation currentStep={step} />
        </nav>
        <main>
          {/* Pass data and step to Body */}
          <Body step={step} formData={formData} updateField={updateField} />
        </main>

        {/* Buttons at the bottom */}
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
              onClick={() => setStep(step + 1)}
              className="w-104 h-11 flex justify-center items-center text-white bg-[#121316] rounded-md"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
