import Footer from "@/components/footer";
import Navbar from "@/components/nav/Navbar";
import { useCheckToken } from "@/lib/hooks/useCheckToken";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector("nav");
    header?.classList.toggle("navFixed", this.window.scrollY > 0);
  });
  const { checkToken } = useCheckToken()
  const token = localStorage.getItem("token");


  if (token) {
    useEffect(() => {
      checkToken();
    }, []);
  }
  return (
    <>
      <nav className="nav">
        <Navbar />
      </nav>
      <div>
        <Outlet />
      </div>
      {/* <div className="flex">
      </div> */}
      <div>
        <Footer />
      </div>
    </>
  );
};

export default RootLayout;
