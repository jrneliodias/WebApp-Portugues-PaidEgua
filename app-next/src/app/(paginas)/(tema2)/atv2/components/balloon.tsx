import { IconRefresh, IconVolume } from "@tabler/icons-react";

export default function Balloon(props:any) {
  return (
    <div className="bg-[#8e7fbb] p-4 flex gap-3 rounded-[20px] grow justify-center">
    <div>
      <div className="flex grow gap-2">
        <div className="normal-text-font grow justify-center">{props.children}</div>
      </div>
    </div>
  </div>
  );
}
