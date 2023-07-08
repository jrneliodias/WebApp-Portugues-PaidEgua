"use client"
import Link from 'next/link';
import BtnVoltar from './BackBtn';
import BtnHome from './BtnHome';
import BtnProxima from './NextBtn';
import { routeData } from '@/app/data/routeData';

interface NavBarProps {
    currentRoute: string;
}
export default function NavBar(props:NavBarProps) {

    // Find the ID of the current route
    const currentRouteData = routeData.find((route) => route.route === props.currentRoute);
    const currentId = currentRouteData?.id;
    // console.log(currentId)

    // Find the previous and next IDs
    const previousId = currentId && currentId > 0 ? currentId - 1 : 1;
    const nextId = currentId && currentId < routeData.length ? currentId + 1 : currentId;

    // Find the previous and next routes based on the IDs
    const previousRoute = previousId ? routeData.find((route) => route.id === previousId)?.route : "/";
    // console.log(previousRoute)
    const nextRoute = nextId ? routeData.find((route) => route.id === nextId)?.route : "/";
    // console.log(nextRoute)


    return (
        <footer className=" bg-[--background-app] fixed bottom-0 left-0 right-0 h-20 w-full flex justify-center items-center">
            <div className="border-2 rounded-full bg-[--background-nav-app]">
                <div className="flex items-center  justify-between p-2 w-[300px] h-[50px]">
                    <Link className="flex items-center" href={`${previousRoute}`} passHref>
                        <BtnVoltar />
                    </Link>
                    <Link className="flex items-center" href={"/menuroutes"} passHref>
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

