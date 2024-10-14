import { IUser, IProduct, ICategories, IMainCategories } from "@/types/app";

interface IAuthState {
  token: string;
  user: IUser;
}

interface IUser {
  id: number
  fullname: string
  email: string
  password: string
  gender: string
  phone: string
  address: string
  profile: string
  active: boolean
}