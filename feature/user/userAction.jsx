import { fetchUserApi } from "./userApi.jsx";
import { setUser } from "./userSlice.js";

export const fetchUserAction = () => async (dispatch) => {
  try {
    const { status, payload } = await fetchUserApi();

    if (status === "success" && payload?._id) {
      dispatch(setUser(payload));
    } else {
      dispatch(setUser(null)); // reset user if not found
    }
  } catch (error) {
    console.log(error)
    dispatch(setUser(null)); // reset on API error
  }
};




