import { fetchUserApi } from "./userApi.jsx";
import { setUser } from "./userSlice.js";

export const fetchUserAction = () => async (dispatch) => {
  // call the API
  const { status, payload } = await fetchUserApi();

  // dispatch user to Redux store if successful
  if (status === "success" && payload?._id) {
    dispatch(setUser(payload));
  }
};
