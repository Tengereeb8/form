import { motion } from "framer-motion";

export const FourthStep = () => {
  return (
    <motion.div
      className="w-w-default h-h-default bg-[#f5f5f5] rounded-lg flex flex-col justify-between items-center p-8"
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="w-120 h-48.25 bg-white  rounded-lg p-8  relative shadow-lg">
        <img src="/logo.svg" alt="" className="w-15 h-15" />
        <h1 className="font-semibold text-[26px]">You are all set 🔥</h1>
        <p className="text-lg text-[#8e8e8e]">
          We have recieved your submmission. Thank you!
        </p>
      </div>
    </motion.div>
  );
};
