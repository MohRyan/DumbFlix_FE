import { ImageOriginal } from "@/Pages/Home";
import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { wallpaperRandom } from "./Login";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { API } from "@/lib/api";


let result = Math.random().toString().split('').pop()

interface IRegister {
  email: string
  password: string
  fullname: string
  gender: string
  typeUsers: string
  phone: string
  address: string
}

const Register = () => {

  const [adminSet, setAdminSet] = useState<boolean>(false)
  const [dataRegister, setDataRegister] = useState<IRegister>({
    email: "",
    password: "",
    fullname: "",
    gender: "",
    typeUsers: `${!adminSet ? "User" : "Admin"}`,
    phone: "",
    address: "",
  })

  const navigate = useNavigate()

  async function RegisterDumbFlix(e: FormEvent) {
    e.preventDefault()
    try {
      await API.post("/register", dataRegister)
      // console.log("🚀 ~ LoginDumbFlix ~ res:", res.data.user)
      // localStorage.setItem("token", token)
      navigate("/auth")

    } catch (error) {
      console.log("🚀 ~ LoginDumbFlix ~ error:", error)
    }
  }

  return <div className="relative flex w-full h-screen bg-first">
    {/* <Link to={"/auth/register"}>halooo</Link> */}
    <img src={`${ImageOriginal}${wallpaperRandom[Number(result)]}`} width={"100%"} className='absolute z-0 object-cover w-full h-screen bg-center blur-lg' alt="" />
    <div className="relative flex items-start h-screen md:items-center">
      <div className="absolute z-10 flex w-screen h-screen bg-black opacity-50">
      </div>
      <div className="absolute z-20 flex items-center justify-center w-screen h-screen">
        <form action="" className="flex flex-col justify-center gap-5 p-10 rounded-lg w-[25%] bg-nav" onSubmit={RegisterDumbFlix}>
          <span className="text-4xl font-bold text-white">Registe<span onClick={() => setAdminSet(true)}>r</span><b className={`${adminSet ? "text-red-500" : "hidden"}`}>Admin</b></span>
          <input id="email" className="h-12 pl-3 rounded-md" placeholder="Email" type="text" onChange={(e) => setDataRegister({ ...dataRegister, email: e.target.value })} />
          <input id="password" className="h-12 pl-3 rounded-md" placeholder="Password" type="text" onChange={(e) => setDataRegister({ ...dataRegister, password: e.target.value })} />
          <input id="fullname" className="h-12 pl-3 rounded-md" placeholder="Fullname" type="text" onChange={(e) => setDataRegister({ ...dataRegister, fullname: e.target.value })} />
          <Select onValueChange={(e) => setDataRegister({ ...dataRegister, gender: e })}>
            <SelectTrigger className="text-white bg-gray-500">
              <SelectValue placeholder="Gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Male">Male</SelectItem>
              <SelectItem value="Female">Female</SelectItem>
            </SelectContent>
          </Select>
          <input id="phone" className="h-12 pl-3 rounded-md" placeholder="Phone" type="text" onChange={(e) => setDataRegister({ ...dataRegister, phone: e.target.value })} />
          <input id="address" className="h-12 pl-3 rounded-md" placeholder="Address" type="text" onChange={(e) => setDataRegister({ ...dataRegister, address: e.target.value })} />

          <Button type="submit" variant={"secondary"}>Register</Button>
          <div className="flex gap-2 text-white">
            <span>Already have an account ? Klik</span>
            <Link className="font-bold " to={"/auth"}>Here</Link>
          </div>
        </form>
      </div>
    </div>
  </div>;
};

export default Register;
