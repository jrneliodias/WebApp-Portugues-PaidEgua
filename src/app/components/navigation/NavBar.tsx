"use client"
import Link from 'next/link';
import { routeData } from '@/app/data/routeData';
import {BsHouseDoor} from 'react-icons/bs'
import { motion } from "framer-motion"
import { IoCaretBackCircleOutline, IoCaretForwardCircleOutline } from 'react-icons/io5';
interface NavBarProps {
    currentRoute: string;
}
export default function NavBar(props: NavBarProps) {

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
                    <motion.button
                     whileHover={{ scale: 1.2 }}
                     whileTap={{ scale: 0.9 }}
                    >
                    <Link className="flex items-center" href={`${previousRoute}`} passHref>
                    <IoCaretBackCircleOutline size={"2em"} />
                        {/* <BtnVoltar /> */}
                    </Link>
                    </motion.button>
                    <motion.button
                     whileHover={{ scale: 1.2 }}
                     whileTap={{ scale: 0.9 }}
                    >
                        <Link className="flex items-center" href={"/menuroutes"} passHref>
                            <BsHouseDoor size="2em" />
                            {/* <BtnHome /> */}
                        </Link>
                    </motion.button>
                    <motion.button
                     whileHover={{ scale: 1.2 }}
                     whileTap={{ scale: 0.9 }}
                    >
                    <Link className="flex items-center" href={`${nextRoute}`} passHref>
                    <IoCaretForwardCircleOutline size={"2em"} />
                    </Link>
                      </motion.button>

                </div>
            </div>
        </footer>
    );
}

