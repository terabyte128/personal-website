"use client";
import { ReactNode, useState } from "react";

interface CollapsingSectionProps {
  title: string;
  children: ReactNode;
}

export default function CollapsingSection(props: CollapsingSectionProps) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div className="my-4 border-b-2 border-b-indigo-300 pb-2">
      <div>
        <h2 className="clickable" onClick={() => setIsCollapsed((c) => !c)}>
          {props.title}
          {isCollapsed ? (
            <i className="arrow up" />
          ) : (
            <i className="arrow down" />
          )}
        </h2>
        <div
          style={{
            display: isCollapsed ? "none" : "block",
          }}
        >
          {props.children}
        </div>
      </div>
    </div>
  );
}
