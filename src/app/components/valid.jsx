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

  const handleChangerOfPhoneNumber = (e) => {
    const inputValue = e.target.value;
    onChange(inputValue);
    if (!/\d+/.test(inputValue)) {
      setError("Only Numbers approved");
    }
  };

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const hadledNextStep = () => {
    if (/\d/.test(formData.firstName) || /\d/.test(formData.lastName)) {
      setError("Numbers are not allowed.");
    } else if (
      formData.firstName.trim() === "" ||
      formData.lastName.trim() === "" ||
      formData.userName.trim() === ""
    ) {
      setError("Field must be filled");
    } else {
      setStep((prev) => prev + 1);
    }
  };

  return (
    <div className="bg-[#f5f5f5] h-screen text-black flex justify-center items-center ">
      <div className="bg-white w-120 rounded-lg p-8 h-174 relative shadow-lg">
        <nav>
          <Navigation currentStep={step} />
        </nav>
        <main>
          {/* Pass data and step to Body */}
          <Body
            step={step}
            formData={formData}
            updateField={updateField}
            hadledNextStep={hadledNextStep}
            error={error}
            handleChangerOfPhoneNumber={handleChangerOfPhoneNumber}
          />
        </main>

        {/* Buttons at the bottom */}
      </div>
    </div>
  );
};
