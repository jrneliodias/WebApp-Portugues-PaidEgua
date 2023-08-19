interface QuestionsProps {
    children: any
    className?: string
}

export function Question(props: QuestionsProps) {
    return (
        <div className={`flex flex-col gap-2 ${props.className}`}>
            {props.children}
        </div>
    )
}

export function Options(props: QuestionsProps) {
    return (
        <div className={` flex gap-3 items-center ${props.className}`}>

            <input type="checkbox" name="" id="" className="bg-transparent" />
            {props.children}

        </div>
    )
}