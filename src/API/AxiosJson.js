import axios from "axios";
import { isLogin, getToken } from "../utils/Auth";

const axiosJson = axios.create({
    baseURL: "https://dummyjson.com/",
    timeout: 40000,
})

const authHeaderReIntercepretor=[
    config=>{
        if(isLogin()){
            config.headers["Authorization"]=`Bearer ${getToken()}`;
        }
        return config
    },
    error=>{
        return Promise.reject(error)
    }
]

axiosJson.interceptors.request.use(...authHeaderReIntercepretor);
axiosJson.interceptors.response.use(...authHeaderReIntercepretor);

export default axiosJson;
