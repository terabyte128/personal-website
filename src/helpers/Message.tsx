import { ReactNode } from "react";

interface MessageProps {
  title?: string;
  children: ReactNode;
}

export function Message(props: MessageProps) {
  return (
    <div className="my-2 rounded-lg border-4 border-amber-500 bg-amber-700 px-4 py-2 text-white shadow-md">
      {props.title && <h4 className="mb-2 font-bold">{props.title}</h4>}
      {props.children}
    </div>
  );
}
