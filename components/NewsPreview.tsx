import Link from "next/link";
import ImageText5050 from "./ImageText5050";
import NewsHeader from "./NewsHeader";
import { INewsData } from "../interfaces/global";

type Props = {
  newsHeaderData: INewsData;
  order: number
};

const NewsPreview = ({ newsHeaderData, order }: Props) => {
  return (
    <ImageText5050
      imageMobile={newsHeaderData.image_mobile}
      banner={newsHeaderData.banner}
      imageDescription={newsHeaderData.image_description}
      order={order}
    >
      <NewsHeader newsHeaderData={newsHeaderData} />

      <Link href={`/posts/${newsHeaderData.slug}`} >
        <div className="flex text-red mt-8 ">
          <h3 className="mr-4 capitalize">read more</h3>
          <img className='w-8 lg:w-12' src="/assets/svg/arrow.svg" />
        </div>
      </Link>
      
     </ImageText5050>
  );
};

export default NewsPreview;
