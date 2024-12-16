import AnimatedParagraph from "@/components/AnimatedParagraph";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";
import profilePic from "../../public/images/profile/profile-developer2.png";
import Image from "next/image";
import AnimatedNumbers from "@/components/AnimatedNumbers";
import AnimatedNumber from "@/components/AnimatedNumber";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

const Statistics = ({ value, showPlus = true, title }) => {
  return (
    <div className="flex flex-col items-end justify-between">
      <div className="text-7xl font-bold">
        <AnimatedNumbers value={value} />
        <span>{showPlus ? "+" : ""}</span>
      </div>
      <h2 className="text-xl font-medium capitalize">{title}</h2>
    </div>
  );
};

function about() {
  return (
    <>
      <Head>
        <title>Mengjia Zhang | About Page</title>
        <meta
          name="description"
          content="Working Experience and Educational Experience"
        />
      </Head>
      <main className="min-h-screen">
        <Layout>
          <AnimatedText
            className="text-7xl pb-6"
            text="A brighter chapter is coming."
          />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <AnimatedParagraph text="I am a front-end developer with 7+ years of experience building user-focused, scalable web applications using React and Vue. I have also researched innovative technologies like Virtual Reality and 3D data visualization, which enhance my technical versatility." />
              <AnimatedParagraph text="I developed a customizable Video KYC system and a revenue dashboard for financial data analysis using React, TypeScript, and AntV-G2. Overcoming challenges like limited APIs, I delivered dynamic workflows and custom components, showcasing adaptability and problem-solving skills." />
              <AnimatedParagraph text="I am committed to growing into a full-stack developer while staying at the forefront of front-end innovation. Passionate about continuous learning, I aim to build scalable solutions and improve team efficiency through technical excellence." />
            </div>
            <div className="col-span-3 h-max py-2">
              <Image
                src={profilePic}
                alt="MengjiaZhang"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, 
                (max-width: 1200px) 50vw,
                33vw"
              ></Image>
            </div>
            <div className="col-span-2 flex flex-col justify-around">
              <Statistics value={3} showPlus={false} title="served companies" />
              <Statistics value={7} title="years of experience" />
              <Statistics value={20} title="Projects Completed" />
            </div>
          </div>
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
}

export default about;
