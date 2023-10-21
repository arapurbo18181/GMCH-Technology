import { motion, useAnimationControls } from "framer-motion";
import React, { useState } from "react";

const TextSpan = ({ letter }) => {
  const [IsPlaying, setIsPlaying] = useState(false);
  const controls = useAnimationControls();

  const rubberBand = () => {
    controls.start({
      transform: [
        "scale3d(1, 1, 1)",
        "scale3d(1.4, .55, 1)",
        "scale3d(.75, 1.25, 1)",
        "scale3d(1.25, .85, 1)",
        "scale3d(.9, 1.05, 1)",
        "scale3d(1, 1, 1)",
      ],
      // transition: {
      //   times: [0, .4, .6, .7, .8, .9],
      // },
    });
    setIsPlaying(true);
  };
  


  return (
    <motion.span
      className="title text-gray-200 inline-block"
      animate={controls}
      onMouseOver={() => {
        if (!IsPlaying) {
          rubberBand();
        }
      }}
      onAnimationComplete={() => setIsPlaying(false)}
    >
      {letter === " " ? "\u00A0" : letter }
    </motion.span>
  );
};

export default TextSpan;
