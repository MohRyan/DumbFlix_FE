import { useEffect, useState } from 'react'
import { Image500, ImageOriginal, ListMo } from './Home'
import { APIMovie, tokenKeyMovie } from '@/lib/api'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const Movie = () => {
    const [listMovie, setListMovie] = useState<ListMo[]>([])
    // const url_yt = `https://www.youtube.com/watch?v=${listM.map(e => e)}`
    // const url_yt = `https://www.youtube.com/embed/W2HXtyIYdfI`

    useEffect(() => {
        // APIMovie.get("authentication", {
        // APIMovie.get(`movie/${917496}/videos?language=en-US`, {
        APIMovie.get(`trending/movie/day?language=en-US`, {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${tokenKeyMovie}`,
            },
        })
            .then((res) => {
                // console.log(res)
                setListMovie(res.data.results)
            })
            .catch()
    }, [])
    return (
        <div className='bg-first'>
            <div className='relative'>
                <Carousel className='static z-0'
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                >
                    <CarouselContent className=''>
                        {
                            listMovie.map((item, index) => (
                                <CarouselItem key={index} className='relative w-screen'>
                                    <div className="absolute flex right-20 top-20">
                                        <CarouselNext className='' />
                                        <CarouselPrevious className='' />
                                    </div>
                                    <div className="absolute left-0 z-20 h-full w-[60%] bg-gradient-to-r from-black bg-opacity-30"></div>
                                    <img src={`${ImageOriginal}${item.backdrop_path}`} className='object-cover' alt="" />
                                    <div className="absolute z-20 flex flex-col gap-3 text-white md:gap-5 md:top-40 top-5 left-20 md:max-w-96 max-w-60">
                                        <span className='text-4xl font-bold md:text-6xl font_TVSeries line-clamp-2 '>{item.original_title}</span>
                                        <p className='line-clamp-2 md:line-clamp-5'>{item.overview}</p>
                                        <div className="flex items-center gap-3">
                                            <span className='font-bold'>{item.release_date.split("-").reverse().join("-")}</span>
                                            <span className='px-4 py-1 font-bold text-center border border-white rounded-full bg-none'>Movies</span>
                                        </div>
                                        <Link to={`/detailMovie/${item.id}`}>
                                            <Button className='text-2xl font-bold rounded-full font_title'>Watch Now</Button>
                                        </Link>
                                    </div>
                                </CarouselItem>
                            ))
                        }
                    </CarouselContent>
                </Carousel>
                <div className="absolute bottom-0 z-0 w-full h-20 bg-black bg-opacity-0 md:h-40 bg-gradient-to-t from-black"></div>
            </div>
            <div className='flex flex-col gap-5'>
                <span className='pl-2 text-2xl font-bold text-white'>Movie</span>
                <div className="flex items-center justify-center">
                    <Carousel className='relative'>
                        <CarouselContent className='flex flex-wrap w-screen px-5'>
                            {
                                listMovie.map((item, index) => (
                                    <CarouselItem key={index} className='pt-5 md:basis-1/5 basis-1/3'>
                                        <Link to={`/detailMovie/${item.id}`}>
                                            <div className="flex flex-col gap-6 cursor-pointer group/card">
                                                <img src={`${Image500}${item.poster_path}`} className='object-contain rounded-md' alt="" />
                                                <div className="flex flex-col">
                                                    <span className='font-bold text-white group-hover/card:text-button'>{item.original_title}</span>
                                                    <span className='font-bold text-white group-hover/card:text-button'>{item.release_date.split("-").reverse().join("-")}</span>
                                                </div>
                                            </div>
                                        </Link>
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
        </div>
    )
}

export default Movie