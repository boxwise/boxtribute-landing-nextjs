import Link from "next/link";

type Props = {
  cta_link: string;
  cta_button: string;
};

const CTAButton = ({ cta_link, cta_button }: Props) => {
  return (
    <Link href={cta_link}>
      {/* move styling in variables to also put CTA button in navbar */}
      <button className="bg-red px-4 md:px-8 py-1 md:py-2 text-white text-xl md:text-2xl rounded-sm md:rounded-lg">
        {cta_button}
      </button>
    </Link>
  );
};

export default CTAButton;
