import axios from "axios";
import { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { SecurityDispatchContext } from "Providers";

const axiosJson = axios.create({
    baseURL: "https://dummyjson.com/",
    timeout: 40000,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'apiUserName': 'DeltaHolding',
        'apiPassword': 'Delta_A0E79B49-FB61-438A-9232-3CA18CD052A0',
    }
})

export const AxiosInterceptor = ({ children }) => {
    const navigate = useNavigate();
    const securityContexontexDispatch = useContext(SecurityDispatchContext);

    useEffect(() => {
        
        const resInterceptor = response => {
            return response;
        }

        const errInterceptor = error => {
            if(error.response.status === 400){
                let errorCode = error.response.data.errorCode  

                if(errorCode == 1){
                    // for lock
                    localStorage.setItem('isUserlocked','True');
                    localStorage.setItem('userLockedTill','1670841150');
                    securityContexontexDispatch(true)
                    
                } else if(errorCode == 2){
                    // for block
                    localStorage.clear();
                    localStorage.setItem('isIpBlocked','True');
                    navigate("/invalid-ip");
                }
                return error.response
            }
        }
        const interceptor = axiosJson.interceptors.response.use(resInterceptor, errInterceptor);

        return () => axiosJson.interceptors.response.eject(interceptor);
    }, [navigate])
    return children;
}

export default axiosJson;
