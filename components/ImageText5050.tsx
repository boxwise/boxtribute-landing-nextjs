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
      <div className={`flex flex-col lg:flex-row bg-lightgrey`}>
      <div className={`flex w-full aspect-square max-h-[320px] relative lg:w-1/2 lg:order-${order}`}>
      {isBreakpoint ? (
        <Image
          src={imageMobile}
          alt={imageDescription}
          width="480px"
          height="480px"
          objectFit='cover'
        />
        ): (
          <Image
          src={banner}
          alt={imageDescription}
          width="976px"
          height="320px"
          objectFit='cover'
          objectPosition={position}
        />
        )}
      </div>
      <div className="flex flex-col w-full h-auto p-4 lg:w-1/2 lg:px-20">{children}</div>
    </div>
    );
};

export default ImageText5050;
