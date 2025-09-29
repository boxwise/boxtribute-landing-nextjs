import { getDataBySlug } from "../lib/api";
import TextBlock, { ITextBlockData } from "../components/TextBlock";
import ContactForm from "../components/ContactForm";
import SectionTitle from "../components/SectionTitle";
import Footer, { IFooterData } from "../components/Footer";
import PageTitle from "../components/PageTitle";

interface ISection1Data {
  title: string;
}

interface ISection2Data {
  title: string;
  text: ITextBlockData;
}

interface IContactUsData {
  title: string;
  headline: string;
  section_1: ISection1Data;
  section_2: ISection2Data;
}

type Props = {
  contactUsData: IContactUsData;
  footerData: IFooterData;
};

const ContactUs = ({ contactUsData, footerData }: Props) => {
  return (
    <>
      <div className="max-w-screen-lg mx-auto">
        <section className="container my-8 md:my-12 mx-auto px-4 md:px-16">
          <div className="mb-4 md:mb-6">
            <PageTitle title={contactUsData.title} />
          </div>
          <h4 className="text-center">{contactUsData.headline}</h4>
        </section>

        <section className="container mx-auto">
          <SectionTitle title={contactUsData.section_1.title} color="inherit" />
          <ContactForm />
        </section>

        <section className="container  mx-auto mb-16">
          <SectionTitle title={contactUsData.section_2.title} color="inherit" />
          <div className="px-4 md:px-16">
            <TextBlock
              text={contactUsData.section_2.text.text}
              color={contactUsData.section_2.text.color}
              bg_color={contactUsData.section_2.text.bg_color}
              align={contactUsData.section_2.text.align}
            />
          </div>
        </section>
      </div>
      <Footer footerData={footerData} />
    </>
  );
};

export default ContactUs;

export const getStaticProps = async () => {
  const contactUsData = getDataBySlug("contactus/contact_us_data");
  const footerData = getDataBySlug("footer/footer");

  return {
    props: { contactUsData, footerData },
  };
};
