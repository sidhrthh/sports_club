"use client"
import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

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
          <img  src="https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Description of Image 1" />
          </div>
          <div className="embla__slide w-9/12	 ">
            <img src="https://images.pexels.com/photos/598656/pexels-photo-598656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="imagw-2" />
          </div>
          <div className="embla__slide w-9/12	">
            <img src="https://images.pexels.com/photos/67870/lacrosse-air-force-ohio-state-game-67870.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image-3" />
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
