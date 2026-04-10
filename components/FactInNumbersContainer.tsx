import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import FactInNumbers, { IFactInNumbers } from "./FactInNumbers";
import { useMediaQuery } from "./MediaQuery";
import Image from "next/image";

type Props = {
  factInNumbers: IFactInNumbers[];
};

const FactInNumbersContainer = ({ factInNumbers }: Props) => {
  const isBreakpoint = useMediaQuery(768);

  const allFacts = factInNumbers.map((e, i) => (
    <FactInNumbers
      key={i}
      icon={e.icon}
      description={e.description}
      number={e.number}
      image_description={e.image_description}
    />
  ));

  // TODO: styling of the carousel
  return (
    <div className="my-8 md:my-16">
      {isBreakpoint ? (
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
          className="my-8"
        >
          {allFacts}
        </Carousel>
      ) : (
        <div className="flex flex-wrap gap-16">{allFacts}</div>
      )}
    </div>
  );
};

export default FactInNumbersContainer;
