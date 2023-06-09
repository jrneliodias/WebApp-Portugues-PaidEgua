"use client"
import { useState } from 'react';
import { IoCaretForwardCircleOutline, IoCaretForwardCircleSharp } from 'react-icons/io5';
import Link from 'next/link';

export default function BtnProxima() {
    const [currentPage, setCurrentPage] = useState(0);
    const totalPages = 2;

    const [isHovered, setIsHovered] = useState<boolean>(false);

    const goToNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div>
            <Link href={`/paginas/pag${currentPage + 1}`} onClick={goToNextPage}>
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
            </Link>
        </div >
    );
}

