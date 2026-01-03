import axios from "axios";
import { toast } from "react-toastify";


const getAccessJWT = () =>{
  return sessionStorage.getItem("accessJWT")
}
export const apiProcessor = async ({ url, method, payload, showToast,isPrivateCall }) => {
  try {
    const headers = {}
    if(isPrivateCall){
      const token = getAccessJWT()
      if(token){
        headers.authorization = "bearer " + getAccessJWT();
    }else{
      alert("No token. please logout and login.")
    }
      }
  
    const responsePending = axios({
      method,
      url,
      data: payload,
      headers,
    });
   

    if (showToast) {
      toast.promise(responsePending, {
        pending: "Please wait...",
      });
    }

    const { data } = await responsePending;
    if(showToast){
      if(data.status === "success"){
        toast.success(data.message)
      }else{
        toast.error(data.message)
      }
    }

    return data;
  } catch (error) {

    const msg = error?.response?.data?.message || error.message;
    showToast && toast.error(msg);
    console.log(error);
    return {
      status: "error",
      message: msg,
    };
  }
};
