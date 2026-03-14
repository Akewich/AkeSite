import { motion } from "framer-motion";
import React from "react";

const stairAnimation = {
  initial: {
    top: "0&",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

// calculate th reverse
const reverseIndex = (index: number) => {
  const totalStep = 3;
  return totalStep - index - 1;
};

const Stairs = () => {
  return (
    <>
      {/* render & motion divs a step of the stair */}
      {[...Array(3)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.2,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            className="h-full w-full bg-white relative"
          />
        );
      })}
    </>
  );
};

export default Stairs;
