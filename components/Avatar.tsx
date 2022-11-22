import type { IAuthor } from "../interfaces/global";
import Image from "next/image";

const Avatar = ({ name, picture }: IAuthor) => {
  return (
    <div className="flex items-center">
      <Image
        src={picture}
        width="3rem" /*48 px*/
        height="3rem"
        className="rounded-full mr-4"
        alt={name}
      />
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
};

export default Avatar;
