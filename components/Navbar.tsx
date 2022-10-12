import Link from "next/link";
import { useRouter } from "next/router";
import HamburgerMenu  from "./HamburgerMenu";
import { useMediaQuery } from "./MediaQuery";

export const navLinks = [
  { name: "Home", path: "/" },
  {
    name: "About Us",
    path: "/aboutus",
  },
  {
    name: "Our Impact",
    path: "/ourimpact",
  },
  {
    name: "Contact Us",
    path: "/contactus",
  },
];

export const Navbar = () => {
  const router = useRouter();
  const isBreakpoint = useMediaQuery(768);
  return (
    <nav className="flex justify-between py-4 px-8 z-10">
      <Link href="/">
          <img className="h-14" src="/assets/img/boxtribute-logo.webp" alt="boxtribute logo"/>
      </Link>
      {isBreakpoint ? (
        <HamburgerMenu />
      ) : (
        <ul className="flex justify-end items-center">
          {navLinks.map((link, i) => (
            <li className="list-none" key={i}>
              <Link href={link.path}>
                {router.pathname === link.path ? (
                  <a className="font-bold p-2">{link.name}</a>
                ) : (
                  <a className="p-2">{link.name}</a>
                )}
              </Link>
            </li>
          ))}
          {/* TODO: Add CTA Button */}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
