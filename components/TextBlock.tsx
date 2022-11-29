import markdownStyles from "../styles/markdown-styles.module.css";
import DOMPurify from "isomorphic-dompurify";
import classNames from "classnames";

export interface ITextBlockData {
  text: string;
  bg_color?: string;
  color?: string;
  align?: "center" | "left" | "right" | "justify";
}

interface IProps extends ITextBlockData {
  markdownClassName?: string;
  className?: string;
  allowedTags?: string[];
  htmlTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "div";
}

const TextBlock = ({
  text,
  bg_color,
  color,
  align,
  markdownClassName,
  allowedTags,
  htmlTag,
  className,
}: IProps) => {
  const sanitizedText = allowedTags?.length
    ? DOMPurify.sanitize(text, { ALLOWED_TAGS: allowedTags })
    : DOMPurify.sanitize(text);

  const _htmlTag = htmlTag ? htmlTag : "div";

  return (
    <_htmlTag
      className={`${
        markdownStyles[markdownClassName?.length ? markdownClassName : "markdown"]
      } ${classNames({
        [`bg-${bg_color}`]: bg_color,
        [`text-${color}`]: color,
        [`text-${align}`]: align,
        [`${className}`]: className,
      })}`}
      dangerouslySetInnerHTML={{ __html: sanitizedText }}
    />
  );
};

export default TextBlock;
