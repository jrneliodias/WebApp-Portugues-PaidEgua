"use client"
import { useState } from 'react';
import { IoCaretBackCircleOutline, IoCaretBackCircleSharp } from 'react-icons/io5';

export default function BtnVoltar() {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div>
            {isHovered ? (
                <IoCaretBackCircleSharp
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    size="2em"
                />
            ) : (
                <IoCaretBackCircleOutline
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    size="2em"
                />
            )}
        </div>
    );
}

