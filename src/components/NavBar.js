"use client";

import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { GithubIcon, LinkedInIcon, ResearchgateIcon } from "./Icons";

const IconLink = ({ url, iconNode, title, className }) => {
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
};

const MenuLink = ({ href, title, className, mobile = false, callback }) => {
  const router = useRouter();
  const isActive = router.asPath === href;
  const handleClick = () => {
    router.push(href);
    if (mobile && callback) {
      callback();
    }
  };
  return (
    <button
      onClick={handleClick}
      className={`${className} relative group hover:text-primary ${
        isActive ? "text-primary" : mobile ? "text-light" : "text-dark"
      } transition-colors ease duration-300`}
    >
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5
          group-hover:w-full group-hover:bg-primary transition-all ease duration-300
          ${isActive ? "w-full bg-primary" : "w-0 bg-dark"}`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className="test  relative w-full font-medium flex items-center justify-between 
    z-10 py-8 px-32 xs:px-4 sm:px-8 md:px-12 lg:px-16" // TODO: doesn't work
    >
      {/* menu button */}
      <button
        className="flex-col justify-center items-center hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-dark block h-0.5 w-6 rounded-sm  ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          } transition-all duration-300 ease-out`}
        ></span>
        <span
          className={`bg-dark block h-0.5  rounded-sm my-0.5 ${
            isOpen ? "w-0 opacity-0" : "w-6"
          } transition-all duration-300 ease-out`}
        ></span>
        <span
          className={`bg-dark block h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          } transition-all duration-300 ease-out`}
        ></span>
      </button>

      {/* large screen nav bar */}
      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <MenuLink href="/" title="Home" className="mr-4" />
          <MenuLink href="/about" title="About" className="mx-4" />
          {/* <MenuLink href="/projects" title="Projects" className="mr-4" /> */}
        </nav>

        <nav className="flex items-center justify-between gap-4">
          <IconLink
            url="https://github.com/ShirleyZmj"
            iconNode={<GithubIcon />}
            title="Github"
          />
          <IconLink
            url="https://www.linkedin.com/in/zhang-mengjia/"
            iconNode={<LinkedInIcon />}
            title="LinkedIn"
          />
          <IconLink
            url="https://www.researchgate.net/profile/Mengjia-Zhang/research"
            iconNode={<ResearchgateIcon />}
            title="ResearchGate"
          />
        </nav>
      </div>

      {/* nav bar popup after clicking the menu button in lg screen */}
      {isOpen && (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className={` z-30 min-w-[80vw] flex flex-col justify-between items-center 
      fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/80 rounded-lg backdrop-blur-md py-24`}
        >
          <nav className="flex flex-col items-center justify-center gap-4 pb-12">
            <MenuLink href="/" title="Home" mobile callback={handleClick} />
            <MenuLink
              href="/about"
              title="About"
              mobile
              callback={handleClick}
            />
            {/* <MenuLink href="/projects" title="Projects" className="mr-4" /> */}
          </nav>

          <nav className="flex items-center justify-between gap-4">
            <IconLink
              url="https://github.com/ShirleyZmj"
              iconNode={<GithubIcon />}
              title="Github"
              className="bg-light rounded-full"
            />
            <IconLink
              url="https://www.linkedin.com/in/zhang-mengjia/"
              iconNode={<LinkedInIcon />}
              title="LinkedIn"
            />
            <IconLink
              url="https://www.researchgate.net/profile/Mengjia-Zhang/research"
              iconNode={<ResearchgateIcon />}
              title="ResearchGate"
              className="bg-light rounded-sm"
            />
          </nav>
        </motion.div>
      )}

      <div className="absolute left-[50%] translate-x-[-50%] top-2 z-20">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
