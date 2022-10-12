import Image from "next/image";

type Props = {
  image: string;
  image_description: string;
  bg_color: string;
  order?: number;
  children: React.ReactNode;
  position?: string;
};

const ImageText5050 = ({
  image,
  image_description,
  bg_color,
  order,
  children,
  position,
}: Props) => {
  return (
    <div className={`flex flex-col lg:flex-row bg-${bg_color}`}>
      <div className={`w-full h-80 lg:w-1/2 lg:h-auto relative lg:order-${order}`}>
        <Image
          layout="fill"
          src={image}
          alt={image_description}
          objectFit='cover'
          objectPosition={position}
        />
      </div>
      <div className="w-full px-4 lg:w-1/2 lg:px-20 py-8 ">{children}</div>
    </div>
  );
};

export default ImageText5050;
