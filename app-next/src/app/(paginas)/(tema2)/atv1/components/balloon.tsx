import { IconRefresh, IconVolume } from "@tabler/icons-react";

export default function Balloon(props:any) {
  return (
    <div className="bg-[#8e7fbb] p-4 flex gap-3 rounded-[20px] ">
    <div>
      <div className="flex gap-2">
        <div className="normal-text-font">{props.children}</div>
      </div>
    </div>
  </div>
  );
}
