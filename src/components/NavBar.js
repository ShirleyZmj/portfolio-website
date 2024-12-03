"use client";

import Link from "next/link";
import React from "react";
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

const MenuLink = ({ href, title, className }) => {
  const router = useRouter();
  const isActive = router.asPath === href;
  console.log(router.asPath, href);
  return (
    <Link
      href={href}
      className={`${className} relative text-dark group hover:text-fx ${
        isActive ? "text-fx" : "text-dark"
      } transition-colors ease duration-300`}
    >
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5
          group-hover:w-full group-hover:bg-fx transition-all ease duration-300
          ${isActive ? "w-full bg-fx" : "w-0 bg-dark"}`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
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
      <div className="absolute left-[50%] translate-x-[-50%] top-2">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
