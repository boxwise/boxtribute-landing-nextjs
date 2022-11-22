import { getDataBySlug } from "../lib/api";
import PageTitle from "../components/PageTitle";
import TextBlock from "../components/TextBlock";
import SectionTitle from "../components/SectionTitle";
import ImageText5050 from "../components/ImageText5050";
import BlockWithBulletPoints from "../components/BlockWithBulletPoints";
import markdownToHtml from "../lib/markdownToHtml";
import Footer, { IFooterData } from "../components/Footer";

export type ITextBlock = {
  title?: string;
  paragraphs: IParagraph[];
};

type ITextAndImage = {
  image: string;
  image_description: string;
  textBlock: ITextBlock;
};

type IParagraph = {
  paragraph: string;
};

interface IOurImpactData {
  title_of_the_page: string;
  subtitle_1: string;
  text_with_picture: ITextAndImage[];
  subtitle_2: string;
  text_block_1: string;
  subtitle_3: string;
}

type Props = {
  ourImpactData: IOurImpactData;
  intro_text: string;
  text_block_2: string;
  footerData: IFooterData;
};

export const OurImpact = ({ ourImpactData, intro_text, text_block_2, footerData }: Props) => {
  return (
    <>
      <PageTitle title={ourImpactData.title_of_the_page} />
      <TextBlock text_justify="left">
        <div dangerouslySetInnerHTML={{ __html: intro_text }}></div>
      </TextBlock>
      <SectionTitle title={ourImpactData.subtitle_1} />
      <ImageText5050
        imageGrowPosition="top"
        bg_color="gray"
        image={ourImpactData.text_with_picture[0].image}
        image_description={ourImpactData.text_with_picture[0].image_description}
        order={2}
      >
        <BlockWithBulletPoints
          blockWithBulletPointsData={ourImpactData.text_with_picture[0].textBlock}
        />
      </ImageText5050>
      <TextBlock text_justify="left" bg_color="navy" text_color="blue">
        {ourImpactData.text_block_1}
      </TextBlock>
      <SectionTitle title={ourImpactData.subtitle_2} />
      <ImageText5050
        bg_color="gray"
        image={ourImpactData.text_with_picture[1].image}
        image_description={ourImpactData.text_with_picture[1].image_description}
      >
        <BlockWithBulletPoints
          blockWithBulletPointsData={ourImpactData.text_with_picture[1].textBlock}
        />
      </ImageText5050>
      <TextBlock text_justify="left">
        <div dangerouslySetInnerHTML={{ __html: text_block_2 }}></div>
      </TextBlock>
      <Footer footerData={footerData} />
    </>
  );
};

export default OurImpact;

// TODO: unify markdownToHtml with getdata functions
export const getStaticProps = async () => {
  const ourImpactData = getDataBySlug("ourimpact/our_impact");
  const text_block_2 = await markdownToHtml(ourImpactData.text_block_2 || "");
  const intro_text = await markdownToHtml(ourImpactData.intro_text || "");
  const footerData = getDataBySlug("footer/footer");

  return {
    props: { ourImpactData, text_block_2, intro_text, footerData },
  };
};
