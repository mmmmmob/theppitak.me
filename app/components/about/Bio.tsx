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
        <div className="ml-4 flex flex-col self-center">
          <div className="flex">
            <span className="mr-2 self-center text-4xl">👋🏼</span>
            <span className="self-center text-5xl font-semibold italic">
              Hey, there!
            </span>
          </div>
          <span className="mt-2 text-xl">
            I'm Mob. A newcomer at the crossroad of tech and creativity.
          </span>
        </div>
      </div>
      <div className="my-6 text-justify text-lg">
        <p className="indent-10">
          Former creative copywriter and project manager, now on my way to
          becoming a developer. On the right side of my brain lies the love of
          fun and goofy ways to communicate things, while on the left is the
          love to find ways to manage unmanageable problems into the perfect
          march.
        </p>
      </div>
    </main>
  );
};

export default Bio;
