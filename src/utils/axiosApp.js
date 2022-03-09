import axios from "axios";

export const axiosApp = axios.create({
  baseURL: `${
    process.env.NODE_ENV === "production"
      ? window.origin
      : "http://localhost:3001"
  }/api`,
  withCredentials: true,
});
