import { IconRefresh, IconVolume } from "@tabler/icons-react";
import Balloon from "./balloon";
interface lineballoonProps {
  text: string[];
}
export default function Lineballoon(props: lineballoonProps) {
  const textarray = props.text;
  var divs = [];
  return (
    <div className="flex flex-col  gap-4">
      <div className="flex flex-wrap gap-1">
        {textarray.map((item, index) => (
          <Balloon key={index}>{item}</Balloon>
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
