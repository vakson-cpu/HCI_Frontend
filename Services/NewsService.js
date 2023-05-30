import { baseUri } from "./baseUri";
import axios from "axios";

export const NewsService = {
  getNews: async () => {
    return axios
      .get(`${baseUri}/News/All`)
      .then((res) => res.data)
      .catch((err) => err);
  },

};


//Game/Stats?gameId=