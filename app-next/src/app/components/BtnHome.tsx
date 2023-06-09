"use client"
import { useState } from 'react';
import { BsHouseDoor,BsHouseDoorFill } from 'react-icons/bs';

export default function BtnHome() {
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
                <BsHouseDoorFill
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    size="2em"
                />
            ) : (
                <BsHouseDoor
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    size="2em"
                />
            )}
        </div>
    );
}

