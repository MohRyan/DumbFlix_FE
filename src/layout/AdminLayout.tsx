import AdminNav from "@/Pages/Admin/components/AdminNav";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
    window.addEventListener("scroll", function () {
        const header = this.document.querySelector("nav");
        header?.classList.toggle("navFixed", this.window.scrollY > 0);
    });
    //   const { checkToken } = useCheckToken()
    //   const token = localStorage.getItem("token");

    return (
        <>
            <div className="h-screen bg-first">
                <nav className="nav">
                    <AdminNav />
                </nav>
                <Outlet />
            </div>
        </>
    );
};

export default AdminLayout;
