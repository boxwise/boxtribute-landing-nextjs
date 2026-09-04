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
          !noMdBreak ? "md:px-8 md:py-2 md:text-2xl md:rounded-lg lg:text-3xl" : ""
        }`}
        onClick={() =>
          plausible("button-click", { props: { id: ctaButton.toLowerCase().replace(" ", "-") } })
        }
      >
        {ctaButton}
      </button>
    </Link>
  );
};

export default CTAButton;
