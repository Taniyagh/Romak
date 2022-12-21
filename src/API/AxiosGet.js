import axiosJson from "./AxiosJson";

async function AxiosGet(url,obj) {
    
    try {
        const {data:response} = await axiosJson.get(url,{
        params: obj
    }) 
        return response;
    }

    catch (error) { 
        console.log('error',error)    
        return error;
    }
  
}

export default AxiosGet;