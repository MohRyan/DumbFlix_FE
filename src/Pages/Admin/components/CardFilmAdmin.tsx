import { useEffect, useState } from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Image500, ListMo } from '@/Pages/Home'
import { Link } from 'react-router-dom'
import { APIMovie, tokenKeyMovie } from '@/lib/api'


const CardFilmAdmin = () => {
    const [listMovie, setListMovie] = useState<ListMo[]>([])

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
        <div className='flex flex-col gap-5'>
            {/* <span className='pl-2 text-2xl font-bold text-white'>Movie</span> */}
            <div className="flex items-center justify-center">
                <Carousel className='relative'>
                    <CarouselContent className='flex flex-wrap px-5'>
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
    )
}

export default CardFilmAdmin