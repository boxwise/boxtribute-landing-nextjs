import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import CTAButton from "./CTAButton";
import PageTitle from "./PageTitle";
import { useMediaQuery } from "./MediaQuery";

interface ITypewriterText {
  text_for_typing: string;
}

export interface IHeroSectionData {
  hero_image_mobile: string;
  hero_image_desktop: string;
  hero_image_description: string;
  main_heading: string;
  subtitles_hero?: ITypewriterText[];
  subtitle_text?: string;
  eyebrow?: string;
  cta_button: string;
  cta_link: string;
  cta_button_2?: string;
  cta_link_2?: string;
  align?: "center" | "left";
}

interface IProps {
  heroSectionData: IHeroSectionData;
}

// TODO: Image must be full width
export const HeroSection = ({ heroSectionData }: IProps) => {
  const isBreakpoint = useMediaQuery(768);
  const align = heroSectionData.align ?? "center";

  const heroImage = isBreakpoint ? (
    <div className="w-full h-[400px] mx-auto">
      <Image
        src={heroSectionData.hero_image_mobile}
        alt={heroSectionData.hero_image_description}
        layout="fill"
        objectFit="cover"
        priority
        className="blur z-0"
      />
    </div>
  ) : (
    <div className="w-full h-[675px] relative mx-auto">
      <Image
        src={heroSectionData.hero_image_desktop}
        alt={heroSectionData.hero_image_description}
        layout="fill"
        objectFit="cover"
        priority
        className="blur z-0"
      />
    </div>
  );

  if (align === "left") {
    return (
      <section className="h-auto relative">
        {heroImage}
        <div className="absolute inset-0 flex items-center">
          <div className="w-full max-w-[1200px] mx-auto px-4 md:px-16">
            {heroSectionData.eyebrow && (
              <p className="z-10 text-white font-bold uppercase tracking-wider sm-text mb-2">
                {heroSectionData.eyebrow}
              </p>
            )}
            <h1 className="z-10 text-left text-white">{heroSectionData.main_heading}</h1>
            {heroSectionData.subtitle_text && (
              <p className="z-10 text-white lg-text mt-4 max-w-[600px]">
                {heroSectionData.subtitle_text}
              </p>
            )}
            <div className="z-10 flex flex-wrap gap-4 mt-8">
              <CTAButton
                ctaButton={heroSectionData.cta_button}
                ctaLink={heroSectionData.cta_link}
                noMdBreak={false}
                bgColor="navy"
              />
              {heroSectionData.cta_button_2 && (
                <CTAButton
                  ctaButton={heroSectionData.cta_button_2}
                  ctaLink={heroSectionData.cta_link_2 ?? "#"}
                  noMdBreak={false}
                  bgColor="lightblue"
                  textColor="navy"
                />
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="h-auto relative">
      {heroImage}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2">
        <PageTitle title={heroSectionData.main_heading} />
        {heroSectionData.subtitles_hero && (
          <h4 className="z-10 leading-none text-center bg-lightblue">
            <Typewriter
              options={{
                strings: heroSectionData.subtitles_hero.map((e) => e.text_for_typing),
                autoStart: true,
                loop: true,
              }}
            />
          </h4>
        )}
      </div>
      <div className="absolute top-1/4 left-1/2 transform translate-y-32 -translate-x-1/2">
        <CTAButton
          ctaButton={heroSectionData.cta_button}
          ctaLink={heroSectionData.cta_link}
          noMdBreak={false}
        />
      </div>
    </section>
  );
};
