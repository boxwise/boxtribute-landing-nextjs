import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import CTAButton from "./CTAButton";
import PageTitle from "./PageTitle";

interface ITypewriterText {
  text_for_typing: string;
}

export interface HeroSectionData {
  hero_image: string;
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
  return (
    <section className="w-screen h-auto relative">
      <div>
        <Image
          src={heroSectionData.hero_image}
          alt={heroSectionData.hero_image_description}
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="contain"
          z-0
          className="blur"
        />
      </div>
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 ">
        <PageTitle title={heroSectionData.page_title} />
        <h2 className="text-2xl z-10 leading-none text-center">
          <Typewriter
            options={{
              strings: heroSectionData.subtitles_hero.map(
                (e) => e.text_for_typing
              ),
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
      </div>
      <div className="cta-button-hero-section-home">
        <CTAButton
          cta_button={heroSectionData.cta_button}
          cta_link={heroSectionData.cta_link} 
          no_md_break={false}        />
      </div>
    </section>
  );
};
