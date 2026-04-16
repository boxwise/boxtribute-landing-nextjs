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
    <div
      className="bg-lightgray max-lg:flex max-lg:flex-row lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:auto-rows-min"
    >
      <div className={`flex flex-row relative lg:max-h-[640px] w-full lg:order-${order}`}>
        {isBreakpoint ? (
          <Image
            src={imageMobile}
            alt={imageDescription}
            layout="fill"
            objectFit="cover"
            priority
          />
        ) : (
          <Image
            src={banner}
            alt={imageDescription}
            layout="fill"
            objectFit="cover"
            priority
            objectPosition={position}
          />
        )}
      </div>
      <div className="h-fit p-4 md:p-16 w-full">{children}</div>
    </div>
  );
};

export default ImageText5050;
