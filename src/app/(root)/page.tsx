import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ExternalLink } from "@/helpers/ExternalLink";

export const metadata: Metadata = {
  title: "Sam Wolfson",
};

export default function Home() {
  return (
    <div className="grid grid-cols-5 gap-8">
      <div className="col-span-3">
        <h1>Hello!</h1>
        <p>My name is Sam, welcome to my website.</p>
        <p>
          On this site, you may find interesting things about me, including an
          overview of my <Link href="/academics">academic work</Link>, food that
          I&apos;ve <Link href="/recipes">baked</Link>, and what I like to do{" "}
          <Link href="/extracurriculars">in my spare time</Link>.
        </p>
        <p>
          I live and work in Seattle. I&apos;m a software engineer at{" "}
          <ExternalLink
            href="https://www.extrahop.com"
            target="_blank"
            rel="noreferrer"
          >
            ExtraHop
          </ExternalLink>
          , designing and building cloud software and infrastructure.
        </p>
        <p>
          You may also view my{" "}
          <Link href="/resume" target="_blank" rel="noreferrer">
            resume
          </Link>
          , if you&apos;re into that sort of thing.
        </p>
      </div>
      <Image
        priority
        width={400}
        height={536}
        className="col-span-2 rounded-md"
        src="/sam.jpg"
        alt="Sam photo"
      />
    </div>
  );
}
