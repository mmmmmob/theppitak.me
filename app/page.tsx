"use client";
import dynamic from "next/dynamic";
import Link from "next/link";

const CurrentTime = dynamic(() => import("./components/home/CurrentTime"), {
  ssr: false,
});

import Typewriting from "./components/home/Typewriting";

export default function Home() {
  return (
    <div className="mx-16 flex h-[calc(100dvh-56px)] items-center">
      <div className="flex flex-col">
        <div>
          <p className="text-thin text-2xl dark:text-white">
            Always at your service for
          </p>
        </div>
        <div className="h-1">
          <Typewriting />
          <CurrentTime />
        </div>
      </div>
    </div>
  );
}
