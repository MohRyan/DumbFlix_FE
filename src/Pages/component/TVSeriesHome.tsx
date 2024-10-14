import { useEffect, useState } from 'react'
import { Image500, ListTV } from '../Home'
import { APIMovie, tokenKeyMovie } from '@/lib/api'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

const TVSeriesHome = () => {
    const [listTVHome, setListTVHome] = useState<ListTV[]>([])

    useEffect(() => {
        // APIMovie.get("authentication", {
        // APIMovie.get("movie/changes?page=1", {
        APIMovie.get(`trending/tv/day?language=en-US`, {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${tokenKeyMovie}`,
            },
        })
            .then((res) => {
                // console.log(res)
                setListTVHome(res.data.results)
            })
            .catch()
    }, [])
    return (
        <div className='flex flex-col gap-5'>
            <span className='pl-2 text-2xl font-bold text-white'>TV Series</span>
            <div className="flex items-center justify-center">
                <Carousel className='relative'>
                    <CarouselContent className='flex w-screen px-5'>
                        {
                            listTVHome.map((item, index) => (
                                <CarouselItem key={index} className='md:basis-1/5 basis-1/3'>
                                    <div className="flex flex-col gap-6 cursor-pointer group/card">
                                        <img src={`${Image500}${item.poster_path}`} className='object-contain rounded-md' alt="" />
                                        <div className="flex flex-col">
                                            <span className='font-bold text-white group-hover/card:text-button'>{item.original_name}</span>
                                            <span className='font-bold text-white group-hover/card:text-button'>{item.first_air_date.split("-").reverse().join("-")}</span>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))
                        }
                    </CarouselContent>
                    <div className="absolute hidden">
                        <CarouselPrevious />
                        <CarouselNext />
                    </div>
                </Carousel>
            </div>
        </div>
    )
}

export default TVSeriesHome