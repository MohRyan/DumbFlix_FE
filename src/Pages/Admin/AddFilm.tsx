import { useEffect, useState } from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { GoPaperclip } from "react-icons/go";
import { Button } from '@/components/ui/button'

interface IFilmEps {
    title_episode: string,
    link_film: string,
    thumbnail_episode: string
}

const AddFilm = () => {
    function addFilmEpisode() {
        setCountAddEps(countAddEps + 1)
    }
    function deleteCountFilmEpisode() {
        setFilmEpisode([{
            title_episode: "",
            link_film: "",
            thumbnail_episode: ""
        }])
        // setCountAddEps(0)
    }
    const [countAddEps, setCountAddEps] = useState<number>(1)
    console.log("🚀 ~ AddFilm ~ countAddEps:", countAddEps)
    const [typeFilm, setTypeFilm] = useState<string>("")
    // const [categoryFilm, setCategoryFilm] = useState<string>("")
    const [filmEpisode, setFilmEpisode] = useState<IFilmEps[]>([
        {
            title_episode: "",
            link_film: "",
            thumbnail_episode: ""
        }
    ])
    useEffect(() => {
        setFilmEpisode([])
    }, [])


    console.log("🚀 ~ AddFilm ~ filmEpisode:", filmEpisode)
    console.log("🚀 ~ AddFilm ~ filmEpisode:", filmEpisode.length)
    useEffect(() => {
        if (typeFilm === "TVSeries") {
            if (countAddEps > 1) {
                filmEpisode.push({
                    title_episode: "",
                    link_film: "",
                    thumbnail_episode: ""
                })
            } else if (filmEpisode.length !== countAddEps) {
                setCountAddEps(1)
            } else if (countAddEps >= 5) {
                filmEpisode.pop()
            }
        }

    }, [countAddEps, filmEpisode])

    return (
        <div className='container flex flex-col justify-center gap-10 p-10 text-white gap bg-first'>
            <b className='text-3xl'>Add Film</b>
            <div className="flex flex-col gap-3">
                <div className="flex justify-between w-full h-10 gap-2">
                    <input type="text" placeholder='Title' className='w-full pl-3 rounded-sm' />
                    <label htmlFor="thumbnail" className="flex bg-gray-500 rounded-sm border border-white items-center gap-3 md:w-[20%] w-[50%] justify-center">Attach Thumbnail <span className='text-red-500'><GoPaperclip /></span></label>
                    <input type="file" className='hidden' id='thumbnail' />
                </div>
                <input type="number" placeholder='Year' className='h-10 pl-3 rounded-sm' />
                <Select>
                    <SelectTrigger className="w-full bg-gray-500">
                        <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Category Film</SelectLabel>
                            <SelectItem value="Action">Action</SelectItem>
                            <SelectItem value="Drama">Drama</SelectItem>
                            <SelectItem value="Commedy">Commedy</SelectItem>
                            <SelectItem value="Romance">Romance</SelectItem>
                            <SelectItem value="Fight">Fight</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Select onValueChange={e => {
                    if (e === "TVSeries") {
                        deleteCountFilmEpisode()
                    }
                    setTypeFilm(e)
                }}>
                    <SelectTrigger className="w-full bg-gray-500">
                        <SelectValue placeholder="Type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Type Film</SelectLabel>
                            <SelectItem value="TVSeries">TV Series</SelectItem>
                            <SelectItem value="Movie">Movie</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <textarea placeholder='Description' className='p-3 text-white bg-gray-500 rounded-sm min-h-32 max-h-60' />
            </div>
            {
                typeFilm === "TVSeries" ?
                    <div className="flex flex-col gap-5">
                        <b className='text-3xl'>Add Episode</b>
                        <div className="flex flex-col w-full gap-5">
                            {
                                filmEpisode.map((_, index) => (
                                    <div key={index} className="flex gap-3">
                                        <b className='text-3xl'>{index + 1}</b>
                                        <div className='flex flex-col w-full gap-2'>
                                            <div className="flex justify-between gap-2">
                                                <input type="text" onChange={(e) => {
                                                    const updatedFilmEpisode = [...filmEpisode];
                                                    updatedFilmEpisode[index].title_episode = e.target.value;
                                                    setFilmEpisode(updatedFilmEpisode);
                                                }} placeholder='Title Episode' className='w-full h-10 pl-3 rounded-sm' />
                                                <label htmlFor="thumbnail_episode" className="flex bg-gray-500 rounded-sm border border-white items-center gap-3 md:w-[20%] w-[50%] justify-center">Attach Thumbnail <span className='text-red-500'><GoPaperclip /></span></label>
                                                <input type="file" className='hidden' id='thumbnail_episode' />
                                            </div>
                                            <input type="text" placeholder='Link Film' className='h-10 pl-3 rounded-sm' />
                                        </div>
                                    </div>
                                ))
                            }
                            <Button onClick={deleteCountFilmEpisode} className={`text-2xl text-red-500 bg-gray-300 hover:text-white ${filmEpisode.length > 1 ? "" : "hidden"}`}>Reset</Button>
                            <Button onClick={addFilmEpisode} className={`text-2xl text-red-500 bg-gray-300 hover:text-white ${countAddEps >= 4 ? "hidden" : ""}`}>+</Button>
                        </div>
                    </div>
                    :
                    ""
            }
            <div className="flex justify-end">
                <Button className='w-52'>Save</Button>
            </div>
        </div>
    )
}

export default AddFilm