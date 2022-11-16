type Props = {
  title: string;
  color: string;
};

const SectionTitle = ({ title, color }: Props) => {
  return (
    <div className={`width-full bg-${color} p-4 pb-2 md:px-16 md:pt-6`}>
      <h3>{title}</h3>
    </div>
  );
};

export default SectionTitle;
