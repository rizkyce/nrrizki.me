import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const TextAnimation = () => {
  const controls = useAnimation();
  const [isAnimating, setIsAnimating] = useState(true);
  const text = "Nur Ridho Rizki";

  useEffect(() => {
    const sequence = async () => {
      await controls.start((i) => ({
        opacity: 1,
        transition: { delay: i * 0.3 },
      }));
      await controls.start({ opacity: 0 });
    };

    if (isAnimating) {
      sequence().then(() => setIsAnimating(false));
    } else {
      setIsAnimating(true);
    }
  }, [controls, isAnimating]);

  return (
    <motion.div className="text">
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          custom={index}
          initial={{ opacity: 0 }}
          animate={controls}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default TextAnimation;
