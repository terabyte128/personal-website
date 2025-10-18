"use client";

import Head from "next/head";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links: {
  title?: string;
  path: string;
}[] = [
  { path: "academics" },
  { path: "extracurriculars" },
  { path: "recipes" },
  { path: "etc" },
  { path: "contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const cleanedPath = usePathname().slice(1);

  return (
    <>
      <Head key={cleanedPath}>
        <title>{cleanedPath}</title>
      </Head>
      <div className="fixed top-0 right-0 left-0 z-10 bg-linear-to-b from-violet-900 to-violet-800 text-stone-200 shadow-lg text-shadow-lg">
        <div className="mx-auto max-w-4xl px-4 py-2 md:px-0">
          <div className="flex h-12 flex-row items-center justify-between">
            <Link href="/" className="text-xl font-bold">
              Sam Wolfson
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-md p-2 focus:ring-2 focus:ring-violet-500 focus:outline-none focus:ring-inset md:hidden"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            <div className="hidden justify-between text-xl md:flex">
              {links.map(({ title, path }) => (
                <Link
                  className={`not-last:px-4 ${cleanedPath === path ? "font-bold" : ""}`}
                  key={path}
                  href={path}
                >
                  {title || path}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div
          className={`${isOpen ? "block" : "hidden"} md:hidden`}
          id="mobile-menu"
        >
          <div className="flex flex-col space-y-1 bg-violet-800 p-4">
            {links.map(({ title, path }) => (
              <Link
                key={path}
                href={path}
                className={`rounded-md px-3 py-2 text-lg hover:bg-violet-700 ${cleanedPath === path ? "font-bold" : ""}`}
                onClick={() => setIsOpen(false)}
              >
                {title || path}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
