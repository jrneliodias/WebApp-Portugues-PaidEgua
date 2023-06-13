"use client"
import { useState } from 'react';
import Link from 'next/link';
import BtnVoltar from './BtnVoltar';
import BtnHome from './BtnHome';
import BtnProxima from './BtnProxima';

export default function NavBar() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 2;

    const goToNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    const goToPreviousPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };


    return (
        <div className="flex items-center justify-between w-[300px] h-[50px]">
            <Link className='p-2' href={`/paginas/pag${currentPage}`} onClick={goToPreviousPage}>
                <BtnVoltar />
            </Link>
            <BtnHome />
            <Link className='p-2' href={`/paginas/pag${currentPage}`} onClick={goToPreviousPage}>
                <BtnProxima />
            </Link>
        </div >
    );
}

