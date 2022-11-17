import AnimatedNumber from "react-animated-number";

export type IFactInNumbers = {
  icon: string;
  number: number;
  description: string;
  image_description: string;
};

const FactInNumbers = ({
  icon,
  number,
  description,
  image_description,
}: IFactInNumbers) => {
  return (
    <div className="flex flex-col flex-1 items-center max-w-[200px] md:max-w-[300px] mx-auto">
      <div className="h-24 w-24 mb-4" >
        <img src={icon} alt={image_description} />
      </div>
      <h1>
        <AnimatedNumber
          value={number}
          duration={1500}
          formatValue={(n: number) => n.toFixed(0)}
        />
      </h1>
      <p className="text-center">{description}</p>
    </div>
  );
};

export default FactInNumbers;
