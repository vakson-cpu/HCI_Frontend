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
    return axios
    .get(`${baseUri}/NBA/Teams/Name?id=${id}`)
    .then((res) => res.data)
    .catch((err) => err);
    
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
  },
  getGamesToday:async()=>{
    return axios
    .get(`${baseUri}/NBA/Games`)
    .then((res) => res.data)
    .catch((err) => err); 
  },
  searchForTeam:async(text)=>{
    return axios
    .get(`${baseUri}/NBA/Teams/Search?searchText=${text}`)
    .then((res) => res.data)
    .catch((err) => err); 
  },
  searchForPlayer:async(text)=>{
    return axios
    .get(`${baseUri}/NBA/Players/Search?searchText=${text}`)
    .then((res) => {console.log(res.data)
      return res.data})
    .catch((err) => err); 
  }
};


//Game/Stats?gameId=