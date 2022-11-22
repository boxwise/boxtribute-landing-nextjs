import Navbar from "./Navbar";
import Meta from "./Meta";

interface IProps {
  children: React.ReactNode;
}

export default function Layout({ children }: IProps) {
  return (
    <div>
      <Meta />
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
