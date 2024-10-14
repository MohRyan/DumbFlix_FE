import Hero from './component/Hero'
import MovieHome from './component/MovieHome'
import TVSeriesHome from './component/TVSeriesHome'

export interface ListMo {
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
}
export interface ListTV {
    adult: boolean
    backdrop_path: string
    id: number
    original_language: string
    original_name: string
    overview: string
    popularity: string
    poster_path: string
    first_air_date: string
    name: string
    video: boolean
    vote_average: number
    vote_count: number
}

export let Image500 = "https://image.tmdb.org/t/p/w500"
export let ImageOriginal = "https://image.tmdb.org/t/p/original"

const Home = () => {

    return (
        <div className='relative bg-first'>
            <section className='max-h-[700px]'>
                <Hero />
            </section>
            <div className="flex flex-col gap-5 px-5 md:gap-10">
                <section className='relative'>
                    <MovieHome />
                </section>
                <section>
                    <TVSeriesHome />
                </section>
            </div>
        </div>
    )
}

export default Home