"use client";
import { FirstStep } from "./Firststep";
import { FourthStep } from "./fourthstep";
import { Navigation } from "./navigation";
import { SecondStep } from "./secondstep";
import { Thirdstep } from "./thirdstep";
import { motion } from "framer-motion";

export const Body = ({
  setStep,
  step,
  formData,
  updateField,
  hadledNextStep,
  error,
  handledPrevStep,
  setFormData,
  date,
  img,
}) => {
  return (
    <div>
      {" "}
      {step < 4 && (
        <div className="mt-7 flex flex-col gap-3 bg-white w-120 rounded-lg p-8 h-174 relative shadow-lg">
          {step < 4 && <Navigation currentStep={step} />}
          {step === 1 && (
            <div className="">
              <FirstStep
                text={"Firstname"}
                placeholder={"Enter Firstname"}
                onChange={(val) => updateField("firstName", val)}
                validationType="noNumbers"
                step={step}
                hadledNextStep={hadledNextStep}
                error={error}
                formData={formData}
                updateField={updateField}
              />
            </div>
          )}

          {step === 2 && (
            <>
              <SecondStep
                text={"Email"}
                placeholder={"Enter Email"}
                value={formData.email}
                onChange={(val) => updateField("email", val)}
                validationType="noNumbers"
                step={step}
                handleNextStep={hadledNextStep}
                handledPrevStep={handledPrevStep}
                setStep={setStep}
                formData={formData}
                setFormData={setFormData}
                updateField={updateField}
              />
            </>
          )}

          {step === 3 && (
            <>
              <Thirdstep
                text={"Date of Birth"}
                placeholder={"mm-dd-yyyy"}
                value={formData.date}
                onChange={(val) => updateField("date", val)}
                setStep={setStep}
                formData={formData}
                updateField={updateField}
              />
            </>
          )}
        </div>
      )}
      {step === 4 && (
        <>
          <FourthStep />
        </>
      )}
    </div>
  );
};
