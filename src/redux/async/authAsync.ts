import { API, setAuthToken } from "@/lib/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface ILoginForm {
  email?: string;
  password?: string;
}

export const loginAsync = createAsyncThunk(
  "/login",
  async (credentials: ILoginForm, { rejectWithValue }) => {
    try {
      const response = await API.post("/login", credentials);
      const token = response.data.token;
      const user = response.data.user;

      setAuthToken(token);
      localStorage.setItem("token", token);


      return { token: token, user: user };
    } catch (error) {
      return rejectWithValue("error");
    }
  }
);
export const loginAdminAsync = createAsyncThunk(
  "/admin/login",
  async (credentials: ILoginForm, { rejectWithValue }) => {
    try {
      localStorage.removeItem("adminToken")
      const response = await API.post("/login", credentials);
      const token = response.data.token;
      const user = response.data.user;

      setAuthToken(token);
      localStorage.setItem("adminToken", token);


      return { token: token, user: user };
    } catch (error) {
      return rejectWithValue("error");
    }
  }
);

export const authCheckAsync = createAsyncThunk(
  "/auth/check",
  async (token: string, { rejectWithValue }) => {
    try {
      const response = await API.get("/auth/check", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const user = response.data.user;

      return { token: token, user: user };
    } catch (error) {
      setAuthToken();
      localStorage.removeItem("token");
      return rejectWithValue("error");
    }
  }
);
