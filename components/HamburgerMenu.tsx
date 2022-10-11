import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { navLinks } from "./Navbar";

export const HamburgerMenu = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const toggleHamburger = () => setHamburgerOpen(!hamburgerOpen);
  const router = useRouter();
  return (
    <div className="flex items-center">
      {!hamburgerOpen ? (
        <div
          className="flex flex-col justify-between align-middle w-10 h-8"
          onClick={toggleHamburger}
        >
          <div className="w-12 h-1 rounded transition-all bg-black" />
          <div className="w-12 h-1 rounded transition-all bg-black" />
          <div className="w-12 h-1 rounded transition-all bg-black" />
        </div>
      ) : (
        <div className="bg-navy w-screen h-screen z-20 absolute inset-0">
          <div onClick={toggleHamburger} className="flex justify-end mx-2 my-6">
            <img src="/assets/svg/close_icon.svg" />
          </div>
          <div>
          <ul className="flex-col text-blue mt-auto text-center">
            {navLinks.map((link, i) => (
              <li className="p-4" onClick={toggleHamburger} key={i}>
                <Link href={link.path}>
                  {router.pathname === link.path ? (
                    <a className="font-bold">{link.name}</a>
                  ) : (
                    <a>{link.name}</a>
                  )}
                </Link>
              </li>
            ))}
          </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
