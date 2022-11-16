import { getAllNews, getDataBySlug } from "../lib/api";
import Head from "next/head";
import React from "react";
import TextBlock from "../components/TextBlock";
import NewsPreview from "../components/NewsPreview";
import FactInNumbersContainer from "../components/FactInNumbersContainer";
import SectionTitle from "../components/SectionTitle";
import { HeroSection } from "../components/HeroSection";
import { INewsData } from "../interfaces/global";

interface ITypewriterText {
  text_for_typing: string;
}

interface IFactCell {
  icon: string;
  description: string;
  number: number;
  color: string;
  image_description: string;
}

interface IBlogPostData {
  image: string;
  image_description: string;
  title: string;
  headline: string;
  text: string;
  content: string;
}

interface IInfo {
  image: string;
  title: string;
  image_description: string;
  text: string;
  link: string;
}

interface IHomeData {
  page_title: string;
  subtitles_hero: ITypewriterText[];
  hero_image: string;
  hero_image_description: string;
  cta_button: string;
  cta_link: string;
  short_description: string;
  facts_in_numbers: IFactCell[];
  more_info: IInfo[];
}

type Props = {
  homeData: IHomeData;
  allNews: INewsData[];
};

const Index = ({ homeData, allNews }: Props) => {
  return (
    <>
      <HeroSection heroSectionData={homeData} />
      <section className="w-full min-[1200px]:w-[1200px] px-4 md:px-16 ">
        <p className="py-4 text-center md:py-16 md:text-2xl max-w-[1200px] mx-auto">
          {homeData.short_description}
        </p>
        <FactInNumbersContainer factInNumbers={homeData.facts_in_numbers} />
      </section>

      <SectionTitle title="News" />
      {allNews.map((e, i) => (
        <NewsPreview key={i} newsHeaderData={e} order={i % 2} />
      ))}

      {/* <SocialMediaSnippet socialMediaData={homeData.more_info} /> */}
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const allNews = getAllNews([
    "title",
    "headline",
    "shortText",
    "blogText",
    "slug",
    "image",
    "image_description",
  ]);

  const homeData = getDataBySlug("home/home_data");

  return {
    props: { homeData, allNews },
  };
};
