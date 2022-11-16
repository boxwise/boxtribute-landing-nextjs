import Link from "next/link";
import ImageText5050 from "./ImageText5050";
import NewsHeader from "./NewsHeader";

interface INewsHeaderData {
  title: string;
  headline: string;
  shortText: string;
  slug: string;
  image: string;
  image_description: string
  bg_color: string
}

type Props = {
  newsHeaderData: INewsHeaderData;
  order: number
};

const NewsPreview = ({ newsHeaderData, order }: Props) => {
  return (
    <ImageText5050
      image={newsHeaderData.image}
      image_description={newsHeaderData.image_description}
      bg_color="gray"
      order={order}
    >
      <NewsHeader newsHeaderData={newsHeaderData} />

      <Link href={`/posts/${newsHeaderData.slug}`} >
        <div className="flex text-red text-5xl mt-8 ">
          <h3 className="mr-16 capitalize">read more</h3>
          <img className='w-8 lg:w-12' src="/uploads/arrow.svg" />
        </div>
      </Link>
      
     </ImageText5050>
  );
};

export default NewsPreview;
