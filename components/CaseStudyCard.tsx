import Image from "next/image";
import Link from "next/link";

export interface ICaseStudyStat {
  value: string;
  label: string;
}

export interface ICaseStudyData {
  case_number: string;
  theme: string;
  country: string;
  subtitle: string;
  text: string;
  stats: ICaseStudyStat[];
  pdf_link: string;
  color: string;
  image_mobile: string;
  banner: string;
  image_description: string;
}

type Props = {
  caseStudy: ICaseStudyData;
};

const CaseStudyCard = ({ caseStudy }: Props) => {
  return (
    <div className={`bg-${caseStudy.color} text-white h-full flex flex-col p-6 md:p-8`}>
      <p className="uppercase font-bold sm-text tracking-wider">
        Case Study {caseStudy.case_number} - {caseStudy.theme}
      </p>
      <h2 className="uppercase font-extrabold mt-2">{caseStudy.country}</h2>
      <p className="uppercase font-bold sm-text mb-4">{caseStudy.subtitle}</p>
      <div className="relative w-full aspect-video mb-4">
        <Image
          src={caseStudy.banner}
          alt={caseStudy.image_description}
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>
      <p className="sm-text">{caseStudy.text}</p>
      <div className="flex flex-col gap-2 border-t border-white/30 my-4">
        {caseStudy.stats.map((stat, i) => (
          <div key={i} className="pt-2 sm-text">
            <span className="font-extrabold">{stat.value}</span> <span className="font-normal">{stat.label}</span>
          </div>
        ))}
      </div>
      <div className="mt-auto">
        <Link href={caseStudy.pdf_link} target="_blank" rel="noopener noreferrer">
          <span className="underline sm-text">Download the full PDF &darr;</span>
        </Link>
      </div>
    </div>
  );
};

export default CaseStudyCard;
