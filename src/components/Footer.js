import React from "react";
import Layout from "./Layout";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
      <Layout className="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center">
          Build with
          <span className="text-primary text-2xl px-1">&hearts;</span>
          by&nbsp;<Link href="/">Mengjia Zhang</Link>
        </div>
        <div>
          Learn from&nbsp;
          <Link
            className="underline underline-offset-2"
            href="https://devdreaming.com"
            target={"_blank"}
          >
            CodeBucks
          </Link>
        </div>
        {/* <Link href="/">Say hello</Link> */}
      </Layout>
    </footer>
  );
}
