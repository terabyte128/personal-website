import { IconBlocks } from "@tabler/icons-react";
import { Metadata } from "next";

import CollapsingSection from "@/helpers/CollapsingSection";
import { ExternalLink } from "@/helpers/ExternalLink";
import { Message } from "@/helpers/Message";
import { TitleWithIcon } from "@/helpers/TitleWithIcon";

export const metadata: Metadata = {
  title: "Projects | Sam Wolfson",
};

export default function Projects() {
  return (
    <div>
      <TitleWithIcon title="Projects" icon={IconBlocks} />
      <p>
        A collection of things I&apos;ve been up to, loosely categorized into
        sections. Click on one!
      </p>
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
      <CollapsingSection title="Other programming">
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
        <Message title="heads up!">
          These projects are <b>very old</b> and unmaintained. They&apos;re
          probably also poorly written and full of bugs. I do not recommend
          using them for anything that you care about (or really at all).
          They&apos;re mainly here for posterity. The descriptions I&apos;ve
          written about them mainly reflect how I felt at the time when I
          created them, and should not be taken as an endorsement by current me
          ;-)
        </Message>
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
