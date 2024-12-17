import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
import { useSpring } from "framer-motion";
const works = [
  {
    type: "Academic Master's Degree in Software Engineering",
    time: "2015-2018",
    place: "Tianjin University, China",
    link: "https://www.researchgate.net/profile/Mengjia-Zhang",
    content: [
      "Outstanding postgraduate of Tianjin University (4 out of 60)",
      "M-J. Zhang, J. Li, K. Zhang, An Immersive Approach to the Visual Exploration of Geospatial Network Datasets, Proc. 15th ACM SIGGRAPH International Conference on Virtual-Reality Continuum and its Applications in Industry (VRCAI’2016), Zhuhai, China, 3-4 December 2016, ACM Press, 381-390.",
      "M.J. Zhang, J. Li*, Y.N. Li, K. Zhang, Visual Exploration of 3D Geospatial Networks in a Virtual Reality Environment, The Computer Journal, Oxford University Press, 2017, 61(3): 447-458.",
    ],
  },
  {
    type: "Bachelor's Degree in Software Engineering",
    time: "2011-2015",
    place: "Tianjin University, China",
    content: [
      "Google Scholarship(2014.06)",
      "Tianjin University Weichai Power Scholarship(2013.10)",
      "National Scholarship(2012.10)",
      "Mathematical Contest in Modeling Honorable Mention",
    ],
  },
];

function Details({ type, time, place, content, link }) {
  const ref = useRef(null);
  const info = Array.isArray(content) ? content : [content];
  return (
    <li
      ref={ref}
      className="my-8 first:mt-8 last:mb-0 w-[68%] mx-auto flex flex-col justify-between md:w-[88%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {type}
        </h3>
        <span className="capitalzie font-medium text-dark/75 xs:text-sm">
          {time} | {place}
        </span>

        {link && (
          <a
            className="text-primary capitalize ml-2 xs:ml-0 block"
            href={link}
            target={"_blank"}
          >
            Research Gate
          </a>
        )}
        <ul className="font-medium w-full list-disc md:text-sm">
          {info.map((item, index) => (
            <li className="ml-5" key={index}>
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </li>
  );
}

function Education() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "center start"],
  });
  const scaleY = useSpring(scrollYProgress);
  return (
    <div className="my-64 sm:my-32">
      <h2 className="font-bold text-8xl mb-32 w-full text-center sm:text-6xl xs:text-5xl md:mb-16 sm:!mb-8 xs:!mb-6">
        Education
      </h2>
      <div ref={ref} className="w-[70%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY }}
          className="absolute left-9 top-6 w-[4px] h-full bg-dark origin-top md:w-[2px] md:left-[5px] sm:left-[10px] xs:left-[10px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          {works.map((item) => (
            <Details key={item.time} {...item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Education;
