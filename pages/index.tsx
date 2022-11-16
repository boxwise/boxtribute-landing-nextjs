import { getAllNews, getDataBySlug } from "../lib/api";
import React from "react";
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
  hero_image_mobile: string;
  hero_image_desktop: string;
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
      <section className="w-full px-4 md:px-16 max-w-[1200px] mx-auto">
        <p className="my-8 text-center md:my-16 md:text-2xl">
          {homeData.short_description}
        </p>
        <FactInNumbersContainer factInNumbers={homeData.facts_in_numbers} />
      </section>

      <SectionTitle title="News" color="lightblue" />
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
