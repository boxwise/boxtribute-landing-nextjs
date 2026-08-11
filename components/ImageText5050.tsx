import Image from "next/image";
import { useMediaQuery } from "./MediaQuery";

type Props = {
  imageMobile: string;
  banner: string;
  imageDescription: string;
  order?: number;
  children: React.ReactNode;
  imageGrowPosition?: string;
  priority?: boolean;
};

const ImageText5050 = ({
  imageMobile,
  banner,
  imageDescription,
  order,
  children,
  priority,
  imageGrowPosition: position,
}: Props) => {
  const isBreakpoint = useMediaQuery(480);

  const orderClass = order !== undefined ? `order-${order}` : "";

  return (
    <div className="bg-lightgray max-lg:flex max-lg:flex-col lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:auto-rows-min">
      <div
        className={`flex flex-row relative w-full ${orderClass} max-lg:order-first max-lg:aspect-video lg:h-full`}
      >
        {isBreakpoint ? (
          <Image
            src={imageMobile}
            alt={imageDescription}
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
            priority={priority}
          />
        ) : (
          <Image
            src={banner}
            alt={imageDescription}
            fill
            style={{
              objectFit: "cover",
              objectPosition: position ?? "center",
            }}
            priority={priority}
          />
        )}
      </div>
      <div className="h-fit p-4 md:p-16 w-full">{children}</div>
    </div>
  );
};

export default ImageText5050;
