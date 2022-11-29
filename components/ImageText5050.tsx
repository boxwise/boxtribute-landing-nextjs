import Image from "next/image";
import { useMediaQuery } from "./MediaQuery";

type Props = {
  imageMobile: string;
  banner: string;
  imageDescription: string;
  order?: number;
  children: React.ReactNode;
  imageGrowPosition?: string;
};

const ImageText5050 = ({
  imageMobile,
  banner,
  imageDescription,
  order,
  children,
  imageGrowPosition: position,
}: Props) => {
  const isBreakpoint = useMediaQuery(480);
  return (
    <div className="bg-lightgray max-lg:flex max-lg:flex-row lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:auto-rows-min">
      <div className={`flex flex-row relative max-h-[320px] lg:max-h-[640px] lg:order-${order}`}>
        {isBreakpoint ? (
          <Image
            src={imageMobile}
            alt={imageDescription}
            width="640px"
            height="640px"
            objectFit="cover"
          />
        ) : (
          <Image
            src={banner}
            alt={imageDescription}
            width="1600px"
            height="640px"
            objectFit="cover"
            objectPosition={position}
          />
        )}
      </div>
      <div className="h-fit p-4 md:p-16">{children}</div>
    </div>
  );
};

export default ImageText5050;
