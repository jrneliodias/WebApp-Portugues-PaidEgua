"use client"
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import BtnVoltar from './components/BtnVoltar';
import BtnProxima from './components/BtnProxima';
import BtnHome from './components/BtnHome';
import { pagesData } from '@/app/pages/pagesData'
import Image from "next/image";
import PersonagensPg0 from './images/personagens-pag0.png'
import Link from 'next/link';

export default function Home() {
  return (
      <div className="flex flex-col gap-5 justify-center items-center h-full mt-[20px] p-2">

          <div className="relative w-full h-full ">
              <Image
                  src={PersonagensPg0}
                  alt="personagens"
                  fill
                  className="object-contain"

              />
          </div>
          <div className="w-[300px] text-center text-xs">
              <p>
                  Desenvolvido pelo Laboratório de
                  Pesquisa e Experimentação em Multimídia do
                  NITAE - UFPA
              </p>
          </div>
         <footer className="fixed bottom-0 left-0 w-[100vw] h-[10vh] flex justify-center items-center">
           <div className="border-2 rounded-full bg-[--background-nav-app]">
             <div className="flex items-center  justify-between p-2 w-[300px] h-[50px]">
               <BtnVoltar  /> 
               <BtnHome />
               <Link  className="flex items-center" href={"/aboutapp"} passHref>
               <BtnProxima />
               </Link> 
             </div>
           </div>
         </footer> 

      </div>

  )

}

