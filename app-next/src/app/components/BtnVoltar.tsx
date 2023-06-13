"use client"
import { useState } from 'react';
import { IoCaretBackCircleOutline, IoCaretBackCircleSharp } from 'react-icons/io5';

interface BtnVoltarProps {
    handlePrevious: () => void
}
export default function BtnVoltar(props: BtnVoltarProps) {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
        { props.handlePrevious() }

        setTimeout(() => {
            setClicked(false);
        }, 100);
    };


    return (
        <button onClick={handleClick}>

            {clicked ? (
                <IoCaretBackCircleSharp
                    size="2em"
                />
            ) : (
                <IoCaretBackCircleOutline
                    size="2em"
                />
            )}

        </button>
    );
}

