import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="h-16 bg-purple-700 flex justify-around items-center text-white">
       <Link href="/"> <div  className="logo font-bold text-lg">LinksFlow</div></Link>
        <ul className="flex justify-center items-center gap-5">
          <Link href="/">
            {" "}
            <li>Home</li>
          </Link>
          <Link href="/about">
            {" "}
            <li>About</li>
          </Link>
          <Link href="/generate">
            {" "}
            <li>Shorten</li>
          </Link>
          <Link href="/contact">
            {" "}
            <li>Contact Us</li>
          </Link>
          <li className="flex gap-3">
            <Link href="/Shorten">
              {" "}
              <button className="bg-purple-500 rounded-lg shadow-lg p-3 py-2 font-bold">
                Try Now
              </button>
            </Link>
            <Link href="/github">
              {" "}
              <button className="bg-purple-500 rounded-lg shadow-lg p-3 py-2 font-bold">
                GitHub
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
