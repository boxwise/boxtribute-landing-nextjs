import { ReactNode } from "react";

type Props = {
  children: ReactNode
};

const NewsBody = ({ children }: Props) => {
  return <div className="md:mx-20">{children}</div>;
};

export default NewsBody;
