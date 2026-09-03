import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import CaseStudyCard, { ICaseStudyData } from "./CaseStudyCard";
import { useMediaQuery } from "./MediaQuery";

type Props = {
  caseStudies: ICaseStudyData[];
};

const CaseStudiesContainer = ({ caseStudies }: Props) => {
  const isBreakpoint = useMediaQuery(768);

  const allCards = caseStudies.map((caseStudy, i) => (
    <CaseStudyCard key={i} caseStudy={caseStudy} />
  ));

  return isBreakpoint ? (
    <Carousel
      showThumbs={false}
      statusFormatter={() => ""}
      renderIndicator={() => ""}
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            className="absolute top-1/2 z-10 translate-y-[-50%]"
          >
            <Image
              alt="previous"
              src="/assets/svg/arrow_red_bg.svg"
              width={40}
              height={40}
              className="rotate-90 w-[40px] h-[40px]"
            />
          </button>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            className="absolute top-1/2 right-0 z-10 translate-y-[-50%]"
          >
            <Image
              alt="next"
              src="/assets/svg/arrow_red_bg.svg"
              width={40}
              height={40}
              className="-rotate-90 w-[40px] h-[40px]"
            />
          </button>
        )
      }
      infiniteLoop
      showArrows={true}
    >
      {allCards}
    </Carousel>
  ) : (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-0">{allCards}</div>
  );
};

export default CaseStudiesContainer;
