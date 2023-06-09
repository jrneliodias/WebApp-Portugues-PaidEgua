"use client"
import Link from 'next/link';
import { useState } from 'react';
import { IoCaretBackCircleOutline, IoCaretBackCircleSharp } from 'react-icons/io5';

export default function BtnVoltar() {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState(1);


    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const goToPreviousPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 2));
    };


    return (
        <div>
            <Link href={`/paginas/pag${currentPage - 1}`} onClick={goToPreviousPage}>
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
            </Link>
        </div>
    );
}

