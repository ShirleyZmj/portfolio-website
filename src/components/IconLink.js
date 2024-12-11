import React from "react";
import { motion } from "framer-motion";

function IconLink({ className, url, title, iconNode }) {
  const MotionLink = motion.a;
  return (
    <MotionLink
      className={`w-6 ${className}`}
      target={"_blank"}
      href={url}
      title={title}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.9, rotate: 15 }}
    >
      {iconNode}
    </MotionLink>
  );
}

export default IconLink;
