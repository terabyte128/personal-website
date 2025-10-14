import { ExternalLink } from "@/helpers/ExternalLink";
import { TitleWithIcon } from "@/helpers/TitleWithIcon";
import { IconSchool } from "@tabler/icons-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academics | Sam Wolfson",
};

export default function Academics() {
  return (
    <div>
      <TitleWithIcon title="Academics" icon={IconSchool} />
      <p>
        I graduated with a master’s degree in{" "}
        <ExternalLink href="https://www.cs.washington.edu">
          computer science
        </ExternalLink>{" "}
        at the{" "}
        <ExternalLink href="http://www.washington.edu">
          University of Washington
        </ExternalLink>{" "}
        in summer 2020.
      </p>
      <h2>Teaching</h2>
      <p>
        While at UW and for two years after gradauting, I worked as a TA for
        these courses:
      </p>
      <ul className="list-inside list-disc py-2">
        <li>
          <ExternalLink href="https://courses.cs.washington.edu/courses/cse351/17au/">
            The Hardware/Software Interface, Autumn 2017
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://courses.cs.washington.edu/courses/cse120/18wi/">
            Computer Science Principles, Winter 2018
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://courses.cs.washington.edu/courses/cse351/18sp/">
            The Hardware/Software Interface, Spring 2018
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://courses.cs.washington.edu/courses/cse120/19wi/">
            Computer Science Principles, Winter 2019
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://courses.cs.washington.edu/courses/cse351/19sp/">
            The Hardware/Software Interface, Spring 2019
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://courses.cs.washington.edu/courses/cse401/19au/">
            Introduction to Compiler Construction, Autumn 2019
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://courses.cs.washington.edu/courses/cse484/20sp">
            Computer Security, Spring 2020 (online due to COVID)
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://courses.cs.washington.edu/courses/cse351/20su/">
            The Hardware/Software Interface, Summer 2020 (online due to COVID)
          </ExternalLink>
        </li>
      </ul>
      <p> and was the instructor of record for these courses:</p>
      <ul className="list-inside list-disc py-2">
        <li>
          <ExternalLink href="https://courses.cs.washington.edu/courses/cse351/19su/">
            The Hardware/Software Interface, Summer 2019
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://courses.cs.washington.edu/courses/cse120/20wi/">
            Computer Science Principles, Winter 2020 (final week online due to
            COVID)
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://courses.cs.washington.edu/courses/cse351/22wi/">
            The Hardware/Software Interface, Winter 2022 (first 4/10 weeks
            online due to COVID)
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://courses.cs.washington.edu/courses/cse351/23wi/">
            The Hardware/Software Interface, Winter 2023
          </ExternalLink>
        </li>
      </ul>
      <p>
        I was mentored by{" "}
        <ExternalLink href="https://homes.cs.washington.edu/~jhsia/">
          Justin Hsia
        </ExternalLink>
        .
      </p>
      <h2>Research</h2>
      <h3>Security & Privacy</h3>
      <p>
        As a master&apos;s student, I worked with{" "}
        <ExternalLink href="https://www.franziroesner.com">
          Franzi Roesner
        </ExternalLink>{" "}
        at the{" "}
        <ExternalLink href="https://seclab.cs.washington.edu/research/">
          Security and Privacy Research Lab
        </ExternalLink>{" "}
        to design a Chrome extension that tracks a study participant&apos;s
        interactions with posts on social media, in an effort to learn more
        about disinformation and how it spreads.
      </p>
      <p>
        Separately, as part of a security captone course, my group designed and
        implemented an end-to-end encrypted chat app called Cryptic. We deployed
        the finished product on the Internet. Additionally as part of this
        course another group performed a security review of our application, and
        we performed one on theirs.
      </p>
      <h3>Computer Science Principles</h3>
      <p>
        One of my goals when teaching CSE 120 in Winter 2020 was to help
        students without previous programming experience feel more confident in
        understanding and talking about computing concepts. To that end, I made
        substantial changes to the course, incorporating lower-stakes quizzes
        (as compared to exams) with new question types, and presentation
        components. I surveyed students about their experiences in the course,
        compared their grades to past offerings, and wrote an experience report.
      </p>
      <p>
        Unfortunately, due to COVID, students were unable to present their
        capstone projects to their peers &mdash; which I had intended as a way
        for them to demonstrate both their learned technical and presentation
        skills. Working with students who did not originally intend to do
        computer science, and helping them to improve their technical skills in
        an approachable manner, is an area that I am interested in working in
        more.
      </p>
      <h3>Computational Biology</h3>
      <p>
        As part of a captone course, my group worked on a way to analyze and
        correct for mapping bias in allele-specific expression when performing
        RNA sequencing. The bias correction resulted in an increased R-squared
        value between reference and alternative allele counts on the vast
        majority of the genes on which we ran it, suggesting a reduction in
        bias.
      </p>
    </div>
  );
}
