import { HTMLProps } from "react";

export const ExternalLink = (props: HTMLProps<HTMLAnchorElement>) => (
  <a {...props} target="_blank" rel="noreferrer">
    {props.children}
  </a>
);
