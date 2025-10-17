import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import CollapsingSection from "@/helpers/CollapsingSection";
import { ExternalLink } from "@/helpers/ExternalLink";

export const metadata: Metadata = {
  title: "Extracurriculars | Sam Wolfson",
};

export default function Extracurriculars() {
  return (
    <div>
      <h1>Extracurriculars</h1>
      <p>
        What I like to do in my spare time, when I&apos;m not working on{" "}
        <Link href="/projects">projects</Link>.
      </p>
      <CollapsingSection title="Capitol Hill Tool Library">
        <p>
          Shortly after moving to Capitol Hill, I started volunteering at the{" "}
          <ExternalLink href="https://sustainablecapitolhill.org/tool-library/">
            Capitol Hill Tool Library
          </ExternalLink>
          . We are a non-profit organization providing all sorts of useful items
          — from drills to lawnmowers to coolers! By providing shared resources
          for the community, we reduce the need for individual consumption and
          ensure greater access for those who either can&apos;t afford to buy
          their own tools, or don&apos;t have the space to store seldom-used
          items.
        </p>
        <p>
          We also offer a variety of free{" "}
          <ExternalLink href="https://sustainablecapitolhill.org/events/">
            classes
          </ExternalLink>{" "}
          taught by community members. I&apos;ve personally given workshops on
          3D printing and modeling in Fusion.
        </p>
      </CollapsingSection>
      <CollapsingSection title="Seattle Renters Commission">
        <p>
          I serve on this{" "}
          <ExternalLink href="https://www.seattle.gov/seattle-renters-commission">
            city board
          </ExternalLink>
          , which advises the Mayor, City Council, and other departments on
          issues affecting renters in Seattle. As someone who loves Seattle and
          wants to see it thrive, I hope to advocate for housing that is
          affordable, welcoming, and plentiful for everyone who wants to live
          here.
        </p>
      </CollapsingSection>
      <CollapsingSection title="Sourdough">
        <p>
          I studied abroad in Rome in autumn 2018, and got really into baking
          sourdough bread. I love the “magic” of the yeast in the starter
          creating gas bubbles in the gluten that allow the bread to rise and
          become soft and airy. The whole process is a crazy coincidence of
          trapping the byproducts of a couple microorganisms into a material
          that just so happens to have the right amount of elasticity to flex
          while still being strong enough not to break. If you&apos;re
          interested in more of my thoughts on sourdough, I wrote an{" "}
          <Link href="/sourdough"> entire page about it</Link>.
        </p>
      </CollapsingSection>
      <CollapsingSection title="Kombucha">
        <i>oh no, I&apos;m becoming a stereotype!</i>
        <p>
          I started brewing kombucha in early 2022 after getting a little bored
          of sourdough. My favorite flavor right now is lemon, ginger, and mixed
          berries. I also recently tried making{" "}
          <a href="https://brewbuch.com/how-to-make-hard-kombucha/">
            hard kombucha
          </a>
          , which actually worked pretty well!
        </p>
      </CollapsingSection>
      <CollapsingSection title="Running">
        <p>
          Ah, running. Does anyone <em>really</em> like to run? I started with
          cross-country in high school and have more-or-less kept up with it
          ever since, including with the{" "}
          <ExternalLink href="https://dawgs.run">
            Husky Running Club
          </ExternalLink>{" "}
          when I was in college. It&apos;s a good way to keep in shape without
          really needing the type of coordination that most sports require.
          I&apos;ve run in a few races:
        </p>

        <ul>
          <li>Dawg Dash (5k in 2016 and 2017, 10k in 2019)</li>
          <li>Mt. Si Relay (2016, 2017, 2019)</li>
          <li>Beat The Bridge (2019)</li>
        </ul>
        <p>
          I think that running is a great way to escape for a little while. I
          also run to explore new places. When I visit a city I like to find
          places to run and see if I can navigate my way around without using a
          map. This has had mixed results. I&apos;ve gotten (temporarily) lost
          both in Santa Clara and in Rome. In the former incident, I
          inadvertantly ran close to a half-marathon. I was pretty sore the next
          day.
        </p>
      </CollapsingSection>
      <CollapsingSection title="Music">
        <p>
          I&apos;ve been playing the guitar since middle school, though
          I&apos;ve only taken lessons sporadically. I like to jam with my
          friends, and occasionally we make{" "}
          <ExternalLink href="https://youtu.be/ZfStaEsxl7I">
            fun videos
          </ExternalLink>{" "}
          of us playing.
        </p>
      </CollapsingSection>
      <CollapsingSection title="Outdoors">
        <div className="grid-cols-3 gap-2 md:grid">
          <div className="col-span-2">
            <p>
              I like to hike, and have been on a number of backpacking trips. My{" "}
              <ExternalLink href="https://www.wta.org/@@backpacks/scrnm-wolfson">
                WTA
              </ExternalLink>{" "}
              page has a (non-exhaustive) list of places that I&apos;ve been.
              Some notable trips are:
            </p>

            <ul className="ml-4 list-disc">
              <li>Hidden Lake Lookout (2016, 2019, both overnight)</li>
              <li>Marmot Pass (2017, 2 nights)</li>
              <li>Spray Park Loop (2018, 3 nights)</li>
              <li>Camp Muir from Paradise (2019, day trip)</li>
              <li>Spider Gap Loop (2020, 4 nights)</li>
              <li>Seven Lakes Basin Loop (2021, 3 nights)</li>
              <li>Tour de Mont Blanc (2022, 11 nights, mostly in refuges)</li>
            </ul>
          </div>
          <Image
            className="mx-auto mt-4 w-full max-w-md rounded-md md:float-right"
            height={4032}
            width={3024}
            src="/fun.jpeg"
            alt="grimacing in the rain while backpacking"
          />
        </div>
      </CollapsingSection>
    </div>
  );
}
