import Link from "next/link";
import ImageText5050 from "./ImageText5050";
import NewsHeader from "./NewsHeader";
import { INewsData } from "../interfaces/global";

type Props = {
  newsData: INewsData;
  order: number;
};

const NewsPreview = ({ newsData, order }: Props) => {
  return (
    <ImageText5050
      imageMobile={newsData.image_mobile}
      banner={newsData.banner}
      imageDescription={newsData.image_description}
      order={order}
    >
      <NewsHeader
        title={newsData.title}
        headline={newsData.headline}
        shortText={newsData.short_text}
      />

      <Link href={`/posts/${newsData.slug}`}>
        <div className="flex text-red mt-3 ">
          <h3 className="mr-4 capitalize">read more</h3>
          <img className="w-8 lg:w-12" alt="arrow" src="/assets/svg/arrow.svg" />
        </div>
      </Link>
    </ImageText5050>
  );
};

export default NewsPreview;
