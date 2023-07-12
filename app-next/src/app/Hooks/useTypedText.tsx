import { useEffect, useState } from "react"

enum Phase {
    Typing,
    Pausing,
    Deleting
}

const TYPING_INTERVAL = 30
const PAUSE_INTERVAL = 5000;
const DELETING_INTERVAL = 20;

export const useTypedText = (textToType: string[]) => {
    const [selectedIndex,setSelectedIndex] = useState(0)
    const [phase, setPhase] = useState(Phase.Typing)

    const [typedText, setTypedText] = useState('')

    useEffect(() => {

        switch (phase) {
            case Phase.Typing: {
                const nextTypedText = textToType[selectedIndex].slice(
                    0,
                    typedText.length + 1
                )

                if (nextTypedText === typedText) {
                    setPhase(Phase.Pausing)
                    return
                }

                const timeout = setTimeout(() => {
                    setTypedText(nextTypedText)
                }, TYPING_INTERVAL)

                return () => clearTimeout(timeout)
            }

            case Phase.Deleting: {
                const nextIndex = selectedIndex + 1
                if(!textToType[nextIndex]){return}
                if (!typedText) {
                    if (textToType[nextIndex]){
                        setSelectedIndex(nextIndex)
                       
                    }else{
                      
                        return
                    }
                    setPhase(Phase.Typing)
                    return
                }
                const nextRemaining = textToType[selectedIndex].slice(
                    0,
                    typedText.length - 1
                )


                const timeout = setTimeout(() => {
                    setTypedText(nextRemaining)
                }, DELETING_INTERVAL)

                return () => clearTimeout(timeout)
            }
            case Phase.Pausing:
            default:
                const timeout = setTimeout(() => {
                    setPhase(Phase.Deleting)
                }, PAUSE_INTERVAL)

                return () => clearTimeout(timeout)
        }


    }, [typedText, selectedIndex, textToType, phase])

    return typedText

}