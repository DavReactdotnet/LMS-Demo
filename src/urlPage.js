import axios from "axios";


const baseURL = "urlHere";
const token = localStorage.getItem("token");
   
                     const axiosIns = 
 axios.create({ baseURL });
 axiosIns.
interceptors.request.use((config) => {
  config.headers = {


    "content-type": "application/json",
    token: token ? token : "",
    ...config.headers,
     
  };
  return config;
});
export { axiosIns };
