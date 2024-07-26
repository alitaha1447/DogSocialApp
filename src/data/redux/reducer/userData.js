import {createSlice} from '@reduxjs/toolkit';
export const userDataSlice = createSlice({
  name: 'user',
  initialState: {
    isLogIn: false,
  },
  reducers: {
    logIn: state => {
      state.isLogIn = true;
      console.log(state.isLogIn);
    },
    logOut: state => {
      state.isLogIn = false;
    },
  },
});

export const {logIn, logOut} = userDataSlice.actions;
export default userDataSlice.reducer;
