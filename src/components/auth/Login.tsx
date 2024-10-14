import { ImageOriginal } from "@/Pages/Home";
import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { loginAsync } from "@/redux/async/authAsync";
import { useAppDispatch } from "@/redux";

export let wallpaperRandom = [
  '/AjTodtZJlQxycfRPktnUTpknblv.jpg',
  '/hdFIdXwS8FSN2wIsuotjW1mshI0.jpg',
  '/3V4kLQg0kSqPLctI5ziYWabAZYF.jpg',
  '/hJpTWcFlucIOOo5WEuYN0w69fJi.jpg',
  '/p5kpFS0P3lIwzwzHBOULQovNWyj.jpg',
  '/AjTodtZJlQxycfRPktnUTpknblv.jpg',
  '/3V4kLQg0kSqPLctI5ziYWabAZYF.jpg',
  '/hdFIdXwS8FSN2wIsuotjW1mshI0.jpg',
  '/hJpTWcFlucIOOo5WEuYN0w69fJi.jpg',
  '/p5kpFS0P3lIwzwzHBOULQovNWyj.jpg',
]
export let result = Math.random().toString().split('').pop()

export interface ILogin {
  email: string
  password: string
}

const Login = () => {

  const [dataLogin, setDataLogin] = useState<ILogin>({
    email: "",
    password: ""
  })

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  function adminLogin() {
    localStorage.setItem("adminToken", "MohRyan")
    navigate("/admin/login")
  }

  async function LoginDumbFlix(e: FormEvent) {
    e.preventDefault()
    try {
      dispatch(loginAsync(dataLogin))
      // const res = await API.post("/user/admin", dataLogin.email)
      // const token = res.data.token
      // const data = res.data
      // console.log("🚀 ~ LoginDumbFlix ~ res:", res.data.user)
      // localStorage.setItem("token", token)
      navigate("/")
      // navigate("/admin")

    } catch (error) {
      console.log("🚀 ~ LoginDumbFlix ~ error:", error)
    }
  }

  return <div className="relative flex w-full h-screen bg-first">
    <img src={`${ImageOriginal}${wallpaperRandom[Number(result)]}`} width={"100%"} className='absolute z-0 object-cover w-full h-screen bg-center blur-lg' alt="" />
    <div className="relative flex items-start h-screen md:items-center">
      <div onClick={adminLogin} className="absolute top-0 z-30 w-10 h-10 bg-transparent rounded-full cursor-pointer left-10"></div>
      <div className="absolute z-10 flex w-screen h-screen bg-black opacity-50">
      </div>
      <form action="" onSubmit={LoginDumbFlix} className="absolute z-20 flex items-center justify-center w-screen h-screen">
        <div className="flex flex-col justify-center gap-5 p-10 rounded-lg bg-nav w-96 h-96">
          <span className="text-4xl font-bold text-white">Login</span>
          <input id="email" className="h-12 pl-3 rounded-md" placeholder="Email" type="text" onChange={(e) => setDataLogin({ ...dataLogin, email: e.target.value })} />
          <input id="password" className="h-12 pl-3 rounded-md" placeholder="Password" type="text" onChange={(e) => setDataLogin({ ...dataLogin, password: e.target.value })} />
          <Button type="submit">Login</Button>
          <div className="flex gap-2 text-white">
            <span>Don't have an account ? Klik</span>
            <Link className="font-bold " to={"/auth/register"}>Here</Link>
          </div>
        </div>
      </form>
    </div>
  </div>;
};

export default Login;
