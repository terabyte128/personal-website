import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconMailbox,
  IconMapPin,
} from "@tabler/icons-react";
import { Metadata } from "next";

import { ExternalLink } from "@/helpers/ExternalLink";
import { TitleWithIcon } from "@/helpers/TitleWithIcon";

export const metadata: Metadata = {
  title: "Contact | Sam Wolfson",
};

export default function Contact() {
  return (
    <div>
      <TitleWithIcon title="Contact Me" icon={IconMail} />
      <p>If you&apos;d like to get in touch, find me at:</p>
      <div className="[&>div>] [&>div]:my-1 [&>div]:flex [&>div]:gap-2">
        <div>
          <IconMailbox />
          me[at]samwolfson.com
        </div>
        <div>
          <IconBrandGithub />
          <ExternalLink href="http://github.com/terabyte128/">
            terabyte128
          </ExternalLink>
        </div>
        <div>
          <IconBrandLinkedin />
          <span>
            <ExternalLink href="https://www.linkedin.com/in/sam-wolfson-91721b133/">
              LinkedIn
            </ExternalLink>{" "}
            <span className="text-xs">
              (I don&apos;t check this very often)
            </span>
          </span>
        </div>
        <div>
          <IconMapPin />
          <span>
            Seattle, WA{" "}
            <span className="text-xs">(do not come to my house)</span>
          </span>
        </div>
      </div>
    </div>
  );
}
