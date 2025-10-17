"use client";
import "./resume.css";

import { IconDownload } from "@tabler/icons-react";

export default function Resume() {
  return (
    <div>
      <div className="fixed top-0 right-0 left-0 bg-violet-300 px-2 py-2 shadow-md [@media_print]:hidden">
        <div className="mx-auto flex h-full w-[8.5in] items-center">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer rounded-2xl bg-violet-500 p-2 text-white shadow-md active:bg-violet-700"
          >
            <div className="flex">
              <IconDownload className="mr-1" />
              download
            </div>
          </a>
        </div>
      </div>
      <div className="mx-auto h-[11in] w-[8.5in] bg-white p-[0.25in] [@media_not_print]:mt-18 [@media_not_print]:mb-4 [@media_not_print]:shadow-md">
        <div className="flex justify-between">
          <div className="text-4xl font-bold">Sam Wolfson</div>
          <div className="flex flex-col items-end">
            <span>&#123;me@&#125;samwolfson.com</span>
            <span>github.com/terabyte128</span>
          </div>
        </div>
        <div>
          <div className="text-xl">Education</div>
          <div className="font-bold">
            University of Washington (Seattle, WA)
          </div>
          <ul className="list-disc pl-4 text-sm">
            <li>
              <div className="flex justify-between">
                <span>Masters of Science, Computer Science</span>
                <span>August 2020</span>
              </div>
            </li>
            <li>
              <div className="flex justify-between">
                <span>
                  Bachelors of Science, Computer Science (Magna Cum Laude)
                </span>
                <span>March 2019</span>
              </div>
            </li>
          </ul>
        </div>
        <hr className="my-2" />
        <div>
          <div className="text-xl">Skills</div>
          <ul className="text-sm">
            <li>
              <b>Languages</b>: Python, JavaScript/TypeScript, HTML/CSS, C,
              Golang, Terraform (AWS), Unix Shell, Swift (SwiftUI)
            </li>
            <li>
              <b>Frameworks</b>: Flask, FastAPI, NextJS, React
            </li>
            <li>
              <b>Tools</b>: Docker, Git, Kubernetes (Istio, Helm), SQL
              (PostgreSQL)
            </li>
            <li>
              <b>Platforms</b>: AWS, GCP, GitLab CI/CD
            </li>
            <li>
              <b>Grab Bag</b>: University teaching & course development, 3D
              design & printing, basic embedded systems
            </li>
          </ul>
        </div>
        <hr className="my-2" />
        <div className="text-xl">Work Experience</div>
        <div className="flex justify-between font-bold">
          <span>Software Engineer, ExtraHop Networks</span>
          <span>2020 &mdash; present</span>
        </div>
        <ul className="list-disc pl-4 text-sm">
          <li>
            Developed and supported software for hundreds of enterprise
            customers on RevealX 360, our cloud service offering.
          </li>
          <li>
            Worked throughout the entire software development lifecycle,
            including secure system design, development, deployment, and
            production support.
          </li>
          <li>Managed a Kubernetes cluster with the Istio service mesh.</li>
          <li>
            Worked extensively with AWS services to develop secure, resilient
            systems.
          </li>
          <li>
            Wrote Terraform infrastructure-as-code to provision resources
            programmatically.
          </li>
          <li>Developed full-stack, widely-used internal tools.</li>
        </ul>
        <div className="mt-1 flex justify-between font-bold">
          <span>Quarterly Instructor, University of Washington</span>
          <span>2013 &mdash; 2023</span>
        </div>
        <ul className="list-disc pl-4 text-sm">
          <li>
            Prepared and delivered three lectures a week for quarter-long
            courses (The Hardware/Software Interface, Computer Science
            Principles).
          </li>
          <li>Managed staff of ten TAs and classes of up to 150 students.</li>
          <li>
            Led weekly meetings to discuss goals & student experiences, manage
            grading load, and plan for the week.
          </li>
          <li>
            Developed new grading infrastructure for programming assignments
            using Docker images on the Gradescope platform.
          </li>
          <li>
            Worked with a graduate student to incorporate socio-technical
            content into courses with the goal of understanding the broader
            context around computer science and technology.
          </li>
        </ul>
        <div className="mt-1 flex justify-between font-bold">
          <span>Software Engineering Intern, Arista Networks</span>
          <span>summer 2018</span>
        </div>
        <ul className="list-disc pl-4 text-sm">
          <li>
            Implemented code to automatically power off servers in our test
            environment when they are not actively in use, leading to a 9%
            decrease in overall energy usage by test servers.
          </li>
          <li>
            Designed a strategy to move management code for test servers out of
            local user workspaces and into containerized microservices, using
            Docker to run the services and gRPC to facilitate communication
            between the clients and the services.
          </li>
        </ul>
        <hr className="my-2" />
        <div className="text-xl">Projects & Volunteering</div>
        <div className="flex justify-between font-bold">
          <span>Non-Profit Board Member, Capitol Hill Tool Library</span>
          <span>2023 &mdash; present</span>
        </div>
        <ul className="list-disc pl-4 text-sm">
          <li>
            Led semi-weekly volunteering shifts as a tool librarian, checking in
            and out tools and providing project advice.
          </li>
          <li>
            Implemented a new wiki to document volunteer guidelines and tool
            usage directions.
          </li>
          <li>
            Coordinated the installation of a new front sign, including
            permitting, installation, and electrical work.
          </li>
          <li>
            Led an effort to research and purchase a new 3D printer, and taught
            classes demonstrating its usage.
          </li>
        </ul>
      </div>
    </div>
  );
}
