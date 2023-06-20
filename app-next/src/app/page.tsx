"use client"
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import BtnVoltar from './components/BtnVoltar';
import BtnProxima from './components/BtnProxima';
import BtnHome from './components/BtnHome';
import { pagesData } from '@/app/pages/pages'

const pagesComponent = Array.from({ length: pagesData.length }, (_, index) => {
  const selectedPage = pagesData.find((page) => page.id === index);
  if(selectedPage){
    return dynamic(() => import(`./pages/${selectedPage.component}.tsx`))
  }
  return dynamic(() => import(`./pages/CoverApp`))
});


export default function Home() {
  const [currentTextIndex, setCurrentComponentIndex] = useState(0);
  const CurrentText = pagesComponent[currentTextIndex];

  const handlePrevious = () => {
    setCurrentComponentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : pagesComponent.length - 1
    );
  };

  const handleNext = () => {
    setCurrentComponentIndex((prevIndex) =>
      prevIndex < pagesComponent.length - 1 ? prevIndex + 1 : 0
    );

  };

  return (
    <html className='h-full bg-gradient-radial from-[#7835bf]  to-[#58229eff]'>
      <body className="text-white pb-[100px] h-full ">

        <CurrentText />

        <footer className="fixed bottom-0 left-0 z-20 w-[100vw] h-[10vh] flex justify-center items-center mt-20">
          <div className="border-2 rounded-full bg-[--background-nav-app]">
            <div className="flex items-center  justify-between p-2 w-[300px] h-[50px]">
              <BtnVoltar handlePrevious={handlePrevious} />
              <BtnHome />
              <BtnProxima handleNext={handleNext} />
            </div>
          </div>
        </footer>
      </body>
    </html>
  )

}

