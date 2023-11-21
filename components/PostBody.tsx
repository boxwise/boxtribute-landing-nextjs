import markdownStyles from "../styles/markdown-styles.module.css";
import DOMPurify from "isomorphic-dompurify";

type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  return (
    <div className="max-w-5xl mx-auto">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}
      />
    </div>
  );
};

export default PostBody;
