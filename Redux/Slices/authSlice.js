import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../Shared/Constants/Statuses";
import Roles from "../../Shared/Constants/Roles";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
  status: STATUS.IDLE,
  name:"",
  IsLoggedIn: false,
  Role: Roles.GUEST,
  Verified: false,
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    resetStatus: (state) => {
      state.status = "idle";
    },
    signOut: (state) => {
      state.status = "idle";
      state.IsLoggedIn = false;
      state.Role = Roles.GUEST;
      state.Verified=false
    },
    signIn: (state, action) => {
      state.status = STATUS.SUCCEEDED;
      state.IsLoggedIn = true;
      state.Role = action.payload;
    },
    setVerify: (state, action) => {
      if (action.payload === "0") state.Verified = false;
      else state.Verified = true;
    },
    setName:(state,action)=>{
      state.name=action.payload
    }
  },
});

export const { resetStatus, signOut, signIn, setVerify,setName } = authSlice.actions;
