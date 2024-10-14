import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import AuthLayout from "./layout/AuthLayout";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Home from "./Pages/Home";
import { ReactNode } from "react";
import Movie from "./Pages/Movie";
import TVSeries from "./Pages/TVSeries";
import DetailTVSeries from "./Pages/DetailTVSeries";
import Profile from "./Pages/Profile";
import PayPremium from "./Pages/PayPremium";
import DetailMovie from "./Pages/DetailMovie";
import AdminLayout from "./layout/AdminLayout";
import ListFilm from "./Pages/Admin/ListFilm";
import ListTransaction from "./Pages/Admin/ListTransaction";
import AddFilm from "./Pages/Admin/AddFilm";
import DetailFilm from "./Pages/Admin/DetailFilm";
import LoginAdmin from "./Pages/Admin/components/LoginAdmin";


const ProtectedRoute = ({ children }: {
  children: ReactNode
}) => {
  const token = localStorage.getItem('token')
  return !token ? <Navigate to="/auth" /> : children;
};
const ProtectedAdminRoute = ({ children }: {
  children: ReactNode
}) => {
  const adminToken = localStorage.getItem('adminToken')
  return !adminToken ? (
    <Navigate to="/" />
  ) : children;
};

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<AuthLayout />}>
            <Route index element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>

          {/* <Route path="/dashboard" element={<BuyyerLayout />}>
            <Route index element={<LandingPage />} />
            <Route index element={<Parallax />} />
            </Route> */}

          <Route path="/admin" element={<ProtectedAdminRoute><AdminLayout /></ProtectedAdminRoute>}>
            <Route index element={<ListTransaction />} />
            <Route path="listFilm" element={<ListFilm />} />
            <Route path="addFilm" element={<AddFilm />} />
            <Route path="detailFilm/:id" element={<DetailFilm />} />

            <Route path="login" element={<LoginAdmin />} />
          </Route>

          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="profile" element={<ProtectedRoute><Profile />
            </ProtectedRoute>} />
            <Route path="pay" element={<ProtectedRoute><PayPremium />
            </ProtectedRoute>} />
            <Route path="detailTV/:id" element={<ProtectedRoute><DetailTVSeries />
            </ProtectedRoute>} />
            <Route path="detailMovie/:id" element={<ProtectedRoute><DetailMovie />
            </ProtectedRoute>} />
            <Route path="tvshows" element={<ProtectedRoute><TVSeries />
            </ProtectedRoute>} />
            <Route path="movie" element={<ProtectedRoute><Movie />
            </ProtectedRoute>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
