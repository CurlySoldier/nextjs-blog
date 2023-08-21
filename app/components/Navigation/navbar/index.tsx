import React from "react";
import Link from "next/link";
import Logo from "../Logo";
import Button from "../Button";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 bg-black sticky top-0">
        <div className="container mx-auto px-7 h-full">
          <div className="flex justify-content: center justify-between items-center h-full">
            <Logo />
            <div className="text-white flex justify-center items-center">
              <p>Chad Chandrapauls Developement journey</p>
            </div>

            <ul className="hidden md:flex gap-x-10 text-white">
              <li>
                <Link href="/blogs">
                  <p>Blogs</p>
                </Link>
              </li>

              <li>
                <Link href="/about">
                  <p>About</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
