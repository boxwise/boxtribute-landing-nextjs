type Props = {
  title: string
};

const SectionTitle = ({ title }: Props) => {
  return (
    <div>
      <h2 className="bg-blue pt-4 lg:pt-6 lg:pb-2 px-4 lg:px-0 font-bold capitalize">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;