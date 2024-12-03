import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/profile-developer.png";
import AnnimatedText from "@/components/AnnimatedText";
import AnnimatedParagraph from "@/components/AnnimatedParagraph";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome</title>
        <meta name="description" content="Mengjia's Page" />
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
              <AnnimatedText
                className="!text-6xl !text-left"
                text="Bringing Concepts to Life with Innovation and Code."
              />
              <AnnimatedParagraph
                className="my-4 text-base"
                text="
                I'm a front-end developer with 7+ years of experience
                creating user-focused, scalable applications. Proficient in
                React, Vue, and advanced technologies like Virtual Reality and
                3D data visualization. I'm also eager to learn more about
                cutting-edge front-end technologies to continuously improve my
                skills. Currently, I'm working toward becoming a full-stack
                developer."
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
