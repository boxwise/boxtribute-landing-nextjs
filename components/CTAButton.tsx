import Link from "next/link";
import { usePostHog } from "posthog-js/react";

type Props = {
  ctaLink: string;
  ctaButton: string;
  noMdBreak: boolean;
};

const CTAButton = ({ ctaLink, ctaButton, noMdBreak }: Props) => {
  const posthog = usePostHog();

  return (
    <Link href={ctaLink}>
      {/* move styling in variables to also put CTA button in navbar */}
      <button
        className={`bg-red px-4 py-1 text-white text-xl rounded-md ${
          !noMdBreak ? "md:px-8 md:py-2 md:text-2xl md:rounded-lg lg:text-3xl" : ""
        }`}
        onClick={() =>
          posthog?.capture("CTA Click", { button_label: ctaButton, destination: ctaLink })
        }
      >
        {ctaButton}
      </button>
    </Link>
  );
};

export default CTAButton;
