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
    <motion.div
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative h-full"
    >
      <div>
        {" "}
        {step < 4 && (
          <div className="">
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
                  step={step}
                  handledPrevStep={handledPrevStep}
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
    </motion.div>
  );
};
