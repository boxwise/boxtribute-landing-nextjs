import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import FactInNumbers, { IFactInNumbers } from "./FactInNumbers";
import { useMediaQuery } from "./MediaQuery";

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
    <div >
      {isBreakpoint ? <Carousel infiniteLoop showArrows={true}>{allFacts}</Carousel> : <div className="flex md:flex-wrap">{allFacts}</div>}
    </div>
  );
};

export default FactInNumbersContainer;
