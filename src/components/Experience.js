import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
import { useSpring } from "framer-motion";
const works = [
  {
    position: "Web Development Engineer",
    company: "Bitdeer Group",
    companyLink: "https://www.bitdeer.com",
    time: "Jun 2022 - Oct 2024",
    address: "Singapore",
    work: "Led development of inventory/assets/funds/budget infrastructure platforms in IT.",
  },
  {
    position: "Web Developer",
    company: "ADVANCE.AI",
    companyLink: "https://www.advance.ai/",
    time: "Sep 2019 - Jun 2022",
    address: "Singapore",
    work: "1. Worked on development of app, official site, h5 and internal system in Atome.\
2. Led VideoKYC, DIV platform and AutoOCR Platform in Guardian CV.",
  },
  {
    position: "Frontend Developer",
    company: "DiDi",
    companyLink: "https://www.didiglobal.com/",
    time: "Mar 2018 - Aug 2019",
    address: "Beijing, China",
    work: "Worked on several key projects of Data Platform in Foundation Platform.",
  },
  {
    position: "Frontend Developer (Intern)",
    company: "DiDi",
    companyLink: "https://www.didiglobal.com/",
    time: "May 2017 - Nov 2017",
    address: "Beijing, China",
    work: "Worked on several key projects of Data Platform in Foundation Platform.",
  },
];

function Details({ position, company, companyLink, time, address, work }) {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-8 last:mb-0 w-[68%] mx-auto flex flex-col justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">
          <span>{position}</span>
          <a
            className="text-primary capitalize ml-2"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalzie font-medium text-dark/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
}

function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "center start"],
  });
  const scaleY = useSpring(scrollYProgress);
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2>
      <div ref={ref} className="w-[70%] mx-auto relative">
        <motion.div
          style={{ scaleY }}
          className="absolute left-9 top-6 w-[4px] h-full bg-dark origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          {works.map((item) => (
            <Details key={item.time} {...item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Experience;
