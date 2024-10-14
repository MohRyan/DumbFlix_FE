import { API } from "@/lib/api";
import { useAppDispatch } from "@/redux";
import { CHECK_LOGIN } from "@/redux/slice/authSlice";


export const useCheckToken = () => {
    const dispatch = useAppDispatch()
    const token = localStorage.getItem("token");
    const checkToken = async () => {
        try {
            const res = await API.get("/checkToken", {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`,
                },
            })
            dispatch(CHECK_LOGIN(res.data.userLogin));
        } catch (error) {
            console.log(error);
        }
    };

    return {
        checkToken
    }
}