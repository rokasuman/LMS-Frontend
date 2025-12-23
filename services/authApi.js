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
      showToast:true,
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
