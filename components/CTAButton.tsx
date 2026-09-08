import Link from "next/link";
import { usePlausible } from "next-plausible";

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
  const isExternal = /^https?:\/\//.test(ctaLink);
  return (
    <Link href={ctaLink} {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      {/* move styling in variables to also put CTA button in navbar */}
      <button
        className={`bg-${bgColor} text-${textColor} px-4 py-1 text-xl rounded-md ${
          !noMdBreak ? "md:px-8 md:py-2 sm:text-sm md:text-xl md:rounded-lg lg:text-2xl" : ""
        }`}
        onClick={() =>
          plausible("button-click", { props: { id: ctaButton.trim().toLowerCase().replace(/\s+/g, "-") } })
        }
      >
        {ctaButton}
      </button>
    </Link>
  );
};

export default CTAButton;
