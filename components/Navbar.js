import React, { useState } from "react";
import Button from "./Button";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";

const Navbar = () => {
  let Links = [
    { name: "Home", link: "/", id: 0 },
    { name: "Anime's", link: "/anime", id: 1 },
    { name: "Jokes🤣", link: "/joke", id: 2 },
    { name: "Memes", link: "/meme", id: 3 },
    { name: "Anime's Quotes", link: "/quotes", id: 4 },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="md:h-20 bg-white shadow-md z-[10]  w-full fixed top-0 left-0">
      <div className="md:flex  items-center justify-between bg-white py-4 md:px-10 px-7">
        <Link href={"/"}>
          <div
            className=" justify-center font-bold my-auto text-2xl group cursor-pointer flex items-center 
      text-gray-800"
          >
            <span className="text-3xl text-indigo-600 mr-1 pt-2 md:group-hover:animate-bounce cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
                />
              </svg>
            </span>
            Manoj
          </div>
        </Link>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? (
            <XIcon className="block h-6 w-6" aria-hidden="true" />
          ) : (
            <MenuIcon className="block h-6 w-6" aria-hidden="true" />
          )}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[100] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-16 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.id}
              className="md:ml-8 text-sm md:my-0 text-left p-2 rounded-md active:bg-red-500 md:hover:bg-slate-100"
            >
              <Link href={link.link}>
                <a className="text-gray-800 hover:text-gray-400 duration-500 ">
                  {link.name}
                </a>
              </Link>
            </li>
          ))}
          <Button>
            <Link href={"https://twitter.com/iamsidar07"}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
</svg>
            </Link>
          </Button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
