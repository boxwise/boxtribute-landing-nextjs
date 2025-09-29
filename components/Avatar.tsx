import type { IAuthor } from "../interfaces/global";
import Image from "next/image";

const Avatar = ({ name, picture }: IAuthor) => {
  return (
    <div className="flex items-center gap-2">
      <Image src={picture} width={48} height={48} className="rounded-full mr-4" alt={name} />
      <h5>{name}</h5>
    </div>
  );
};

export default Avatar;
