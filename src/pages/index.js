import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/profile-developer.png";
import AnimatedText from "@/components/AnimatedText";
import AnimatedParagraph from "@/components/AnimatedParagraph";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import TransitionEffect from "@/components/TransitionEffect";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <>
      {/* <Head>
        <title>Mengjia Zhang | Home Page</title>
        <meta
          name="description"
          content="Mengjia Zhang's Home Page. Web Developer | Frontend Developer"
        />
        <meta
          name="keywords"
          content="Mengjia Zhang, Mengjia, Frontend, Frontend Developer, Web Developer, Portfolio Website"
        />
        <meta property="og:title" content="Mengjia Zhang's Website" />
        <meta
          property="og:description"
          content="This is Mengjia Zhang's Home Page. Welcome!"
        />
        <meta
          property="og:image"
          content="/images/profile/profile-developer.png"
        />
      </Head> */}
      <NextSeo
        title="Mengjia Zhang - Senior Web Developer | Home Page"
        description="Hi, I am a Senior Web Developer with 7+ years. Holding both a Bachelor's and Master's degree in Software Engineering. Currently based in Singapore."
        canonical="https://zhangmengjia.vercel.app/"
        openGraph={{
          type: "website",
          url: "https://zhangmengjia.vercel.app/",
          title: "Mengjia Zhang - Senior Web Developer | Home Page",
          description:
            "Hi, I am a Senior Web Developer with 7+ years. Holding both a Bachelor's and Master's degree in Software Engineering. Currently based in Singapore.",
          images: {
            url: "/images/profile/profile-developer.png",
            width: 500,
            height: 500,
            alt: "Developer Comic Profile",
          },
          site_name: "Mengjia Zhang's Website",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
      />
      <TransitionEffect />
      <main className="flex items-center w-full min-h-screen text-dark">
        <Layout className="sm:!pt-8 md:!pt-16 pt-0">
          <div className="flex items-center justify-between w-full md:flex-col md:gap-6">
            <div className="w-1/2 lg:hidden md:!inline-block md:w-full">
              <Image
                src={profilePic}
                alt="Mengjia Zhang"
                className="w-full h-auto"
                priority
                size="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw, 50vw"
              ></Image>
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                className="text-6xl text-left 2xl:text-7xl xl:text-4xl lg:text-center lg:text-6xl md:text-5xl sm:text-3xl xs:text-3xl"
                text="Hi! I'm Mengjia Zhang. (●ᴗ●)"
              />
              <AnimatedParagraph
                className="my-4 text-base md:text-sm sm:text-xs sm:my-1"
                text="I am a front-end developer with over 7 years of experience in building user-centric, scalable applications. Proficient in React and Vue, I have also conducted research in Virtual Reality and 3D data visualization. Driven by a passion for innovation, I am eager to explore cutting-edge front-end technologies to continually enhance my skill set. Currently, I am focused on expanding my expertise to become a full-stack developer."
              />
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/ZhangMengjia_Resume.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg *
                font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark
                md:p-2 md:px-4 md:text-base"
                  download={true}
                >
                  Resume
                  <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href="mailto:hi.zhangmengjia@gmail.com"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark underline md:text-base"
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
