import Link from "next/link";
import { useRouter } from "next/router";
import CTAButton from "./CTAButton";
import HamburgerMenu from "./HamburgerMenu";
import { useMediaQuery } from "./MediaQuery";

export interface INavChild {
  name: string;
  path: string;
}

export interface INavLink {
  name: string;
  path: string;
  children?: INavChild[];
}

export const navLinks: INavLink[] = [
  { name: "Home", path: "/" },
  {
    name: "Our work",
    path: "/ourwork",
    children: [
      { name: "Our mission", path: "/ourimpact" },
      { name: "Case studies", path: "/ourwork#case-studies" },
    ],
  },
  {
    name: "Partners",
    path: "/partners",
  },
  {
    name: "ASSORT Standard",
    path: "/assort-standard",
  },
  {
    name: "Contact Us",
    path: "/contactus",
  },
];

export const Navbar = () => {
  const router = useRouter();
  const isBreakpoint = useMediaQuery(976);
  return (
    <nav className="flex justify-between my-4 mx-8 z-10">
      <Link href="/">
        <img className="h-14" src="/assets/img/boxtribute-logo.webp" alt="boxtribute logo" />
      </Link>
      {isBreakpoint ? (
        <HamburgerMenu />
      ) : (
        <ul className="flex justify-end items-center text-xl">
          {navLinks.map((link, i) => (
            <li className="list-none relative group" key={i}>
              <Link
                href={link.path}
                className={`m-2 ${router.pathname === link.path ? "font-bold" : ""}`}
              >
                {link.name}
              </Link>
              {link.children && (
                <ul
                  className={
                    "hidden group-hover:block absolute left-0 top-full pt-2 min-w-[200px] " +
                    "bg-white shadow-md z-20"
                  }
                >
                  {link.children.map((child, j) => (
                    <li className="list-none" key={j}>
                      <Link
                        href={child.path}
                        className="block px-4 py-2 whitespace-nowrap hover:bg-lightgray"
                      >
                        {child.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li className="list-none" key="CTA">
            <CTAButton
              ctaLink={"https://www.paypal.com/donate?campaign_id=THR8LVB3WTWU4"}
              ctaButton="Donate"
              noMdBreak={true}
            />
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
