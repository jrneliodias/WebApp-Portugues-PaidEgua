"use client"
import Image, { StaticImageData } from "next/image";
import treeboy1 from "@/app/images/treeboy1.png"
import treeboy2 from "@/app/images/treeboy2.png"
import treeboy3 from "@/app/images/treeboy3.png"
import { useEffect, useState } from "react";



const images = [
    treeboy1,
    treeboy2,
    treeboy3,
]
export default function ImageCarousel() {


    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [isCycling, setIsCycling] = useState(false);

    useEffect(() => {
        let intervalId: NodeJS.Timeout;

        const cycleImages = () => {
            intervalId = setInterval(() => {
                setCurrentIndex((prevIndex) => {
                    const nextIndex = (prevIndex + 1) % images.length;
                    if (nextIndex === 0) {
                        setIsCycling(false);
                    }
                    return nextIndex;
                })
            }, 800);

        };

        if (isCycling) {
            cycleImages();
        };

        return () => {
            clearTimeout(intervalId);
        };

    }, [isCycling])

    const handleClick = () => {
        setIsCycling((prevState) => !prevState);

    }


    return (
        <div className="flex justify-center relative w-full min-h-[250px]">
            <Image
                src={images[currentIndex]}
                fill
                alt="personagem-acai"
                className={`object-contain`}
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                onClick={handleClick}

            />
        </div>
    );
}