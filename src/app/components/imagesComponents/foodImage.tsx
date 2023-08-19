"use client"
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import ActTextInput from '../activities/actinput';
import { IconKeyboard } from '@tabler/icons-react';

interface PersonagemProps {
  imgSource: StaticImageData;
  className?: string
}
export default function FoodImage(props: PersonagemProps) {
  return (
    <div className={`flex  ${props.className}`}>

      <div className="flex flex-col justify-center items-center w-1/4">
        <IconKeyboard size={30} stroke={1.5} />
        <input type="text" className='m-2 w-1/2 border bg-cardcolor rounded-lg text-center p-1'/>
      </div>
      <div className="relative h-full w-3/4">
        <Image
          src={props.imgSource}
          alt='food picture'
          fill
          className='object-cover rounded-xl border-2 '

        />
      </div>
    </div>
  )
}

export function ChargeImage(props: PersonagemProps) {
  return (
    <div className={`flex relative w-full max-w-[546px] max-h-[280px] ${props.className}`}>
      <Image
        src={props.imgSource}
        alt='charge picture'
        height={418}
        width={823}
        className='object-contain rounded-xl border-2 '

      />
    </div>
  )
}