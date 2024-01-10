import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://assignment12-psi.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
