import { baseUri } from "./baseUri";
import axios from "axios";

export const nbaService = {
  getLeaderBoard: async (conference) => {
    return axios
      .get(`${baseUri}/NBA/Leaderboard?conference=${conference}`)
      .then((res) => res.data)
      .catch((err) => err);
  },
  getTeamById:async(id)=>{
    let rezultat = await  axios
    .get(`${baseUri}/NBA/Teams/Name?id=${id}`)
    .then((res) => res.data)
    .catch((err) => err);
    return rezultat;
  },
  getTeamGames:async(season,teamId)=>{
    return axios
    .get(`${baseUri}/NBA/Games/Season?season=${season}&teamId=${teamId}`)
    .then((res) => res.data)
    .catch((err) => err);
  },
  getMatchDetailsById:async(id)=>{
    return axios
    .get(`${baseUri}/NBA/Game/Stats?gameId=${id}`)
    .then((res) => res.data)
    .catch((err) => err);
  },
  getPlayersByMatchId:async(id)=>{
    return axios
    .get(`${baseUri}/NBA/Games/Player/Stats?gameId=${id}`)
    .then((res) => res.data)
    .catch((err) => err); 
  }
};


//Game/Stats?gameId=