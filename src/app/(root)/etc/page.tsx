import { IconArrowsRandom } from "@tabler/icons-react";
import { Metadata } from "next";

import { ExternalLink } from "@/helpers/ExternalLink";
import { TitleWithIcon } from "@/helpers/TitleWithIcon";

export const metadata: Metadata = {
  title: "Etc | Sam Wolfson",
};

export default function Etc() {
  return (
    <div>
      <TitleWithIcon title="Etc" icon={IconArrowsRandom} />

      <p>Other things that don&apos;t quite fit elsewhere.</p>
      <ul className="list-disc pl-4">
        <li>
          <ExternalLink href="https://fixthel8.com/">Fix The L8</ExternalLink>:
          I live very close to the 8 bus, and am constantly frustrated that such
          a convenient and popular route is always mired in traffic. Tell your
          councilmembers that this route and its riders deserve better!
        </li>
      </ul>
    </div>
  );
}
