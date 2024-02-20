import React from "react";
import Bio from "../components/about/Bio";
import Stack from "../components/about/Stack";
import WorkExp from "../components/about/WorkExp";

export default function About() {
  return (
    <div className="container mx-auto my-auto flex flex-col justify-center overflow-x-scroll p-16">
      <div>
        <Bio />
        <Stack />
        <WorkExp />
      </div>
    </div>
  );
}
