import Image from "next/image";
import React from "react";

const Bio = () => {
  return (
    <main className="flex flex-col">
      <div className="flex">
        <Image
          alt="profile-pic"
          width={160}
          height={160}
          src={"/avatar.jpg"}
          className="rounded-xl"
        ></Image>
        <div className="ml-4 flex self-center">
          <span className="mr-2 text-4xl">👋🏼 </span>
          <span className="self-center text-4xl font-semibold italic">
            Hey, there!
          </span>
        </div>
      </div>
      <div className="my-6 text-justify">
        <p className="mb-3">
          Officia dolor ipsum et reprehenderit consectetur culpa adipisicing
          tempor amet anim deserunt est aliqua sint ex. Consectetur incididunt
          est labore mollit sint minim occaecat aliquip veniam ullamco sint.
          Anim amet dolore reprehenderit aliquip esse incididunt irure nisi
          adipisicing consequat non qui et eiusmod veniam. Aliqua quis enim sit
          ex Lorem ea. Sunt ut nostrud sit irure dolore ad exercitation occaecat
          aute eu et consectetur. Ullamco sunt nisi et incididunt Lorem irure ea
          irure dolor elit.
        </p>
        <p>
          Excepteur aute adipisicing est proident id eu aliqua culpa in do
          eiusmod tempor voluptate voluptate. Aliqua in aliqua irure. Aliqua ut
          Lorem esse esse pariatur dolor proident sit cillum et id aute ut Lorem
          dolore. Proident Lorem et sint dolor proident. Ut occaecat dolore amet
          proident mollit commodo pariatur.
        </p>
      </div>
    </main>
  );
};

export default Bio;
