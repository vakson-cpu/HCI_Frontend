import { Box } from "native-base";
import {Text,Button} from 'react-native'
import { FlatList } from "react-native-gesture-handler";
import { nbaService } from "../Services/nbaService";
import { useState, useEffect } from "react";
import Match from "../Shared/Components/Match";
import GamesSkeleton from "../Shared/Components/Skeletons/GamesSkeleton";
const GamesToday = () => {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchGames = async () => {
    setIsLoading(true)
    let result = await nbaService.getGamesToday();
    console.log("Rezultat je : ",result.response);
    setGames(result);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchGames();
  }, []);
  if (isLoading === false)
    return (
      <Box style={{backgroundColor:"#222222",height:"100%",textAlign:"center"}}>
        <Text style={{backgroundColor:"#191a19",padding:5,color:"white",textAlign:"center",fontSize:20,fontWeight:"bold",marginTop:20,marginBottom:20}}>Schedule</Text>
        <FlatList style={{height:300}} data={games} renderItem={({item}) =>( <Match match={item} onlyToday={true} />)} />
      </Box>

    );
  else return <Box style={{backgroundColor:"#222222",height:"100%"}}><GamesSkeleton/>
  </Box>
};

export default GamesToday;
