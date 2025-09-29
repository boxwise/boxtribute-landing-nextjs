import { getDataBySlug } from "../lib/api";
import PageTitle from "../components/PageTitle";
import TextBlock, { ITextBlockData } from "../components/TextBlock";
import SectionTitle from "../components/SectionTitle";
import ImageText5050 from "../components/ImageText5050";
import Footer, { IFooterData } from "../components/Footer";
import { IImageText5050Data } from "../interfaces/global";

interface ISection2Data {
  title: string;
  image_text_50_50: IImageText5050Data;
  text: ITextBlockData;
}

interface ISection3Data {
  title: string;
  image_text_50_50: IImageText5050Data;
}

interface IOurImpactData {
  title: string;
  section_1: ITextBlockData;
  section_2: ISection2Data;
  section_3: ISection3Data;
}

type Props = {
  ourImpactData: IOurImpactData;
  footerData: IFooterData;
};

export const OurImpact = ({ ourImpactData, footerData }: Props) => {
  return (
    <>
      <section className="my-8 md:my-12">
        <PageTitle title={ourImpactData.title} />
      </section>
      <section className="container my-8 md:my-12 mx-auto px-4 md:px-16">
        <TextBlock
          text={ourImpactData.section_1.text}
          color={ourImpactData.section_1.color}
          bg_color={ourImpactData.section_1.bg_color}
          align={ourImpactData.section_1.align}
          className="lg-text"
        />
      </section>

      <section>
        <SectionTitle title={ourImpactData.section_2.title} color="lightblue" />
        <ImageText5050
          imageMobile={ourImpactData.section_2.image_text_50_50.image_mobile}
          banner={ourImpactData.section_2.image_text_50_50.banner}
          imageDescription={ourImpactData.section_2.image_text_50_50.image_description}
          order={ourImpactData.section_2.image_text_50_50.picture_left ? 1 : 2}
        >
          <TextBlock
            text={ourImpactData.section_2.image_text_50_50.text}
            color={ourImpactData.section_2.image_text_50_50.color}
            bg_color={ourImpactData.section_2.image_text_50_50.bg_color}
            align={ourImpactData.section_2.image_text_50_50.align}
            allowedTags={["ul", "li", "strong"]}
            className="lg-text"
          />
        </ImageText5050>
        <div className="bg-navy">
          <div className="container mx-auto p-4 md:p-16">
            <TextBlock
              text={ourImpactData.section_2.text.text}
              color="white"
              bg_color={ourImpactData.section_2.text.bg_color}
              align={ourImpactData.section_2.text.align}
              markdownClassName="markdownNoMY"
              className="lg-text"
            />
          </div>
        </div>
      </section>

      <section>
        <SectionTitle title={ourImpactData.section_3.title} color="lightblue" />
        <ImageText5050
          imageMobile={ourImpactData.section_3.image_text_50_50.image_mobile}
          banner={ourImpactData.section_3.image_text_50_50.banner}
          imageDescription={ourImpactData.section_3.image_text_50_50.image_description}
          order={ourImpactData.section_3.image_text_50_50.picture_left ? 0 : 1}
          imageGrowPosition="right"
        >
          <TextBlock
            text={ourImpactData.section_3.image_text_50_50.text}
            color={ourImpactData.section_3.image_text_50_50.color}
            bg_color={ourImpactData.section_3.image_text_50_50.bg_color}
            align={ourImpactData.section_3.image_text_50_50.align}
            allowedTags={["ul", "li", "strong"]}
            className="lg-text"
          />
        </ImageText5050>
      </section>
      <Footer footerData={footerData} />
    </>
  );
};

export default OurImpact;

// TODO: unify markdownToHtml with getdata functions
export const getStaticProps = async () => {
  const ourImpactData = getDataBySlug("ourimpact/our_impact");
  const footerData = getDataBySlug("footer/footer");

  return {
    props: { ourImpactData, footerData },
  };
};
