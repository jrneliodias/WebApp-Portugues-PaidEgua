import { ReactNode } from "react"

interface InputsProps {

    className?: string
    label?: string
    spanishLabel?: string
}

export function FormInputLabel(props: InputsProps) {
    return (
        <div className="flex flex-col">
            <label className=" text-white leading-none ">{props.label}</label>
            <label className="text-gray-400 italic ">{props.spanishLabel}</label>
        </div>
    )
}