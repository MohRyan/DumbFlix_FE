import React, { useEffect, useState } from 'react'
import { ImageOriginal } from '../Home'
import { APIMovie, tokenKeyMovie } from '@/lib/api'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { Button } from '@/components/ui/button'
import Autoplay from "embla-carousel-autoplay"
// import { EmblaCarouselType, EmblaPluginType } from "embla-carousel-react";

type AutoplayPlugin = ReturnType<typeof Autoplay>;

interface ListAll {
    adult: boolean
    backdrop_path: string
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: string
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
    original_name: string
    first_air_date: string
    name: string
}

const Hero = () => {
    const [listMovieHero, setListMovieHero] = useState<ListAll[]>([])
    const [listTVHero, setListTVHero] = useState<ListAll[]>([])
    const combineAll = listTVHero.concat(listMovieHero)
    useEffect(() => {
        // APIMovie.get("authentication", {
        // APIMovie.get("movie/changes?page=1", {
        APIMovie.get(`trending/movie/day?language=en-US`, {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${tokenKeyMovie}`,
            },
        })
            .then((res) => {
                // console.log(res)
                setListMovieHero(res.data.results)
            })
            .catch()
        APIMovie.get(`trending/tv/day?language=en-US`, {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${tokenKeyMovie}`,
            },
        })
            .then((res) => {
                // console.log(res)
                setListTVHero(res.data.results)
            })
            .catch()
    }, [])

    // Type for the autoplay plugin
    const plugin: any = React.useRef<AutoplayPlugin>(
        Autoplay({ delay: 3000, stopOnInteraction: true })
    )
    return (
        <div className='relative'>
            <Carousel className='static z-10'
                plugins={[plugin.current]}
                // className="w-full max-w-xs"
                onMouseLeave={plugin.current.reset}
                // onMouseEnter={plugin.current.stop}
                opts={{
                    align: "start",
                    loop: true,
                }}
            >
                <CarouselContent className=''>
                    {
                        combineAll.map((item, index) => (
                            <CarouselItem key={index} className='relative w-screen'>
                                <img src={`${ImageOriginal}${item.backdrop_path}`} className='object-cover' alt="" />
                                <div className="absolute z-20 flex flex-col gap-3 text-white md:gap-5 md:top-40 top-12 left-20 md:max-w-80 max-w-60">
                                    <span className='text-4xl font-bold md:text-6xl font_title'>{item.original_title || item.original_name}</span>
                                    <p className='line-clamp-2 md:line-clamp-3'>{item.overview}</p>
                                    <div className="flex items-center gap-3">
                                        <span className='font-bold'>{item.release_date}</span>
                                        <span className='px-4 py-1 font-bold text-center border border-white rounded-full bg-none'>Movie</span>
                                    </div>
                                    {/* <Link > */}
                                    <Button className='text-2xl font-bold rounded-full font_title'>Watch Now</Button>
                                    {/* </Link> */}
                                </div>
                                <div className="absolute top-0 left-0 z-0 w-[40%] bg-black bg-opacity-0 h-80 md:h-[1805px] bg-gradient-to-r from-black"></div>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                {/* <CarouselPrevious />
                <CarouselNext /> */}
            </Carousel>
            {/* <div className="absolute bottom-0 z-0 w-full bg-black bg-opacity-0 h-80 md:h-40 bg-gradient-to-t from-black"></div> */}
        </div>
    )
}

export default Hero