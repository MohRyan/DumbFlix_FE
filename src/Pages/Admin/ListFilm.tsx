import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from '@/components/ui/button'
import CardFilmAdmin from './components/CardFilmAdmin'
import { Link } from 'react-router-dom'

const ListFilm = () => {
    return (
        <div>
            <div className="flex flex-col p-10 bg-first">
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center text-white w-[80%] md:w-[40%] gap-5 ">
                        <b className='md:w-[90%] text-3xl w-full'>List Film</b>
                        <Select>
                            <SelectTrigger className="w-full bg-gray-500">
                                <SelectValue placeholder="Type Film" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Type Film</SelectLabel>
                                    <SelectItem value="TVSeries">TVSeries</SelectItem>
                                    <SelectItem value="Movies">Movies</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
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
                    </div>
                    <Link to={"/admin/addFilm"}>
                        <Button>Add Film</Button>
                    </Link>
                </div>
                <div className="flex">
                    <CardFilmAdmin />
                </div>
            </div>
        </div>
    )
}

export default ListFilm