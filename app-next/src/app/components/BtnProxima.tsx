import { useState } from 'react';
import { IoCaretForwardCircleOutline, IoCaretForwardCircleSharp } from 'react-icons/io5';

interface BtnProximaProps {
    handleNext: () => void
}

export default function BtnProxima(props:BtnProximaProps) {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
        {props.handleNext()}

        setTimeout(() => {
            setClicked(false);
        }, 100);
    };
    return (
        <button onClick={handleClick}>
            {clicked ? (
                <IoCaretForwardCircleSharp
                    size="2em"
                />
            ) : (
                <IoCaretForwardCircleOutline
                    size="2em"
                />
            )}
        </button >
    );
}

