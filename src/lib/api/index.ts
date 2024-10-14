import axios from "axios";

export const API = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}`,
});
export const APIMovie = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export let tokenKeyMovie = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MWUyN2RhNGI0M2I4ZDNlNWUzODM3OTE4YzQyMmFiZiIsIm5iZiI6MTcyODI4MTA0OC41OTc2MDcsInN1YiI6IjY3MDM3ODQ4NGNmNDdjNzMwZjczZDliNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VsDzBanLGjHExMcuVr9ljlMlFZA9suoVw1TeHDWlWS4'

export const setAuthToken = (token?: string) => {
  if (token) {
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete API.defaults.headers.common["Authorization"];
  }
};
export const setAuthTokenMovie = () => {
  if (tokenKeyMovie) {
    API.defaults.headers.common["Authorization"] = `Bearer ${tokenKeyMovie}`;
  } else {
    delete API.defaults.headers.common["Authorization"];
  }
};

// export const axiosRequest = async (
//   url: string,
//   method: string,
//   body: any,
//   header: object
// ) => {
//   var config = {
//     method,
//     url,
//     headers: { ...header },
//     data: body,
//   };

//   const response = await axios(config);
//   return response.data;
// };
