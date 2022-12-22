import axiosJson from "./AxiosJson";

async function AxiosPost(url,obj) {
    
    try {
        const {data:response} = await axiosJson.post(url ,obj) 
        return response;
    }

    catch (error) {
          return error;
      }
  
}

export default AxiosPost;