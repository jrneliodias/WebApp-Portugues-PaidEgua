"use client"
import { useState } from 'react';
import { BsHouseDoor, BsHouseDoorFill } from 'react-icons/bs';


interface BtnHomeProps {

}

export default function BtnHome() {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);

        setTimeout(() => {
            setClicked(false);
        }, 100);
    };

    return (
        <button onClick={handleClick}>
            {clicked ? (
                <BsHouseDoorFill
                    size="2em"
                />
            ) : (
                <BsHouseDoor
                    size="2em"
                />
            )}
        </button>
    );
}

