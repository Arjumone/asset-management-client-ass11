import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "https://asset-management-system-server-sigma.vercel.app",
});

const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
