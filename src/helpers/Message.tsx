import { ReactNode } from "react";

interface MessageProps {
  title?: string;
  children: ReactNode;
}

export function WarningMessage(props: MessageProps) {
  return (
    <div
      className={`my-2 rounded-lg border-4 border-amber-500 bg-amber-700 px-4 py-2 text-white shadow-md`}
    >
      {props.title && <h4 className="mb-2 font-bold">{props.title}</h4>}
      {props.children}
    </div>
  );
}

export function SuccessMessage(props: MessageProps) {
  return (
    <div
      className={`my-2 rounded-lg border-4 border-emerald-300 bg-emerald-600 px-4 py-2 text-white shadow-md`}
    >
      {props.title && <h4 className="mb-2 font-bold">{props.title}</h4>}
      {props.children}
    </div>
  );
}
