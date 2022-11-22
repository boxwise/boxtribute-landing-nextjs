type Props = {
  title: string;
  headline: string;
};

const PostTitle = ({ title, headline }: Props) => {
  return (
    <div className="tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
      <h1>{title}</h1>
      <h2>{headline}</h2>
    </div>
  );
};

export default PostTitle;
