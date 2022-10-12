import Link from "next/link";

type Props = {
  cta_link: string;
  cta_button: string;
  no_md_break: boolean;
};

const CTAButton = ({ cta_link, cta_button, no_md_break}: Props) => {
  return (
    <Link href={cta_link}>
      {/* move styling in variables to also put CTA button in navbar */}
      <button className={`bg-red px-4 py-1 text-white text-xl rounded-md ${!no_md_break ? "md:px-8 md:py-2 md:text-2xl md:rounded-lg":""}`}>
        {cta_button}
      </button>
    </Link>
  );
};

export default CTAButton;
