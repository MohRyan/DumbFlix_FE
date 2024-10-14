import { useState } from 'react'
import { Link } from 'react-router-dom'

const sideAdminProfile = [
  {
    icon: "film.png",
    title: "Film",
    link: "/admin/addFilm",
  },
];

const AdminNav = () => {
  const [showProfileAdmin, setShowProfileAdmin] = useState<boolean>(false)
  const handleLogout = () => {
    // dispatch(LOGOUT())
    // navigate("/auth")
  }
  return (
    <div className="flex items-center justify-between gap-2 px-8 py-5 bg-nav">
      {/* <div className="hidden gap-5 px-5 font-bold text-white md:flex">
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
            </div> */}
      <div className="flex items-center justify-center ">
        <Link to={"/admin"}>
          <img src="../src/assets/Logo DumbFlix.png" alt="" />
        </Link>
      </div>

      <div className="flex items-center justify-end gap-3 text-white w-60">
        <img onClick={() => setShowProfileAdmin(!showProfileAdmin)} src={"https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"} className="w-10 h-10 rounded-full cursor-pointer" alt="" />
        {/* <span>{fullname}</span> */}
        {/* {
              profile === null ?
                <div onClick={() => setShowProfileAdmin(!showProfileAdmin)} className="flex items-center justify-center w-10 h-10 bg-red-300 rounded-full cursor-pointer">M</div>
                :
                <img onClick={() => setShowProfileAdmin(!showProfileAdmin)} src={profile} className="w-10 h-10 rounded-full cursor-pointer" alt="" />
            } */}
        {!showProfileAdmin ? (
          ""
        ) : (
          <div className="absolute z-20 flex right-8 top-20">
            <div className="absolute origin-center rotate-45 bg-first h-7 w-7 right-2 -top-3"></div>
            <ul className="flex flex-col gap-6 py-5 text-white rounded-lg w-60 bg-first">
              {sideAdminProfile.map((item, index) => (
                <Link to={item.link} key={index} onClick={() => setShowProfileAdmin(false)}>
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

    </div>
  )
}

export default AdminNav