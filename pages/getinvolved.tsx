import Link from "next/link";
import { getDataBySlug } from "../lib/api";
import Image from "next/image";

interface IParagraph {
  paragraph: string;
}

interface IHelpPossibility {
  step_number: number;
  description: string;
  link: string;
}

interface ILookedFor {
  image: string;
  title: string;
  description: IParagraph[];
  image_description: string;
}

interface IGetInvolvedData {
  hero_image: string;
  image_description: string;
  page_title: string;
  cta_button: string;
  cta_link: string;
  main_subtitle: string;
  paragraphs_group: IParagraph[];
  image_1: string;
  image_1_description: string;
  description_1: string;
  help_possibilities: IHelpPossibility[];
  headline_2: string;
  description_2_list: IParagraph[];
  headline_3: string;
  list_of_items: IParagraph[];
  image_3: string;
  image_3_description: string;
  description_4: string;
  list_of_looked_for: ILookedFor[];
}

interface Props {
  getInvolvedData: IGetInvolvedData;
}

const GetInvolved = () => {
  return <></>;
};
export default GetInvolved;

// export const GetInvolved = ({ getInvolvedData }: Props) => {
//   return (
//     <>
//       <section className="w-full h-auto  relative">
//         <Image
//           src={getInvolvedData.hero_image}
//           alt={getInvolvedData.image_description}
//           width={1600}
//           height={1000}
//           z-0
//         />
//         <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 ">
//           <h1 className="z-10 text-black text-center text-8xl mb-0 pb-0">
//             {getInvolvedData.page_title}
//           </h1>
//         </div>
//         <Link href={getInvolvedData.cta_link}>
//           <button className="bg-red absolute bottom-1/4 left-1/2 transform -translate-x-1/2 px-8 py-2 text-white text-2xl rounded-lg">
//             {getInvolvedData.cta_button}
//           </button>
//         </Link>
//       </section>
//       <section>
//         <h2>{getInvolvedData.main_subtitle}</h2>
//         {getInvolvedData.paragraphs_group.map((e) => (
//           <h3>{e.paragraph}</h3>
//         ))}
//       </section>
//       <section>
//         <div>
//           <img src={getInvolvedData.image_1} alt={getInvolvedData.image_1_description} />
//         </div>
//         <h3>{getInvolvedData.description_1}</h3>
//       </section>
//       <section>
//         {/* should there be a link on the each step? */}
//         {getInvolvedData.help_possibilities.map((e, i) => (
//           <div key={i}>
//             <h1>{e.step_number}</h1>
//             <h3>{e.description}</h3>
//           </div>
//         ))}
//       </section>
//       <section>
//         <h3>{getInvolvedData.headline_2}</h3>
//         {getInvolvedData.description_2_list.map((e, i) => (
//           <p>{e.paragraph}</p>
//         ))}
//       </section>
//       <section>
//         <div>
//           <h3>{getInvolvedData.headline_3}</h3>
//           <ul>
//             {getInvolvedData.list_of_items.map((e, i) => (
//               <li>{e.paragraph}</li>
//             ))}
//           </ul>
//         </div>
//         <div>
//           <img src={getInvolvedData.image_3} alt={getInvolvedData.image_3_description} />
//         </div>
//       </section>
//       <section>
//         <h3>{getInvolvedData.description_4}</h3>
//       </section>
//       <section>
//         {getInvolvedData.list_of_looked_for.map((e, i) => (
//           <div>
//             <div>
//               <img src={e.image} alt={e.image_description} />
//               <h2>{e.title}</h2>
//             </div>
//             <div>
//               {e.description.map((e, i) => (
//                 <p>{e.paragraph}</p>
//               ))}
//             </div>
//           </div>
//         ))}
//       </section>
//     </>
//   );
// };

//

// export const getStaticProps = async () => {
//   const getInvolvedData = getDataBySlug("getinvolved/get_involved_data");

//   return {
//     props: { getInvolvedData },
//   };
// };
