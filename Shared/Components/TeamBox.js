import { Box, HStack, View,Avatar,Text} from "native-base";
const TeamBox = ({ team1, team2 }) => {
  return (
    <HStack style={{padding:25,borderColor:"grey",borderBottomWidth:2,marginTop:20,marginLeft:10,marginRight:10}} justifyContent={"space-between"}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
      >
        <Avatar style={{ margin: "auto" }} source={{ uri: team1.team.logo }} />
        <Text style={{color:"white",textAlign:'center'}}>{team1.team.code}</Text>
      </Box>
      <Text style={{color:"white",marginTop:10,fontSize:25,fontWeight:"bold",alignSelf:"center",padding:10}}>{team1.statistics[0].points + ":" + team2.statistics[0].points}</Text>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
      >
        <Avatar style={{ margin: "auto" }} source={{ uri: team2.team.logo }} />
        <Text style={{color:"white",textAlign:'center',marginTop:10}}>{team2.team.code}</Text>
      </Box>
    </HStack>
  );
};
// [FromBody]  ?x=dasdsa&y=102313
export default TeamBox;
