import Link from "next/link";
import { textChangeRangeIsUnchanged } from "typescript";
import { useMediaQuery } from "./MediaQuery";

// TODO: Put correct links in
type ISocialMedia = {
  image: string;
  description: string;
  link: string;
};

interface IFooterData {
  boxtribute_logo: string;
  social_media_icons: ISocialMedia[];
  boxtribute_trademark: string;
}

export interface PropsFooter {
  footerData: IFooterData;
}

export const Footer = () => {
  const isBreakpoint = useMediaQuery(768);
  const footerData: IFooterData = {
    boxtribute_trademark: "© Boxtribute, Inc. 2022.",
    boxtribute_logo: "/uploads/boxtribute_white.png",
    social_media_icons: [
      {
        image: "/uploads/github.svg",
        description: "github icon",
        link: "https://wyborcza.pl/0,0.html",
      },
      {
        image: "/uploads/instagram.svg",
        description: "instagram icon",
        link: "https://wyborcza.pl/0,0.html",
      },
      {
        image: "/uploads/facebook.svg",
        description: "facebook icon",
        link: "https://wyborcza.pl/0,0.html",
      },
      {
        image: "/uploads/linkedin.svg",
        description: "linkedin icon",
        link: "https://wyborcza.pl/0,0.html",
      },
    ],
  };
  return (
    <section className="bg-navy py-16 px-8">
      <div className="flex  flex-col items-center md:items-stretch">
        <div className="flex md:pb-8 md:border-b-2 border-blue md:mx-2 md:items-end justify-between">
          <div>
          <img className="h-24 md:h-42 mr-4" src={footerData.boxtribute_logo} />
          </div>
          {!isBreakpoint ? (
            <div className="text-white flex justify-between  flex-1 gap-3 mb-0.9">
              <Link href="/">
                <a>Articles of Association</a>
              </Link>
              <Link href="/">
                <a>Data Policy</a>
              </Link>
              <Link href="/">
                <a>Annual Report 2020</a>
              </Link>
              <Link href="/">
                <a>Financial Report 2020</a>
              </Link>
              <Link href="/">
                <a>Privacy Plan</a>
              </Link>
            </div>
         ) : null} 
        </div>
        <div className="flex flex-col md:items-end mt-10">
          <div className="flex gap-6 mb-4">
            {footerData.social_media_icons.map((e, i) => (
              <Link href={e.link} key={i} >
                <a>
                  <img
                    className="h-12 md:h-18"
                    alt={e.description}
                    src={e.image}
                  />
                </a>
              </Link>
            ))}
          </div>

          <h3 className="text-white text-center text-md md:text-xl">
            {footerData.boxtribute_trademark}
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Footer;
