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
  className?: string;
  allowedTags?: string[];
}

const TextBlock = ({ text, bg_color, color, align, className, allowedTags }: IProps) => {
  const sanitizedText = allowedTags?.length
    ? DOMPurify.sanitize(text, { ALLOWED_TAGS: allowedTags })
    : DOMPurify.sanitize(text);

  return (
    <div
      className={`${markdownStyles[className?.length ? className : "markdown"]} ${classNames({
        [`bg-${bg_color}`]: bg_color,
        [`text-${color}`]: color,
        [`text-${align}`]: align,
      })}`}
      dangerouslySetInnerHTML={{ __html: sanitizedText }}
    />
  );
};

export default TextBlock;
