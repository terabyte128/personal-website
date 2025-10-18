import { Metadata } from "next";
import Image from "next/image";

import { ExternalLink } from "@/helpers/ExternalLink";
import { WarningMessage } from "@/helpers/Message";

import { Sections } from "./sections";

export const metadata: Metadata = {
  title: "Sourdough | Sam Wolfson",
};

export default function Sourdough() {
  return (
    <>
      <h1>My Sourdough Process</h1>
      <Image
        className="my-2 w-full max-w-lg rounded-md"
        src="/goodbread.jpeg"
        alt="good bread"
        width={4032}
        height={3024}
      />
      <p>Multiple people have asked me for my baking process, so here it is!</p>
      <WarningMessage>
        A lot of this is inspired by Patrick Ryan&apos;s{" "}
        <ExternalLink href="https://ilovecooking.ie/features/sourdough-bread-masterclass-with-patrick-ryan/">
          sourdough masterclass
        </ExternalLink>
        . (There&apos;s also a great video.)
      </WarningMessage>
      <Sections />
    </>
  );
}
