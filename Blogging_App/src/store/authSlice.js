import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: null
}

// This slice is for "auth", we can create the different slice for databases in.

const authSlice = createSlice({ // Inside the authSlice the reducers function such as "login, logout" are the actions. which we are importing.
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload.userData;
    },
    logout: (state) => {
      state.status = false;
      state.userData = null;
    }

  }
});

// We can create the new slice for databases in new file, leaving it for later on



export const {login, logout} = authSlice.actions;

export default authSlice.reducer;
