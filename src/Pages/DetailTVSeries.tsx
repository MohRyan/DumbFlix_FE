import { useEffect, useState } from 'react'
import { Image500 } from './Home'
import { APIMovie, tokenKeyMovie } from '@/lib/api'
import { useParams } from 'react-router-dom'

export interface IDetail {
    id: number
    backdrop_path: string
    first_air_date: string
    original_name: string
    vote_average: string
    origin_country: string[]
    overview: string
    popularity: number
    poster_path: string
    // movie
    release_date: string,
}

export interface ITrailer {
    id: string
    key: string
    type: string
    name: string
}

const DetailTVSeries = () => {
    const [detailTVSeries, setDetailTVSeries] = useState<IDetail[]>([])
    const [detailTrailerTVSeries, setDetailTrailerTVSeries] = useState<ITrailer[]>([])
    const params = useParams()


    useEffect(() => {
        // APIMovie.get("authentication", {
        // APIMovie.get("movie/changes?page=1", {
        APIMovie.get(`tv/${params.id}?language=en-US`, {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${tokenKeyMovie}`,
            },
        })
            .then((res) => {
                console.log(res.data)
                setDetailTVSeries(Array(res.data))
            })
            .catch()
        APIMovie.get(`tv/${params.id}/videos?language=en-US`, {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${tokenKeyMovie}`,
            },
        })
            .then((res) => {
                console.log(res.data.results)
                let officialTrailer = res.data.results.filter((n: ITrailer) => n.name === "Official Trailer")
                console.log("🚀 ~ .then ~ officialTrailer:", officialTrailer)
                setDetailTrailerTVSeries(officialTrailer)
            })
            .catch()
    }, [])
    return (
        <div className='w-full h-screen bg-first'>

            {
                detailTVSeries.map((item, index) => (
                    <div key={index}>
                        <div className="relative">
                            <div className="flex">
                                {
                                    detailTrailerTVSeries.map((n, index) => (
                                        <iframe key={index} width="" className='w-full' height="720" src={`https://www.youtube.com/embed/${n.key}`} title="Beetlejuice Beetlejuice Extended Movie Preview | Warner Bros. Entertainment" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen ></iframe>
                                    ))
                                }
                            </div>
                            {/* <img src={`${ImageOriginal}${item.backdrop_path}`} className='object-contain' height={"80%"} alt="" /> */}
                            <div className="absolute bottom-0 z-0 w-full h-10 bg-black bg-opacity-0 md:h-[300px] bg-gradient-to-t from-black"></div>
                        </div>
                        <div className="absolute flex items-center gap-20 bottom-12 w-full bg-[rgba(0,0,0,0.5)]">
                            {/* <div className="absolute flex items-center gap-20 bottom-12 left-10"> */}
                            <img src={`${Image500}${item.poster_path}`} className='object-contain h-80' alt="" />
                            <div className="flex flex-col gap-5 text-white max-w-80">
                                <span className='text-4xl font_TVSeries'>{item.original_name}</span>
                                <p className='line-clamp-5'>{item.overview}</p>
                                <div className="flex items-center gap-5">
                                    <span className='font-bold text-white group-hover/card:text-button'>{item.first_air_date.split("-").reverse().join("-")}</span>
                                    <span className='px-4 py-1 font-bold text-center border border-white rounded-full bg-none'>TV Series</span>
                                </div>

                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default DetailTVSeries