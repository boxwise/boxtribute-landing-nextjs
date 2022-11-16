import Link from "next/link";
import { useRouter } from "next/router";
import CTAButton from "./CTAButton";
import HamburgerMenu from "./HamburgerMenu";
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
        <img
          className="h-14"
          src="/assets/img/boxtribute-logo.webp"
          alt="boxtribute logo"
        />
      </Link>
      {isBreakpoint ? (
        <HamburgerMenu />
      ) : (
        <ul className="flex justify-end items-center text-xl">
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
          <li className="list-none" key="CTA">
            <CTAButton
              ctaLink={
                "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=A8P3SYKKUPMPN&source=url"
              }
              ctaButton={"Donate"}
              noMdBreak={true}
            />
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
