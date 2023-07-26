import { IconKeyboard } from "@tabler/icons-react";
import { WordCard } from "../cards/card";
import SpanishText from "../basics/spanishtext";

export default function ActTextInput(props: any) {
    return (
        <div className="flex flex-col gap-3">
            <WordCard className="justify-center italic font-bold">
                {props.children}
            </WordCard>
            <div className="flex gap-3 p-2">
                <IconKeyboard size={30} stroke={1.5} />
                <input className="grow bg-transparent border-b p-1 focus:outline-none hover:bg-cardcolor" />
            </div>
        </div>
    );
}