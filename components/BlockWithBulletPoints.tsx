import { ITextBlock } from "../pages/ourimpact";

// TODO: unify type definitions
type Props = {
  blockWithBulletPointsData: ITextBlock;
};

const BlockWithBulletPoints = ({ blockWithBulletPointsData }: Props) => {
  return (
    <div className="p-4">
      <h2>{blockWithBulletPointsData.title}</h2>
      <ul>
        {blockWithBulletPointsData.paragraphs.map((e, i) => (
          <li className="p-2" key={i}>
            {e.paragraph}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlockWithBulletPoints;
