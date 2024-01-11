import axios from "axios";

const axiouspublic = axios.create({
  baseURL: "https://asset-management-system-server-sigma.vercel.app",
});
const Useaxiouspublic = () => {
  return axiouspublic;
};

export default Useaxiouspublic;
