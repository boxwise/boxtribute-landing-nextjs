import Link from "next/link";
import { usePlausible } from "next-plausible";

type Props = {
  ctaLink: string;
  ctaButton: string;
  noMdBreak: boolean;
};

const CTAButton = ({ ctaLink, ctaButton, noMdBreak }: Props) => {
  const plausible = usePlausible();
  return (
    <Link href={ctaLink}>
      {/* move styling in variables to also put CTA button in navbar */}
      <button
        className={`bg-red px-4 py-1 text-white text-xl rounded-md ${
          !noMdBreak ? "md:px-8 md:py-2 md:text-2xl md:rounded-lg lg:text-3xl" : ""
        }`}
        onClick={() => plausible("button-click", { props : { id : ctaButton.toLowerCase().replace(" ", "-") } })}
      >
        {ctaButton}
      </button>
    </Link>
  );
};

export default CTAButton;
