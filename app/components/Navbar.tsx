import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex h-14 items-center justify-end bg-slate-900 text-white">
      <Link className="mx-4" href="/">
        Home
      </Link>

      <Link className="mx-4" href="/about">
        About
      </Link>

      <Link className="mx-4" href="/projects">
        Projects
      </Link>

      <Link className="mx-4" href="/blog">
        Blog
      </Link>

      <Link className="mx-4" href="/contact">
        Contact
      </Link>
    </div>
  );
};

export default Navbar;
