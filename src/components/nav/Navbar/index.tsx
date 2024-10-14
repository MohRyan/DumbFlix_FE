import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/redux";
import { LOGOUT } from "@/redux/slice/authSlice";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const LinkNav = [
  { nav: "Home", link: "/" },
  { nav: "TV Shows", link: "/tvshows" },
  { nav: "Movie", link: "/movie" }
]

const sideProfile = [
  {
    icon: "user 2.png",
    title: "Profile",
    link: "/profile",
  },
  {
    icon: "bill 1.png",
    title: "Pay",
    link: "/pay",
  },
];

const Navbar = () => {
  const { fullname, profile } = useAppSelector((state) => state.auth.user)

  const token = localStorage.getItem("token")
  const [showProfile, setShowProfile] = useState<boolean>(false)

  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const handleLogout = () => {
    dispatch(LOGOUT())
    navigate("/auth")
  }
  return (
    <div className="flex items-center justify-between gap-2 px-8 py-5 bg-nav">
      <div className="hidden gap-5 px-5 font-bold text-white md:flex">
        {
          LinkNav.map((item, index) => (
            <NavLink
              to={item.link}
              key={index}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-button" : "hover:text-button"
              }
            >{item.nav}</NavLink>
          ))
        }
      </div>
      <div className="flex items-center justify-center ">
        <Link to={"/"}>
          <img src="./src/assets/Logo DumbFlix.png" alt="" />
        </Link>
      </div>
      {
        token ?
          <div className="flex items-center justify-end gap-3 text-white w-60">
            <span>{fullname}</span>
            {
              profile === null ?
                <div onClick={() => setShowProfile(!showProfile)} className="flex items-center justify-center w-10 h-10 bg-red-300 rounded-full cursor-pointer">{fullname.split("").slice(0, 2).join("")}</div>
                :
                <img onClick={() => setShowProfile(!showProfile)} src={profile} className="w-10 h-10 rounded-full cursor-pointer" alt="" />
            }
            {!showProfile ? (
              ""
            ) : (
              <div className="absolute z-20 flex right-8 top-20">
                <div className="absolute origin-center rotate-45 bg-first h-7 w-7 right-2 -top-3"></div>
                <ul className="flex flex-col gap-6 py-5 text-white rounded-lg w-60 bg-first">
                  {sideProfile.map((item, index) => (
                    <Link to={item.link} key={index} onClick={() => setShowProfile(false)}>
                      <li key={index} className="flex items-center gap-4 pl-6 group/profileNav ">
                        <img src={`./src/assets/${item.icon}`} alt="" />
                        <b className="text-xl group-hover/profileNav:text-red-500">{item.title}</b>
                      </li>
                    </Link>
                  ))}
                  <div className="h-1 bg-gray-400"></div>
                  <li
                    className="flex items-center gap-4 pl-6 cursor-pointer group/LogoutNav"
                  // onClick={() => handleLogout()}
                  >
                    <img src={`./src/assets/logout 1.png`} alt="" />
                    <b onClick={handleLogout} className="text-xl group-hover/LogoutNav:text-red-500">Logout</b>
                  </li>
                </ul>
              </div>
            )}
          </div>
          :
          <div className="flex gap-5">
            <Button onClick={() => navigate("/auth/register")} variant={"secondary"}>Register</Button>
            <Button onClick={() => navigate("/auth")}>Login</Button>
          </div>
      }
    </div>
  );
};

export default Navbar;
