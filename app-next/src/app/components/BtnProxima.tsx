"use client"
import { useState } from 'react';
import { IoCaretForwardCircleOutline, IoCaretForwardCircleSharp } from 'react-icons/io5';

export default function BtnProxima() {
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
                <IoCaretForwardCircleSharp
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    size="2em"
                />
            ) : (
                <IoCaretForwardCircleOutline
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    size="2em"
                />
            )}
        </div>
    );
}

