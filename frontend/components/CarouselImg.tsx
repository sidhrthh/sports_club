"use client"
import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import cricket from "../public/cricket.jpg"
import football from "../public/football.jpg"
import basketball from "../public/basketball.jpg"


export default function CarouselImg() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3500 })])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="relative embla w-full">
      <div className="embla__viewport " ref={emblaRef}>
        <div className="embla__container ">
          <div className="embla__slide w-9/12	">
          <Image src={cricket} alt='Cricket_offer'/>
          </div>
          <div className="embla__slide w-9/12	 ">
          <Image src={football} alt='football_offer' />
          </div>
          <div className="embla__slide w-9/12	">
          <Image src={basketball} alt='Basketball_offer' />
          </div>
        </div>
      </div>
      <div>
        <button className="embla__prev  absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full" onClick={scrollPrev}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>

        </button>
        <button className="embla__next absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full" onClick={scrollNext}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>

        </button>
      </div>
    </div>
  )
}
