"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [nav, setNave] = useState(false);
  //links for mobile
  const links = [
    { id: 1, link: "Home" },
    { id: 2, link: "About" },
    { id: 3, link: "PortFolio" },

    { id: 5, link: "Contact" },
  ];

  //links for dektop view

  const bigSreenNav = [
    { id: 1, link: "Home" },
    { id: 2, link: "About" },
    { id: 3, link: "PortFolio" },

    { id: 5, link: "Contact" },
  ];
  return (
    <header>
      <nav className="flex justify-between items-center p-2 bg-slate-100 shadow">
        <h1 className="text-xs font-signature ml-5 mt-5">
          <Link href="/" className="">
            <img
              width="67"
              height="67"
              src="https://img.icons8.com/external-others-inmotus-design/67/external-Bundestag-Round-Sign-bundestag-others-inmotus-design-2.png"
              alt="external-Bundestag-Round-Sign-bundestag-others-inmotus-design-2"
            />
            <p className="P-3">jewenellearchide.com</p>
          </Link>
        </h1>
        <div
          onClick={() => setNave(!nav)}
          className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black-gray-800 text-gray-500">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                <Link onClick={() => setNave(!nav)} href={link}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}
        <ul className="md:flex md:items-center hidden">
          {bigSreenNav.map(({ id, link }) => (
            <li key={id} className="mx-4 items-center h-4">
              <Link
                href={link}
                className="text-xl hover:text-cyan-500 duration-500"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
