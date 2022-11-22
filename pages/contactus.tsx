import dynamic from "next/dynamic";
// import { MapSectionData } from "../components/MapSection";
import { getDataBySlug } from "../lib/api";
// import ContactForm from "../components/ContactForm";
import Footer, { IFooterData } from "../components/Footer";

interface IParagraph {
  paragraph: IParagraph;
}

interface IContactUsData {
  page_title: string;
  headline: string;
  title_1: string;
  paragraphs_group: IParagraph[];
  form_title: string;
}

type Props = {
  contactUsData: IContactUsData;
  footerData: IFooterData;
};

const ContactUs = ({ contactUsData, footerData }: Props) => {
  return (
    <>
      <section className="md:mx-32 mx-4 my-8 md:my-24">
        <div className="flex flex-col items-center text-center">
          <h1 className="md:text-8xl leading-none mb-8">{contactUsData.page_title}</h1>
          <h2 className="md:text-5xl mb-12">{contactUsData.headline}</h2>
        </div>
        <div className="flex flex-col md:flex-row gap-12  md:items-start">
          <div className="border md:w-3/5 px-12 py-12">
            {/* TODO: add email */}
            {/* <ContactForm form_title={contactUsData.form_title} /> */}
          </div>
          <div>
            <h3 className="text-2xl uppercase mb-4">{contactUsData.title_1}</h3>
            {contactUsData.paragraphs_group.map((e, i) => (
              <p className="mb-2" key={i}>
                {/* {e.paragraph} */}
              </p>
            ))}
          </div>
        </div>
      </section>
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
