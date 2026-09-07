import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import CTAButton from "./CTAButton";
import { navLinks } from "./Navbar";

export const HamburgerMenu = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
    setOpenIndex(null);
  };
  const router = useRouter();
  return (
    <div className="flex items-center">
      {!hamburgerOpen ? (
        <div
          className="flex flex-col justify-between align-middle w-[40px] h-[20px]"
          onClick={toggleHamburger}
        >
          <div className="w-full h-1 rounded transition-all bg-black" />
          <div className="w-full h-1 rounded transition-all bg-black" />
          <div className="w-full h-1 rounded transition-all bg-black" />
        </div>
      ) : (
        <div className="bg-navy w-screen h-screen z-[2000] absolute inset-0">
          <div onClick={toggleHamburger} className="flex justify-end px-6 py-6">
            <img src="/assets/svg/close_icon.svg" className="w-[40px] h-[40px]" />
          </div>
          <div>
            <ul className="flex-col text-white text-xl text-center">
              {navLinks.map((link, i) => (
                <li className="m-4 list-none" key={i}>
                  <div className="flex items-center justify-center gap-2">
                    <Link
                      href={link.path}
                      onClick={toggleHamburger}
                      className={router.pathname === link.path ? "font-bold" : ""}
                    >
                      {link.name}
                    </Link>
                    {link.children && (
                      <button
                        type="button"
                        aria-label={`Toggle ${link.name} submenu`}
                        onClick={() => setOpenIndex(openIndex === i ? null : i)}
                      >
                        {openIndex === i ? (
                          <ChevronUpIcon className="w-5 h-5" />
                        ) : (
                          <ChevronDownIcon className="w-5 h-5" />
                        )}
                      </button>
                    )}
                  </div>
                  {link.children && openIndex === i && (
                    <ul className="mt-2">
                      {link.children.map((child, j) => (
                        <li className="my-2 list-none" key={j} onClick={toggleHamburger}>
                          <Link href={child.path} className="text-lightblue">
                            {child.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li className="m-4 list-none" onClick={toggleHamburger} key="CTA">
                <CTAButton
                  ctaLink={"https://www.paypal.com/donate?campaign_id=THR8LVB3WTWU4"}
                  ctaButton={"Donate"}
                  noMdBreak={true}
                />
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
