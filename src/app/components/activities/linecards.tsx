import { IconRefresh, IconVolume } from "@tabler/icons-react";
import { WordCard } from "../cards/card";

interface lineCardsProps {
  text: string[];
}
export default function LineCards(props: lineCardsProps) {
  const textarray = props.text;
  let divs = [];
  return (
    <div className="flex flex-col  gap-4 my-3">
      <div className="flex flex-wrap gap-1">
        {textarray.map((item, index) => (
          <WordCard key={index}>{item}</WordCard>
        ))}
      </div>

      <div className="flex gap-1">
        <div className="flex gap-1 p-1">
          <IconVolume />
          <IconRefresh />
        </div>
        {
          (divs = Array.from({ length: textarray.length }, (_, index) => (
            <div className="grow border-b-2" key={index}></div>
          )))
        }
      </div>
    </div>
  );
}
