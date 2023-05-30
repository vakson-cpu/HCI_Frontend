import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { baseUri } from "./baseUri";
export const userService = {
  getFavorites: async (userId) => {
    return axios
      .get(`${baseUri}/Users/favorites?userId=${userId}`)
      .then((res) => res.data)
      .catch((err) => err);
  },
  pickFavorites: async (userId, teamId) => {
    return axios
      .post(`${baseUri}/Users/AddToFavorites?userId=${userId}&teamId=${teamId}`)
      .then((res) => res.data)
      .catch((err) => err);
  },
  unFavorite: async (userId, teamId) => {
    return axios
      .post(`${baseUri}/Users/UnFavorite?userId=${userId}&teamId=${teamId}`)
      .then((res) => res.data)
      .catch((err) => err);
  },
};
