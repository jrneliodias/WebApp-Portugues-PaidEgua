import { IconKeyboard, IconRefresh, IconVolume } from "@tabler/icons-react";
import Balloon from "./balloon";
interface lineballoonProps {
  text: string;
}
export default function LineballoonWrite(props: lineballoonProps) {
  const textarray = props.text;
  return (
    <div className="flex flex-col  gap-4">
      <div className="flex flex-wrap justify-center gap-1">
          <Balloon>{textarray}</Balloon>
      </div>

      <div className="flex gap-1">
        <div className="flex gap-1 p-1">
          <IconKeyboard />
        </div>
            <div className="grow border-b-2"></div>
      </div>
    </div>
  );
}
