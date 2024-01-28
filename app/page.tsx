"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import NowPlaying from "./components/home/NowPlaying";

const CurrentTime = dynamic(() => import("./components/home/CurrentTime"), {
  ssr: false,
});

import Typewriting from "./components/home/Typewriting";

export default function Home() {
  return (
    <div className="flex h-[calc(100dvh-56px)] flex-col items-center justify-between py-4">
      <CurrentTime />
      <div className="flex flex-col flex-wrap items-center">
        <p className="text-thin text-center text-2xl dark:text-white">
          Always at your service for
        </p>
        <div className="h-16 w-fit">
          <Typewriting />
        </div>
      </div>
      <NowPlaying />
    </div>
  );
}
