type Props = {
  title: string;
};

const PageTitle = ({ title }: Props) => {
  return <h1 className="text-center z-10">{title}</h1>;
};

export default PageTitle;
