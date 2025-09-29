import Link from "next/link";
import FooterDropDown from "../components/FooterDropDown";

// TODO: Put correct links in
type ISocialMedia = {
  image: string;
  description: string;
  link: string;
};

interface IFooterStaticData {
  boxtributeLogo: string;
  socialMediaIcons: ISocialMedia[];
  boxtributeTrademark: string;
}

export interface IReport {
  year: string;
  report: string;
}

export interface IFooterData {
  articles_of_association: string;
  policy_plan: string;
  remuneration_policy: string;
  annual_reports: IReport[];
  financial_reports: IReport[];
}

type IProps = {
  footerData: IFooterData;
};

export const Footer = ({ footerData }: IProps) => {
  const footerStaticData: IFooterStaticData = {
    boxtributeTrademark: "© 2025 Boxtribute, All rights reserved.",
    boxtributeLogo: "/assets/svg/boxtribute_white_vertical.svg",
    socialMediaIcons: [
      {
        image: "/assets/svg/github.svg",
        description: "Github",
        link: "https://github.com/boxwise",
      },
      {
        image: "/assets/svg/instagram.svg",
        description: "Instagram",
        link: "https://www.instagram.com/boxtribute_ngo/",
      },
      {
        image: "/assets/svg/facebook.svg",
        description: "Facebook",
        link: "https://www.facebook.com/boxtribute/",
      },
      {
        image: "/assets/svg/linkedin.svg",
        description: "LinkedIn",
        link: "https://www.linkedin.com/company/boxtribute",
      },
    ],
  };

  return (
    <section>
      <div className="flex flex-col items-center gap-8 bg-navy text-white px-8 py-16">
        <img alt="Logo" className="h-24 md:h-42" src={footerStaticData.boxtributeLogo} />
        <div className="flex flex-wrap justify-center gap-x-2 sm-text">
          <Link href="contactus">Imprint</Link>
          <div>&middot;</div>
          <Link href={footerData.articles_of_association} passHref>
            <a target="_blank" rel="noopener noreferrer">
              Articles of Association
            </a>
          </Link>
          <div>&middot;</div>
          <Link href={footerData.policy_plan} passHref>
            <a target="_blank" rel="noopener noreferrer">
              Policy Plan
            </a>
          </Link>
          <div>&middot;</div>
          <Link href={footerData.remuneration_policy} passHref>
            <a target="_blank" rel="noopener noreferrer">
              Remuneration Policy
            </a>
          </Link>
          <div>&middot;</div>
          <FooterDropDown title="Annual Reports" reports={footerData.annual_reports} />
          <div>&middot;</div>
          <FooterDropDown title="Financial Reports" reports={footerData.financial_reports} />
        </div>
        <div className="flex gap-6">
          {footerStaticData.socialMediaIcons.map((e, i) => (
            <Link href={e.link} key={i}>
              <a>
                <img className="h-12 md:h-18" alt={e.description} src={e.image} />
              </a>
            </Link>
          ))}
        </div>
        <p className="xs-text">{footerStaticData.boxtributeTrademark}</p>
      </div>
      <p className="text-center sm-text text-navy p-4">
        Data privacy: We store <b>no</b> data about your website visit.
      </p>
    </section>
  );
};
export default Footer;
