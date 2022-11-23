import Link from "next/link";
import Image from "next/image";

type ISocialMediaData = {
  title: string;
  image: string;
  image_description: string;
  text: string;
  link: string;
};

interface IProps {
  socialMediaData: ISocialMediaData[];
}

const SocialMediaSnippet = ({ socialMediaData }: IProps) => {
  return (
    <>
      <ul className="flex flex-col lg:flex-row lg:bg-blue lg:py-12">
        {socialMediaData.map((e, i) => (
          <Link key={i} href={e.link}>
            <a className="flex flex-1 justify-between lg:flex-col py-12 lg:py-0 lg:mx-12 grow bg-white border-b-2 lg:border-0 social-snippet">
              <div className="order-2 lg:order-1 h-50 w-1/2 lg:w-1/3 lg:h-auto relative mx-4">
                <Image
                  src={e.image}
                  alt={e.image_description}
                  objectFit="cover"
                  objectPosition="center"
                  layout="fill"
                />
              </div>
              <div className="justify-between flex flex-col order-1 lg:order-2">
                <div className="flex items-start flex-col p-6">
                  <h2>{e.title}</h2>
                  <p className="hidden lg:block">{e.text}</p>
                </div>
                <div className="flex lg:hidden text-red mt-8 ">
                  <h3 className="mr-16">Next</h3>
                  <img className="w-8 lg:w-12" src="/uploads/arrow.svg" />
                </div>
              </div>
            </a>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default SocialMediaSnippet;
