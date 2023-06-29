"use client"
import { useState } from 'react';
import Link from 'next/link';
import BtnVoltar from './BtnVoltar';
import BtnHome from './BtnHome';
import BtnProxima from './BtnProxima';
import { routeData } from '@/app/data/routeData';

interface NavBarProps {
    currentRoute: string;
}
export default function NavBar(props:NavBarProps) {

    // Find the ID of the current route
    const currentRouteData = routeData.find((route) => route.route === props.currentRoute);
    const currentId = currentRouteData?.id;

    // Find the previous and next IDs
    const previousId = currentId && currentId > 0 ? currentId - 1 : 1;
    const nextId = currentId && currentId < routeData.length ? currentId + 1 : currentId;

    // Find the previous and next routes based on the IDs
    const previousRoute = previousId ? routeData.find((route) => route.id === previousId)?.route : "/";
    console.log(previousRoute)
    const nextRoute = nextId ? routeData.find((route) => route.id === nextId)?.route : "/";
    console.log(nextRoute)


    return (
        <footer className="fixed bottom-0 left-0 w-[100vw] h-[10vh] flex justify-center items-center">
            <div className="border-2 rounded-full bg-[--background-nav-app]">
                <div className="flex items-center  justify-between p-2 w-[300px] h-[50px]">
                    <Link className="flex items-center" href={`${previousRoute}`} passHref>
                        <BtnVoltar />
                    </Link>
                    <Link className="flex items-center" href={"/"} passHref>
                        <BtnHome />
                    </Link>
                    <Link className="flex items-center" href={`${nextRoute}`} passHref>
                        <BtnProxima />
                    </Link>
                </div>
            </div>
        </footer>
    );
}

