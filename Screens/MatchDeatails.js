import { Box, HStack, Text, VStack, Progress } from "native-base";
import { useEffect, useState } from "react";
import { nbaService } from "../Services/nbaService";
import TeamBox from "../Shared/Components/TeamBox";
import NativeSpinner from "../Shared/Components/NativeSpinner";
const MatchDeatails = ({ route }) => {
  const [gameDetails, setGameDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [statistics1, setSatistics1] = useState({})
  const [statistics2, setSatistics2] = useState({})
  const getData = async () => {
    let gameId = route.params.value;
    let result = await nbaService.getMatchDetailsById(gameId);
    setGameDetails(result);
    setSatistics1(result[0].statistics);
    setSatistics2(result[1].statistics);

    setIsLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(gameDetails);
  if (isLoading == false)
    return (
      <Box style={{ backgroundColor: "#222222", height: "100%" }}>
        <TeamBox team1={gameDetails[0]} team2={gameDetails[1]} />
        <VStack
          padding={10}

          height={300}
        >
          <VStack style={{alignItems:"center"}}>
            <Text style={{color:"white"}}>FGA</Text>
            <Box style={{display:"flex",flexDirection:"row",justifyContent:"space-between",width:200}}>
              <Text style={{color:"white"}}>{statistics1.fga}</Text>
              <Text style={{color:"white"}}>{statistics2.fga}</Text>
            </Box>
          <Progress style={{marginTop:5}} colorScheme="primary" value={55} width={300}/>
          </VStack>
          <VStack style={{alignItems:"center"}}>
            <Text style={{color:"white"}}>FGM</Text>
            <Box style={{display:"flex",flexDirection:"row",justifyContent:"space-between",width:200}}>
              <Text style={{color:"white"}}>{statistics1.fgm}</Text>
              <Text style={{color:"white"}}>{statistics2.fgm}</Text>
            </Box>
          <Progress style={{marginTop:5}} colorScheme="primary" value={statistics1.fgm+statistics2.fgm} width={300}/>
          </VStack>
          <VStack style={{alignItems:"center"}}>
            <Text style={{color:"white"}}>FPM</Text>
            <Box style={{display:"flex",flexDirection:"row",justifyContent:"space-between",width:200}}>
              <Text style={{color:"white"}}>51</Text>
              <Text style={{color:"white"}}>48</Text>
            </Box>
          <Progress style={{marginTop:5}} colorScheme="primary" value={55} width={300}/>
          </VStack>
          <VStack style={{alignItems:"center"}}>
            <Text style={{color:"white"}}>FPM</Text>
            <Box style={{display:"flex",flexDirection:"row",justifyContent:"space-between",width:200}}>
              <Text style={{color:"white"}}>51</Text>
              <Text style={{color:"white"}}>48</Text>
            </Box>
          <Progress style={{marginTop:5}} colorScheme="primary" value={55} width={300}/>
          </VStack>
          <VStack style={{alignItems:"center"}}>
            <Text style={{color:"white"}}>FPM</Text>
            <Box style={{display:"flex",flexDirection:"row",justifyContent:"space-between",width:200}}>
              <Text style={{color:"white"}}>51</Text>
              <Text style={{color:"white"}}>48</Text>
            </Box>
          <Progress style={{marginTop:5}} colorScheme="primary" value={55} width={300}/>
          </VStack>
        </VStack>
      </Box>
    );
  else
    return (
      <Box style={{ height: "100%" }} backgroundColor={"#222222"}>
        <NativeSpinner />
      </Box>
    );
};
export default MatchDeatails;
