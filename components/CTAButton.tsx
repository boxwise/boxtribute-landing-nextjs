import Link from "next/link";
import { usePlausible } from "next-plausible";
import { useMatomo } from "matomo-tracker-for-react";

type Props = {
  ctaLink: string;
  ctaButton: string;
  noMdBreak: boolean;
  bgColor?: string;
  textColor?: string;
};

const CTAButton = ({
  ctaLink,
  ctaButton,
  noMdBreak,
  bgColor = "red",
  textColor = "white",
}: Props) => {
  const plausible = usePlausible();
  const { trackEvent } = useMatomo();
  const isExternal = /^https?:\/\//.test(ctaLink);

  const handleClick = () => {
    const id = ctaButton.trim().toLowerCase().replace(/\s+/g, "-");
    plausible("button-click", { props: { id } });
    trackEvent("button", "click", id);
  };

  return (
    <Link href={ctaLink} {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      {/* move styling in variables to also put CTA button in navbar */}
      <button
        className={`bg-${bgColor} text-${textColor} px-4 py-1 text-xl rounded-md ${
          !noMdBreak ? "md:px-8 md:py-2 xs:text-xs sm:text-sm md:text-xl md:rounded-lg lg:text-2xl" : ""
        }`}
        onClick={handleClick}
      >
        {ctaButton}
      </button>
    </Link>
  );
};

export default CTAButton;
