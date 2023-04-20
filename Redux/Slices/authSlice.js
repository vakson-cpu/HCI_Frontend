import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../Shared/Constants/Statuses";
import Roles from "../../Shared/Constants/Roles";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
    status:STATUS.IDLE,
    IsLoggedIn:false,
    Role:Roles.GUEST
  
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
        state.IsLoggedIn=false;
        state.Role=Roles.GUEST;
        console.log('tu je')
        AsyncStorage.clear();
      },
      signIn:(state,action)=>{
        state.status=STATUS.SUCCEEDED;
        state.IsLoggedIn=true;
        state.Role=action.payload;
        console.log("tuda je")
      }
    }
}
);


export const { resetStatus, signOut,signIn } = authSlice.actions;