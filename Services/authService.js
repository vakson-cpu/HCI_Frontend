import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import { baseUri } from "./baseUri";
export const authService = {
  Register: async (name, email, password) =>
    axios
      .post(`${baseUri}/Users/Register`, {
        name: name,
        email: email,
        age: 18,
        password: password,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.status.code);
        return res.data;
      })
      .catch((err) => {
        console.log(err.message);
        console.log(err.data);
        return err;
      }),
  Login: async (email, password) => {
    return   axios
      .post(`${baseUri}/Users/Login`, {
        email: email,
        password: password,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        AsyncStorage.setItem("token", JSON.stringify(res.data.data.token));
        AsyncStorage.setItem("Id", JSON.stringify(res.data.data.userId));
        AsyncStorage.setItem("role", JSON.stringify(res.data.data.role));
        return res.data.data
      })
      .catch((err) => console.log(err));
  },
};
