import Image from 'next/image'
import React from 'react'

export default function foodImage({imageSource}:any) {
  return (
    <Image
    src={imageSource}
    alt='food picture'
    />
  )
}
