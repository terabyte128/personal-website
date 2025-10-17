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
        <p>Welcome to my website.</p>
        <p>
          In summer 2020, I graduated with a master&apos;s degree in{" "}
          <ExternalLink
            href="https://www.cs.washington.edu"
            target="_blank"
            rel="noreferrer"
          >
            computer science
          </ExternalLink>{" "}
          at the{" "}
          <ExternalLink
            href="http://www.washington.edu"
            target="_blank"
            rel="noreferrer"
          >
            University of Washington
          </ExternalLink>
          .
        </p>
        <p>
          I currently live and work in Seattle. I&apos;m a software engineer at{" "}
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
          On this site, you may find interesting things about me, an overview of
          my <Link href="/academics">academic interests</Link>, my various{" "}
          <Link href="/projects">projects</Link>, and what I like to do{" "}
          <Link href="/hobbies">in my spare time</Link>.
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
        width={1504}
        height={2016}
        className="col-span-2 rounded-md"
        src="/sam.jpg"
        alt="Sam photo"
      />
    </div>
  );
}
