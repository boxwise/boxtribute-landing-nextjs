type Props = {
  title: string;
  headline: string;
  shortText: string;
};

const NewsHeader = ({ title, headline, shortText }: Props) => {
  return (
    <div>
      <h3 className="capitalize">{title}</h3>
      <h4 className="mb-3">{headline}</h4>
      <p className="text-justify">{shortText}</p>
    </div>
  );
};

export default NewsHeader;
