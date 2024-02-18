import React from "react";
import Bio from "../components/about/Bio";

export default function About() {
  return (
    <div className="container mx-auto flex h-full flex-col justify-center self-center">
      <div>
        <Bio />
      </div>
    </div>
  );
}
