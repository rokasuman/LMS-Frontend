// all api call related to signup, login, token

import { apiProcessor } from "./api.js";

const apiBaseUrl = "http://localhost:8000";
const authApiEP = `${apiBaseUrl}/api/v1/auth`;

export const signUpNewUserApi = async (payload) => {
  try {
    const obj = {
      url: `${authApiEP}/register`,
      method: "post",
      payload,
      showToast: true,
    };

    const result = await apiProcessor(obj);
    return result;
  } catch (error) {
    console.error("Signup API error:", error);
    return {
      status: "error",
      message: error.message,
    };
  }
};

// api to call the response for the activated user
export const activateUserApi = async (payload) => {
  const obj = {
    url: authApiEP + "/activate-user",
    method: "post",
    payload,
  };

  return await apiProcessor(obj);
};


// api to connect with login 
export const signInUserApi =async (payload)=>{
  const obj ={
    url: authApiEP + "/login",
    method : "post",
    payload,
   showToast:true,
  }
  return apiProcessor(obj)
} 

//api to request password otp

export const requestPassRestOTPApi = (payload) =>{
  const obj = {
    url :authApiEP + "/otp",
    method: "post",
    payload,
  }
  return apiProcessor(obj)
}

//reser password api 
export const PasswordResApi = (payload) =>{
  const obj = {
    url :authApiEP + "/reset-password",
    method: "post",
    payload,
  }
  return apiProcessor(obj)
}