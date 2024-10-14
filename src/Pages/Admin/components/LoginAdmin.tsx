import { ILogin, result, wallpaperRandom } from '@/components/auth/Login';
import { Button } from '@/components/ui/button';
import { ImageOriginal } from '@/Pages/Home';
import { useAppDispatch } from '@/redux';
import { loginAdminAsync } from '@/redux/async/authAsync';
import { FormEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const LoginAdmin = () => {
    const [dataLoginAdmin, setDataLoginAdmin] = useState<ILogin>({
        email: "",
        password: ""
    })

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    async function LoginDumbFlix(e: FormEvent) {
        e.preventDefault()
        try {
            dispatch(loginAdminAsync(dataLoginAdmin))

            navigate("/admin")

        } catch (error) {
            console.log("🚀 ~ LoginDumbFlix ~ error:", error)
        }
    }
    return <div className="relative flex w-full h-screen bg-first">
        <img src={`${ImageOriginal}${wallpaperRandom[Number(result)]}`} width={"100%"} className='absolute z-0 object-cover w-full h-screen bg-center blur-lg' alt="" />
        <div className="relative flex items-start h-screen md:items-center">
            <div className="absolute z-10 flex w-screen h-screen bg-black opacity-50">
            </div>
            <form action="" onSubmit={LoginDumbFlix} className="absolute z-20 flex items-center justify-center w-screen h-screen">
                <div className="flex flex-col justify-center gap-5 p-10 rounded-lg bg-nav w-96 h-96">
                    <span className="text-4xl font-bold text-white">Login</span>
                    <input id="email" className="h-12 pl-3 rounded-md" placeholder="Email" type="text" onChange={(e) => setDataLoginAdmin({ ...dataLoginAdmin, email: e.target.value })} />
                    <input id="password" className="h-12 pl-3 rounded-md" placeholder="Password" type="text" onChange={(e) => setDataLoginAdmin({ ...dataLoginAdmin, password: e.target.value })} />
                    <Button type="submit">Login</Button>
                    <div className="flex gap-2 text-white">
                        <span>Don't have an account ? Klik</span>
                        <Link className="font-bold " to={"/auth/register"}>Here</Link>
                    </div>
                </div>
            </form>
        </div>
    </div>;
}

export default LoginAdmin