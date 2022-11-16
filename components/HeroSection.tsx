import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import CTAButton from "./CTAButton";
import PageTitle from "./PageTitle";
import { useMediaQuery } from "./MediaQuery";

interface ITypewriterText {
  text_for_typing: string;
}

export interface HeroSectionData {
  hero_image_mobile: string;
  hero_image_desktop: string;
  hero_image_description: string;
  page_title: string;
  subtitles_hero: ITypewriterText[];
  cta_button: string;
  cta_link: string;
}

interface Props {
  heroSectionData: HeroSectionData;
}

// TODO: Image must be full width
export const HeroSection = ({ heroSectionData }: Props) => {
  const isBreakpoint = useMediaQuery(768);
  return (
    <section className="w-screen h-auto relative">
      {isBreakpoint ? (
        <Image
          src={heroSectionData.hero_image_mobile}
          alt={heroSectionData.hero_image_description}
          width="800px"
          height="800px"
          priority
          className="blur z-0"
        />
      ) : (
        <div className="flex justify-center max-h-[675px] relative">
          <Image
            src={heroSectionData.hero_image_desktop}
            alt={heroSectionData.hero_image_description}
            width="2400px"
            height="1350px"
            objectFit="cover"
            objectPosition={"bottom"}
            priority
            className="blur z-0"
          />
        </div>
      )}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2">
        <PageTitle title={heroSectionData.page_title} />
        <h4 className="z-10 leading-none text-center bg-lightblue">
          <Typewriter
            options={{
              strings: heroSectionData.subtitles_hero.map(
                (e) => e.text_for_typing
              ),
              autoStart: true,
              loop: true,
            }}
          />
        </h4>
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
