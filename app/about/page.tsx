import React from "react";
import Bio from "../components/about/Bio";
import Stack from "../components/about/Stack";
import WorkExp from "../components/about/WorkExp";

export default function About() {
  return (
    <main className="container mx-auto flex h-screen flex-col justify-center overflow-x-scroll p-16">
      <div>
        <Bio />
        <Stack />
        <WorkExp />
      </div>
    </main>
  );
}
