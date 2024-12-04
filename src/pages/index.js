import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/profile-developer.png";
import AnimatedText from "@/components/AnimatedText";
import AnimatedParagraph from "@/components/AnimatedParagraph";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mengjia Zhang | Home Page</title>
        <meta
          name="description"
          content="Mengjia Zhang's Home Page. Web Developer | Frontend Developer"
        />
      </Head>
      <main className="flex items-center text-dark w-full">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <Image
                src={profilePic}
                alt="Mengjia Zhang"
                className="w-full h-auto"
              ></Image>
            </div>
            <div className="w-1/2">
              <AnimatedText
                className="!text-6xl !text-left"
                text="Bringing Concepts to Life with Innovation and Code."
              />
              <AnimatedParagraph
                className="my-4 text-base"
                text="
                I am a front-end developer with over 7 years of experience in building user-centric, scalable applications. Proficient in React and Vue, I have also conducted research in Virtual Reality and 3D data visualization. Driven by a passion for innovation, I am eager to explore cutting-edge front-end technologies to continually enhance my skill set. Currently, I am focused on expanding my expertise to become a full-stack developer."
              />
              <div className="flex items-center self-start mt-2">
                <Link
                  href="/ZhangMengjia_Resume.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg *
                font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
                  download={true}
                >
                  Resume
                  <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href="mailto:hi.zhangmengjia@gmail.com"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark underline"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
