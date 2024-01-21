import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="absolute left-0 top-0 flex h-screen w-72 flex-col bg-black">
      <div className="flex h-32 flex-grow-0 border-b-2">
        <div className="mb-3 self-center pl-7">
          <Image src="/logo.png" alt="logo" width={90} height={90} />
        </div>
        <div className="h-fit self-center">
          <p className=" pl-5 text-2xl font-semibold text-white">
            Theppitak Maneepong
          </p>
        </div>
      </div>
      <div className="m-4 flex-1  text-4xl italic text-white">
        <div className="flex h-[calc(100dvh-240px)] flex-col justify-center">
          <div className="m-10">About</div>
          <div className="m-10">Projects</div>
          <div className="m-10">Blogs</div>
          <div className="m-10">Contact</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
