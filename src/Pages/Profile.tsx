import { Button } from '@/components/ui/button';
import { useAppSelector } from '@/redux';
import { useState } from 'react'



const Profile = () => {
    // const profile = {
    //     fullname: "Radif Ganteng",
    //     email: "radifgans@gmail.com",
    //     active: true ? "Active" : "NonActive",
    //     gender: "Male",
    //     phone: "085321543169",
    //     address: "bintaro residence",
    // }
    const { fullname, email, active, gender, phone, address, profile } = useAppSelector((state) => state.auth.user)
    const [pictureProfile, setPictureProfile] = useState<string | null>(null)
    // const [pictureProfileReal, setPictureProfileReal] = useState<string | null>("")
    const pictureProfileReal = ""
    const profileIcon = [
        {
            icon: "People.png",
            title: "Full name",
            original_title: fullname
        },
        {
            icon: "Mail.png",
            title: "Email",
            original_title: email
        },
        {
            icon: "tickets 1.png",
            title: "Status",
            original_title: active
        },
        {
            icon: "gender.png",
            title: "Gender",
            original_title: gender
        },
        {
            icon: "local_phone.png",
            title: "Mobile phone",
            original_title: phone
        },
        {
            icon: "MapsLocation.png",
            title: "Address",
            original_title: address
        },
    ];
    return (
        <div className='flex items-center justify-center w-full h-screen bg-black'>
            <div className="flex p-5 rounded-md md:p-0 bg-nav">
                <div className="flex flex-col items-center text-white md:gap-20 md:p-20 md:flex-row">
                    <div className="flex flex-col gap-5 p-5 md:p-0">
                        <span className='text-3xl font-bold font_TVSeries'>Personal Info</span>
                        {
                            profileIcon.map((item, index) => (
                                <div key={index} className="flex gap-5">
                                    <div className="flex items-center justify-center w-14">
                                        <img className='object-contain ' src={`../src/assets/profile/${item.icon}`} alt="" />
                                    </div>
                                    <div className="flex flex-col">
                                        <b>{item.original_title === true ? "Active" : item.original_title === false ? "Non-Active" : item.original_title}</b>
                                        <span>{item.title}</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="flex flex-col w-full max-h-96">
                        <div className="flex justify-center py-5 w-80 md:w-full">
                            <img className='object-cover max-h-80' src={pictureProfileReal !== null ? profile : pictureProfile === null ? "../src/assets/Logo DumbFlix.png" : pictureProfile} alt="" />
                        </div>
                        {
                            pictureProfile !== null ?
                                <>
                                    <div className="flex items-center w-full py-5 justify-evenly">
                                        <Button onClick={() => {
                                            setPictureProfile(null)
                                        }}>Batal</Button>
                                        <Button variant={"secondary"}>Simpan</Button>
                                    </div>
                                </>
                                :
                                <>
                                    <label className='flex items-center justify-center w-full h-10 font-bold text-white rounded-md cursor-pointer bg-button hover:bg-red-700' htmlFor="profile_picture">Change Your Profile</label>
                                    <input type='file' id='profile_picture' className='hidden'
                                        onChange={(e) => {
                                            if (!e.target.files) return;
                                            const Picture = e.target.files
                                            setPictureProfile(URL.createObjectURL(Picture[0]) as string)
                                        }}
                                    ></input>
                                </>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile