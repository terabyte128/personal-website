import { IconBlocks } from "@tabler/icons-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import CollapsingSection from "@/helpers/CollapsingSection";
import { ExternalLink } from "@/helpers/ExternalLink";
import { WarningMessage } from "@/helpers/Message";
import { TitleWithIcon } from "@/helpers/TitleWithIcon";

export const metadata: Metadata = {
  title: "Extracurriculars | Sam Wolfson",
};

export default function Extracurriculars() {
  return (
    <div>
      <TitleWithIcon title="Extracurriculars" icon={IconBlocks} />
      <p>What I like to do in my spare time.</p>
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
      <CollapsingSection title="Seattle Renters' Commission">
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
      <CollapsingSection title="Homebrew IoT">
        <p>
          I have a number of projects that involve building custom IoT devices.
        </p>
        <ul className="list-disc pl-4 [&>*]:py-1">
          <li>
            <ExternalLink href="https://github.com/terabyte128/wolfRemote">
              <b>wolfRemote</b>
            </ExternalLink>{" "}
            is a website for controlling an entertainment system (TV, speakers,
            AV receiver, etc.) and smart lights through a web interface. It
            talks with them through WiFi, for devices that support that, or
            infrared, for devices that don&apos;t. The web server runs on a
            Raspberry Pi, which is connected to an infrared LED.
          </li>
          <li>
            <b>laundrybot</b> (work in progress) aims to let you know when your
            laundry is finished. I use an ESP82666 microprocessor connected to a{" "}
            <ExternalLink href="https://www.electronics-tutorials.ws/transformer/current-transformer.html">
              current transformer
            </ExternalLink>{" "}
            that clamps around one of the wires inside both the washer and dryer
            and detects whether they are running. This turns out to be tricky
            because, at least with our laundry machines, the current draw is not
            consistent and can even be so low as to be undetectable when they
            are switching between cycles. I also ran into some
            still-yet-unsolved issues with interference on the current
            transformers, giving false positives as to when machines were
            drawing current. Hence, why this project is still a work in process.
          </li>
          <li>
            I use a lot of cheap, generic smart outlets that are based around
            the ESP82666 microprocessor. To avoid privacy issues and improve
            their compatibility, I take them apart, solder onto their serial
            pins and flash them with{" "}
            <ExternalLink href="https://tasmota.github.io/docs/">
              Tasmota
            </ExternalLink>
            , an open-source firmware. I link these devices up with{" "}
            <ExternalLink href="https://www.home-assistant.io/">
              Home Assistant
            </ExternalLink>{" "}
            to create automations and control them via Homekit.
          </li>
        </ul>
      </CollapsingSection>
      <CollapsingSection title="3D Modeling & Printing">
        <p>
          I used an{" "}
          <ExternalLink href="https://www.creality.com/products/creality-ender-3-s1-pro-fdm-3d-printer">
            Ender 3
          </ExternalLink>{" "}
          to print, then assembled myself, a{" "}
          <ExternalLink href="https://vorondesign.com/voron2.4">
            Voron 2.4
          </ExternalLink>
          , which was a lot of fun. But I got a little burnt out on the printer
          itself being a project, so now I mainly use a{" "}
          <ExternalLink href="https://us.store.bambulab.com/products/x1-carbon">
            Bambu X1C
          </ExternalLink>
          .
        </p>
        <p>
          Sometimes I post models on{" "}
          <ExternalLink href="https://www.printables.com/@wolfson_947268">
            Printables
          </ExternalLink>
          . I mainly work in{" "}
          <ExternalLink href="https://www.autodesk.com/products/fusion-360/personal">
            Fusion
          </ExternalLink>
          .
        </p>
      </CollapsingSection>
      <CollapsingSection title="Programming">
        <ul className="list-disc pl-4 [&>*]:py-1">
          <li>
            <ExternalLink href="https://github.com/terabyte128/pde2js">
              <strong>pde2js</strong>
            </ExternalLink>{" "}
            is a transpiler that converts code written in the{" "}
            <ExternalLink href="http://processing.org">Processing</ExternalLink>{" "}
            programming language to{" "}
            <ExternalLink href="https://p5js.org/">p5.js</ExternalLink>, the
            JavaScript equivalent. This is intended for use by new programmers
            who wrote cool art programs in Processing but don’t want to deal
            with the tedium of manually converting code to a different language.
            It’s been successfully used by{" "}
            <ExternalLink href="http://cs.uw.edu/120">CSE 120</ExternalLink>, a
            Computer Science Principles course at the UW (for which I’ve worked
            as a TA).
          </li>
          <li>
            <ExternalLink href="https://github.com/terabyte128/braintrust-bot-rails">
              <strong>BrainTrust Bot</strong>
            </ExternalLink>{" "}
            is a{" "}
            <ExternalLink href="https://telegram.org">Telegram</ExternalLink>{" "}
            bot that adds a bunch of fun features to your group chats. I had
            originally written this in Python, but as it grew beyond its
            original feature set, it was desperately in need of a revamp. So I
            re-wrote it using Ruby on Rails. I’m mainly proud of this project
            because I spent a lot of time writing tests to ensure that all the
            features worked properly.
          </li>
          <li>
            <ExternalLink href="https://github.com/terabyte128/aws-email-forwarder">
              <strong>aws-email-forwarder</strong>
            </ExternalLink>{" "}
            is a set of Terraform scripts and a tiny lambda function that will
            provision AWS resources so that you, armed with a domain name, can
            give out infinite disposable email addresess to unsavory websites.
            It will forward emails sent to any address at your chosen domain to
            your real address &mdash; no need to set anything up beforehand. If
            you decide you no longer want to receive emails from a certain
            company, just block emails sent to that specific address.
          </li>
          <li>
            I&apos;ve{" "}
            <ExternalLink href="https://github.com/terabyte128/Bookmark">
              created
            </ExternalLink>{" "}
            <ExternalLink href="https://github.com/terabyte128/PlayerStats">
              a
            </ExternalLink>{" "}
            <ExternalLink href="https://github.com/terabyte128/SpleefTime">
              variety
            </ExternalLink>{" "}
            <ExternalLink href="https://github.com/terabyte128/Zzzz">
              of
            </ExternalLink>{" "}
            <ExternalLink href="https://github.com/terabyte128/PanicButton">
              Minecraft
            </ExternalLink>{" "}
            <ExternalLink href="https://github.com/terabyte128/Timberwolf">
              plugins
            </ExternalLink>
            , though most of them were hastily written, are unmaintained at this
            point and may not play well with newer versions of the game. Use at
            your own risk :-)
          </li>
          <li>
            Maybe I&apos;m up to something new! If I am, it&apos;s probably on
            my{" "}
            <ExternalLink href="https://github.com/terabyte128/">
              GitHub
            </ExternalLink>{" "}
            page.
          </li>
        </ul>
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
      <CollapsingSection title="Nonsense">
        <p>
          I made a{" "}
          <ExternalLink href="https://t.me/addstickers/SamIsJustUnlucky">
            Telegram sticker pack
          </ExternalLink>{" "}
          of myself.
        </p>
      </CollapsingSection>
      <CollapsingSection title="Things I did in high school">
        <WarningMessage title="heads up!">
          These projects are <b>very old</b> and unmaintained. They&apos;re
          probably also poorly written and full of bugs. I do not recommend
          using them for anything that you care about (or really at all).
          They&apos;re mainly here for posterity. The descriptions I&apos;ve
          written about them mainly reflect how I felt at the time when I
          created them, and should not be taken as an endorsement by current me
          ;-)
        </WarningMessage>
        <h3>FRC Scout</h3>
        <p>
          For the FIRST robotics FRC competition, a large part of the
          competition is &ldquo;scouting&rdquo; teams to figure out how well
          they do in games, and how well they would compliment your team’s
          strengths if you were in an alliance together. My friend and I created
          a website, FRC Scout, to make scouting teams much simpler and easier.
          It tracked data entered by various team members on various teams, and
          aggregated their data in a large database to create averages. These
          averages tracked the strengths and weaknesses of different teams,
          which made it easier for other teams to see whether or not they should
          select a team for their alliance. It was super cool, and from it I
          learned a lot about web development. You can find the code{" "}
          <ExternalLink href="https://github.com/FIRST-4030/frc-scout">
            on GitHub
          </ExternalLink>{" "}
          if you’re so inclined. We used Python, with a framework called{" "}
          <ExternalLink href="https://www.djangoproject.com">
            Django
          </ExternalLink>
          .
        </p>
        <h3>TaskRabbit</h3>
        <p>
          My high school FRC robotics team was not known for its stellar project
          management abilities. So at the beginning of the 2015 robotics season,
          I decided to write a website to help us do so more easily. And thus,{" "}
          <em>TaskRabbit</em> was born. My friend and I spent many hours
          designing and writing TaskRabbit. The idea was that tasks would be
          entered into the website, by a team manager, and then when a team
          member came in for the day, they could decide which tasks they felt
          comfortable doing, and they would “claim” them. As the team member
          worked on the task, they could leave notes on it, and then mark it as
          completed once they finished. Or, if they didn’t have the chance to
          finish the task completely, they could pass it to someone else and
          optionally notify them.
        </p>
        <p>
          Eventually, TaskRabbit grew to also encompass a time clock, for
          logging hours, and a calendar with important dates and deadlines.
          Unfortunately, our team was never really organized enough to actually
          find people willing to figure out what needed to be done, and enter
          said tasks into TaskRabbit. So its true power was never realized.
          Nonetheless, it was a fun and complex project. If you’re interested in
          checking it out, the source code for the entire robotics website
          (including TaskRabbit) is available{" "}
          <ExternalLink href="https://github.com/terabyte128/ingrahamrobotics.org">
            on GitHub
          </ExternalLink>
          . It’s written in Python with Django as a framework.
        </p>
        <h3>Sloth Pages</h3>
        <p>
          For my IB Computer Science dossier in junior year of high school, I
          approached my biology teacher to see if she would be interested in
          using a website to disseminate assignment and class information to her
          students, since the system that the school used at the time was slow,
          clunky, and unintuitive. She was interested, so I wrote the initial
          website using PHP and MySQL. Admittedly, it wasn’t written very well,
          but it worked – you can look at the source code{" "}
          <ExternalLink href="https://github.com/terabyte128/transfusion">
            here
          </ExternalLink>{" "}
          if you’re interested. The original is called <em>transfusion</em>, a
          jab to the Fusion Pages, the system used by Seattle Schools.
        </p>
        <p>
          However, I had some free time my senior year, so I decided to rewrite
          the website using Django and Python, since I wanted a project and
          found Python to be a much better language. My teacher and I decided to
          call this new project <em>Sloth Pages</em>. Sloth Pages was built upon
          the base of transfusion, but I designed it to be much clearer and
          easier to use. Furthermore, it was more robust and mobile-friendly,
          and significantly less buggy. The source code is{" "}
          <ExternalLink href="https://github.com/terabyte128/sloth-pages">
            here
          </ExternalLink>
          .
        </p>
        <h3>Planda</h3>
        <p>
          Planda is a simple homework management app that I wrote as an excuse
          to learn about jQuery Mobile and Django. It allows students to create
          courses, and assignments for each course. It generates lists of
          assignments organized by course and due date, and marks overdue
          assignments in red to give them special weight. I used it extensively
          throughout my senior year of high school, as did some of my friends.
          Planda was designed to be very simple but satisfying to use – for
          instance, checking off an assignment creates an animation where it
          slides up and away.
        </p>
        <h3>Electric Go-Kart</h3>
        <p>
          In 6th grade, I bought a go-kart with the intention of converting it
          to electric. Through its many incarnations, it taught me lots of
          important lessons about both mechanical and electrical systems. You
          can learn much, much more about this project where I&apos;ve archived
          it{" "}
          <ExternalLink
            href="http://samwolfson.com/myelectricgokart-archive/index.html"
            target="_blank"
          >
            here
          </ExternalLink>
          .
        </p>
      </CollapsingSection>
    </div>
  );
}
