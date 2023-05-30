import { HStack, Box } from "native-base";
import { Text, View } from "react-native-svg";
const PlayerDetails = ({ item,type }) => {
  return (
    <HStack style={{borderBottomColor:"lightgrey",borderWidth:2}}>
      <Text>{item.team.code}</Text>
      <Text>{item.player.firstname}</Text>
      <Text>{item.player.lastname}</Text>
      {type==="Points"&&<Text>{item.points}</Text>}
      {type==="Assists"&&<Text>{item.assists}</Text>}
      {type==="Rebounds"&&<Text>{item.totReb}</Text>}
    </HStack>
  );
};

export default PlayerDetails;
