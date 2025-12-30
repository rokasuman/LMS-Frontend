import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},    // store the logged-in user
  loading: false // optional: to prevent navbar flash
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.loading = false;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    logoutUser: (state) => {
      state.user = null;
      state.loading = false;
      

    },
  },
});

export const { setUser, setLoading, logoutUser } = userSlice.actions;
export default userSlice.reducer;
