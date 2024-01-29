import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="absolute left-0 top-0 flex h-screen w-72 flex-col bg-black">
      <Link className="flex h-32 flex-grow-0 border-b-2" href="/">
        <div className="mb-3 self-center pl-7">
          <Image src="/logo.png" alt="logo" width={90} height={90} />
        </div>
        <div className="h-fit self-center">
          <p className=" pl-5 text-2xl font-semibold text-white hover:text-blue">
            Theppitak Maneepong
          </p>
        </div>
      </Link>
      <div className="m-4 flex-1  text-4xl italic text-white">
        <div className="flex h-[calc(100dvh-240px)] flex-col justify-center">
          <Link
            className={`m-10 ${
              router.pathname === "/about"
                ? "text-blue underline decoration-red"
                : "hover:text-blue hover:underline hover:decoration-red/80"
            }`}
            href="/about"
          >
            About
          </Link>
          <Link
            className={`m-10 ${
              router.pathname === "/projects"
                ? "text-blue underline decoration-red"
                : "hover:text-blue hover:underline hover:decoration-red/80"
            }`}
            href="/projects"
          >
            Projects
          </Link>
          <Link
            className={`m-10 ${
              router.pathname === "/blogs"
                ? "text-blue underline decoration-red"
                : "hover:text-blue hover:underline hover:decoration-red/80"
            }`}
            href="/blogs"
          >
            Blogs
          </Link>
          <Link
            className={`m-10 ${
              router.pathname === "/contact"
                ? "text-blue underline decoration-red"
                : "hover:text-blue hover:underline hover:decoration-red/80"
            }`}
            href="/contact"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
