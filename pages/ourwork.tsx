import { getDataBySlug } from "../lib/api";
import { HeroSection, IHeroSectionData } from "../components/HeroSection";
import ImageText5050 from "../components/ImageText5050";
import TextBlock from "../components/TextBlock";
import CaseStudiesContainer from "../components/CaseStudiesContainer";
import { ICaseStudyData } from "../components/CaseStudyCard";
import CTAButton from "../components/CTAButton";
import Footer, { IFooterData } from "../components/Footer";

interface IStat {
  number: string;
  label: string;
}

interface IProblemData {
  label: string;
  title: string;
  text: string;
  image_mobile: string;
  banner: string;
  image_description: string;
}

interface IBuiltToCloseGapData {
  label: string;
  title: string;
  text: string;
  badges: string[];
  image_mobile: string;
  banner: string;
  image_description: string;
}

interface IStructuralGapItem {
  number: string;
  title: string;
  text: string;
  color: string;
}

interface IStructuralGapData {
  label: string;
  title: string;
  text: string;
  items: IStructuralGapItem[];
}

interface ICaseStudiesData {
  label: string;
  title: string;
  text: string;
  items: ICaseStudyData[];
}

interface ICtaFinalData {
  title: string;
  text: string;
  cta_button: string;
  cta_link: string;
  cta_button_2: string;
  cta_link_2: string;
}

interface IOurWorkData {
  hero: IHeroSectionData;
  stats: IStat[];
  problem: IProblemData;
  built_to_close_gap: IBuiltToCloseGapData;
  structural_gap: IStructuralGapData;
  case_studies: ICaseStudiesData;
  cta_final: ICtaFinalData;
}

type Props = {
  ourWorkData: IOurWorkData;
  footerData: IFooterData;
};

export const OurWork = ({ ourWorkData, footerData }: Props) => {
  return (
    <>
      <HeroSection heroSectionData={{ ...ourWorkData.hero, align: "left" }} />

      <section className="bg-navy text-white">
        <div
          className={
            "max-w-[1200px] mx-auto px-4 md:px-16 py-8 md:py-12 " +
            "grid grid-cols-2 md:grid-cols-4 gap-8"
          }
        >
          {ourWorkData.stats.map((stat, i) => (
            <div key={i} className="text-center">
              <h3>{stat.number}</h3>
              <p className="sm-text">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto">
        <ImageText5050
          imageMobile={ourWorkData.problem.image_mobile}
          banner={ourWorkData.problem.banner}
          imageDescription={ourWorkData.problem.image_description}
          order={0}
        >
          <p className="uppercase text-red font-bold tracking-wider sm-text">
            {ourWorkData.problem.label}
          </p>
          <h2 className="mt-2">{ourWorkData.problem.title}</h2>
          <TextBlock text={ourWorkData.problem.text} className="lg-text mt-4" />
        </ImageText5050>
      </section>

      <section>
        <ImageText5050
          imageMobile={ourWorkData.built_to_close_gap.image_mobile}
          banner={ourWorkData.built_to_close_gap.banner}
          imageDescription={ourWorkData.built_to_close_gap.image_description}
          order={2}
          bgColor="gold"
        >
          <p className="uppercase text-navy font-bold tracking-wider sm-text">
            {ourWorkData.built_to_close_gap.label}
          </p>
          <h2 className="mt-2 text-navy">{ourWorkData.built_to_close_gap.title}</h2>
          <TextBlock
            text={ourWorkData.built_to_close_gap.text}
            className="lg-text mt-4"
            color="navy"
          />
          <div className="flex flex-wrap gap-2 mt-6">
            {ourWorkData.built_to_close_gap.badges.map((badge, i) => (
              <span key={i} className="border border-navy text-navy rounded-full px-4 py-1 sm-text">
                {badge}
              </span>
            ))}
          </div>
        </ImageText5050>
      </section>

      <section className="max-w-[1200px] mx-auto px-4 md:px-16 py-8 md:py-16 text-center">
        <p className="uppercase text-red font-bold tracking-wider sm-text">
          {ourWorkData.structural_gap.label}
        </p>
        <h2 className="mt-2">{ourWorkData.structural_gap.title}</h2>
        <p className="lg-text mt-4 max-w-[800px] mx-auto">{ourWorkData.structural_gap.text}</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3">
        {ourWorkData.structural_gap.items.map((item, i) => (
          <div key={i} className={`bg-${item.color} text-white p-8 md:p-12`}>
            <p className="sm-text">{item.number}</p>
            <h4 className="mt-2">{item.title}</h4>
            <p className="lg-text mt-4">{item.text}</p>
          </div>
        ))}
      </section>

      <section id="case-studies" className="scroll-mt-20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-16 py-8 md:py-16 text-center">
          <p className="uppercase text-red font-bold tracking-wider sm-text">
            {ourWorkData.case_studies.label}
          </p>
          <h2 className="mt-2">{ourWorkData.case_studies.title}</h2>
          <p className="lg-text mt-4 max-w-[800px] mx-auto">{ourWorkData.case_studies.text}</p>
        </div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-16 pb-8 md:pb-16">
          <CaseStudiesContainer caseStudies={ourWorkData.case_studies.items} />
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-4 md:px-16 py-8 md:py-16 text-center">
        <h2>{ourWorkData.cta_final.title}</h2>
        <p className="lg-text mt-4 max-w-[800px] mx-auto">{ourWorkData.cta_final.text}</p>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <CTAButton
            ctaButton={ourWorkData.cta_final.cta_button}
            ctaLink={ourWorkData.cta_final.cta_link}
            noMdBreak={false}
            bgColor="navy"
          />
          <CTAButton
            ctaButton={ourWorkData.cta_final.cta_button_2}
            ctaLink={ourWorkData.cta_final.cta_link_2}
            noMdBreak={false}
            bgColor="lightblue"
            textColor="navy"
          />
        </div>
      </section>

      <Footer footerData={footerData} />
    </>
  );
};

export default OurWork;

export const getStaticProps = async () => {
  const ourWorkData = getDataBySlug("ourwork/our_work");
  const footerData = getDataBySlug("footer/footer");

  return {
    props: { ourWorkData, footerData },
  };
};
