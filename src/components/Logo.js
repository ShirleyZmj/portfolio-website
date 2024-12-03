import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Logo = () => {
  const MotionLink = motion(Link);

  return (
    <div className="flex items-center justify-between mt-2">
      <MotionLink
        whileHover={{
          backgroundColor: [
            "#121212",
            "#FF6666", // Rich Red
            "#FF9966", // Rich Orange
            "#FFCC66", // Rich Yellow
            "#66CC66", // Rich Green
            "#6699CC", // Rich Blue
            "#9966CC", // Rich Indigo
            "#CC6699", // Rich Violet
            "#121212",
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
        href="/"
        className="w-16 h-16 flex items-center justify-center rounded-full  bg-dark text-light text-2xl font-bold"
      >
        CB
      </MotionLink>
    </div>
  );
};

export default Logo;
