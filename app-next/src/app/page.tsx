"use client"
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import BtnVoltar from './components/BtnVoltar';
import BtnProxima from './components/BtnProxima';
import BtnHome from './components/BtnHome';
import { pagesData } from '@/app/pages/pagesData'

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
    <div className='h-full flex flex-col'>

        <CurrentText />

        {/* <footer className="fixed bottom-0 left-0 w-[100vw] h-[10vh] flex justify-center items-center">
          <div className="border-2 rounded-full bg-[--background-nav-app]">
            <div className="flex items-center  justify-between p-2 w-[300px] h-[50px]">
              <BtnVoltar handlePrevious={handlePrevious} />
              <BtnHome />
              <BtnProxima handleNext={handleNext} />
            </div>
          </div>
        </footer> */}
      </div>
    
  )

}

