// call the api to fetch the user 

import { apiProcessor } from "../../services/api";

const apiBaseUrl = "http://localhost:8000";
const userApiEP = `${apiBaseUrl}/api/v1/user`
export const fetchUserApi =async ()=>{
  const obj ={
    url: userApiEP + "/profile",
    method : "get",
   showToast:false,
   isPrivateCall : true,
  }
  const result = apiProcessor(obj);
  return result;
} 