// // import { FirstStep } from "./Firststep";

// // export const Body = () => {
// //   return (
// //     <div className="mt-7 flex flex-col gap-3">
// //       <FirstStep text={"Firstname"} placeholder={"Firstname"} />
// //       <FirstStep text={"Lastname"} placeholder={"Lastname"} />
// //       <FirstStep text={"Username"} placeholder={"Username"} />
// //     </div>
// //   );
// // };
// "use client";
// import { useState } from "react";
// import { FirstStep } from "./Firststep";

// export const Body = () => {
//   const [formData, setFormData] = useState({
//     firstname: "",
//     lastname: "",
//     username: "",
//   });

//   const updateField = (field, value) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//   };

//   return (
//     <div className="mt-7 flex flex-col gap-3">
//       <FirstStep
//         text={"Firstname"}
//         placeholder={"Enter Firstname"}
//         value={formData.firstname}
//         onChange={(val) => updateField("firstname", val)}
//       />
//       <FirstStep
//         text={"Lastname"}
//         placeholder={"Enter Lastname"}
//         value={formData.lastname}
//         onChange={(val) => updateField("lastname", val)}
//       />
//       <FirstStep
//         text={"Username"}
//         placeholder={"Enter Username"}
//         value={formData.username}
//         onChange={(val) => updateField("username", val)}
//       />
//     </div>
//   );
// };
// "use client";
// import { FirstStep } from "./Firststep";

// export const Body = ({ step, formData, updateField }) => {
//   return (
//     <div className="mt-7 flex flex-col gap-3">
//       {/* PAGE 1: NAMES */}
//       {step === 1 && (
//         <>
//           <FirstStep
//             text={"Firstname"}
//             placeholder={"Enter Firstname"}
//             value={formData.firstName}
//             onChange={(val) => updateField("firstName", val)}
//             validationType="noNumbers"
//           />
//           <FirstStep
//             text={"Lastname"}
//             placeholder={"Enter Lastname"}
//             value={formData.lastName}
//             onChange={(val) => updateField("lastName", val)}
//             validationType="noNumbers"
//           />
//           <FirstStep
//             text={"Username"}
//             placeholder={"Enter Username"}
//             value={formData.userName}
//             onChange={(val) => updateField("userName", val)}
//             validationType="noNumbers"
//           />
//         </>
//       )}

//       {/* PAGE 2: CONTACT & PASSWORD */}
//       {step === 2 && (
//         <>
//           <FirstStep
//             text={"Email"}
//             placeholder={"example@gmail.com"}
//             value={formData.email}
//             onChange={(val) => updateField("email", val)}
//             validationType="gmail"
//           />
//           <FirstStep
//             text={"Phone Number"}
//             placeholder={"Enter Phone"}
//             value={formData.tel}
//             onChange={(val) => updateField("tel", val)}
//           />
//           <FirstStep
//             text={"Password"}
//             placeholder={"Enter Password"}
//             value={formData.password}
//             onChange={(val) => updateField("password", val)}
//           />
//           <FirstStep
//             text={"Confirm Password"}
//             placeholder={"Confirm Password"}
//             value={formData.confirmPassword}
//             onChange={(val) => updateField("confirmPassword", val)}
//           />
//         </>
//       )}

//       {/* PAGE 3: DATE & PHOTO */}
//       {step === 3 && (
//         <>
//           <FirstStep
//             text={"Date of Birth"}
//             placeholder={"yyyy-mm-dd"}
//             value={formData.date}
//             onChange={(val) => updateField("date", val)}
//           />
//           <div className="flex flex-col gap-2">
//             <p>
//               Profile Photo <span className="text-red-500">*</span>
//             </p>
//             <input
//               type="file"
//               className="border w-full rounded-lg p-2"
//               onChange={(e) => updateField("img", e.target.files[0])}
//             />
//           </div>
//         </>
//       )}
//     </div>
//   );
// };
"use client";
import { FirstStep } from "./Firststep";
import { SecondStep } from "./secondstep";
import { Thirdstep } from "./thirdstep";

export const Body = ({ step, formData, updateField }) => {
  return (
    <div className="mt-7 flex flex-col gap-3">
      {/* PAGE 1: NAMES */}
      {step === 1 && (
        <>
          <FirstStep
            text={"Firstname"}
            placeholder={"Enter Firstname"}
            value={formData.firstName}
            onChange={(val) => updateField("firstName", val)}
            validationType="noNumbers"
          />
          <FirstStep
            text={"Lastname"}
            placeholder={"Enter Lastname"}
            value={formData.lastName}
            onChange={(val) => updateField("lastName", val)}
            validationType="noNumbers"
          />
          <FirstStep
            text={"Username"}
            placeholder={"Enter Username"}
            value={formData.userName}
            onChange={(val) => updateField("userName", val)}
            validationType="noNumbers"
          />
        </>
      )}

      {/* PAGE 2: CONTACT & PASSWORD */}
      {step === 2 && (
        <>
          <SecondStep
            text={"Email"}
            placeholder={"example@gmail.com"}
            value={formData.email}
            onChange={(val) => updateField("email", val)}
            validationType="gmail"
          />
          <SecondStep
            text={"Phone Number"}
            placeholder={"Enter Phone"}
            value={formData.tel}
            onChange={(val) => updateField("tel", val)}
          />
          <SecondStep
            text={"Password"}
            placeholder={"Enter Password"}
            value={formData.password}
            onChange={(val) => updateField("password", val)}
          />
          <SecondStep
            text={"Confirm Password"}
            placeholder={"Confirm Password"}
            value={formData.confirmPassword}
            onChange={(val) => updateField("confirmPassword", val)}
          />
        </>
      )}

      {/* PAGE 3: DATE & PHOTO */}
      {step === 3 && (
        <>
          <Thirdstep
            text={"Date of Birth"}
            placeholder={"mm-dd-yyyy"}
            value={formData.date}
            onChange={(val) => updateField("date", val)}
          />
          <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold text-gray-700">
              Profile Photo <span className="text-red-500">*</span>
            </p>

            {/* 1. We hide the actual input using 'hidden' */}
            <input
              type="file"
              id="file-upload"
              className="hidden"
              onChange={(e) => updateField("img", e.target.files[0])}
            />

            {/* 2. We use a Label to act as the new button */}
            <label
              htmlFor="file-upload"
              className="border-2 border-dashed border-[#0ca5e9] w-104 h-45 bg-[#f0f9ff] rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-[#e0f2fe] transition-colors"
            >
              <img src="/profile.svg" alt="" />
              <span className="text-xs text-gray-500">
                {formData.img ? formData.img.name : "Add Image"}
              </span>
            </label>
          </div>
        </>
      )}
    </div>
  );
};
