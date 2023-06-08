import { Box, HStack, Text, VStack, Progress, Switch } from "native-base";
import { useEffect, useState } from "react";
import { nbaService } from "../Services/nbaService";
import TeamBox from "../Shared/Components/TeamBox";
import NativeSpinner from "../Shared/Components/NativeSpinner";
import PlayersSkelleton from "../Shared/Components/Skeletons/PlayersSkelleton"
import { FlatList } from "react-native-gesture-handler";
import { View } from "native-base";
const MatchDeatails = ({ route }) => {
  const [gameDetails, setGameDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [statistics1, setSatistics1] = useState({});
  const [statistics2, setSatistics2] = useState({});
  const [switchChecked, setSwitchChecked] = useState(false);
  const [bestPlayers, setBestPlayers] = useState({});
  const [fetchingLoader, setFetchingLoader] = useState(true);
  const [isEmptyResult, setIsEmptyResult] = useState(false)
  const getData = async () => {
    let gameId = route.params.value;
    let result = await nbaService.getMatchDetailsById(gameId);
    setGameDetails(result);
    if(result.length ===  0)
      setIsEmptyResult(true)
    else{
    setSatistics1(result[0].statistics[0]);
    setSatistics2(result[1].statistics[0]);
    }
    setIsLoading(false);
  };
  const fetchPlayerStats = async () => {
    let gameId = route.params.value;

    setFetchingLoader(true);
    let result = await nbaService.getPlayersByMatchId(gameId);
    
    setBestPlayers(result.players);
    setFetchingLoader(false);
  };
  useEffect(() => {
    if (!switchChecked) getData();
    else fetchPlayerStats();
  }, [switchChecked]);
  const handleChecked = () => setSwitchChecked(!switchChecked);
  console.log(gameDetails);
  if (isLoading == false)
    return (
      <Box style={{ backgroundColor: "#222222", height: "100%" }}>
        { isEmptyResult===false &&
        <TeamBox team1={gameDetails[0]} team2={gameDetails[1]} />
        }
        <VStack
          style={{ justifyContent: "space-between" }}
          padding={10}
          height={300}
        >
          { isEmptyResult === false &&
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            
            <Text style={{ color: "lightgrey" }}>Team Stats</Text>
            <Switch
              colorScheme={"emerald"}
              value={switchChecked}
              onToggle={handleChecked}
            />
            <Text style={{ color: "lightgrey" }}> Player Stats</Text>
          </Box>
            }
          {switchChecked == false  ? (
            <VStack>
              { isEmptyResult===false ? 
              <VStack>
              <VStack style={{ alignItems: "center", marginBottom: 20 }}>
                <Text style={{ color: "white" }}>FGA</Text>
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: 200,
                  }}
                >
                  <Text style={{ color: "white" }}>{statistics1.fga}</Text>
                  <Text style={{ color: "white" }}>{statistics2.fga}</Text>
                </Box>
                <Progress
                  style={{ marginTop: 5 }}
                  colorScheme="primary"
                  value={statistics1.fga}
                  max={statistics1.fga + statistics2.fga}
                  width={300}
                />
              </VStack>
              <VStack style={{ alignItems: "center", marginBottom: 20 }}>
                <Text style={{ color: "white" }}>FGM</Text>
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: 200,
                  }}
                >
                  <Text style={{ color: "white" }}>{statistics1.fgm}</Text>
                  <Text style={{ color: "white" }}>{statistics2.fgm}</Text>
                </Box>
                <Progress
                  style={{ marginTop: 5 }}
                  colorScheme="primary"
                  value={statistics1.fgm}
                  max={statistics1.fgm + statistics2.fgm}
                  width={300}
                />
              </VStack>
              <VStack style={{ alignItems: "center", marginBottom: 20 }}>
                <Text style={{ color: "white" }}>OffReb</Text>
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: 200,
                  }}
                >
                  <Text style={{ color: "white" }}>{statistics1.offReb}</Text>
                  <Text style={{ color: "white" }}>{statistics2.offReb}</Text>
                </Box>
                <Progress
                  style={{ marginTop: 5 }}
                  colorScheme="primary"
                  value={statistics1.offReb}
                  max={statistics1.offReb + statistics2.offReb}
                  width={300}
                />
              </VStack>
              <VStack style={{ alignItems: "center", marginBottom: 20 }}>
                <Text style={{ color: "white" }}>defReb</Text>
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: 200,
                  }}
                >
                  <Text style={{ color: "white" }}>{statistics1.defReb}</Text>
                  <Text style={{ color: "white" }}>{statistics2.defReb}</Text>
                </Box>
                <Progress
                  style={{ marginTop: 5 }}
                  colorScheme="primary"
                  value={statistics1.defReb}
                  max={statistics1.defReb + statistics2.defReb}
                  width={300}
                />
              </VStack>
              <VStack style={{ alignItems: "center" }}>
                <Text style={{ color: "white" }}>TotReb</Text>
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: 200,
                  }}
                >
                  <Text style={{ color: "white" }}>{statistics1.totReb}</Text>
                  <Text style={{ color: "white" }}>{statistics2.totReb}</Text>
                </Box>
                <Progress
                  style={{ marginTop: 5 }}
                  colorScheme="primary"
                  value={statistics1.totReb}
                  max={statistics1.totReb + statistics2.totReb}
                  width={300}
                />
              </VStack>
              </VStack>
:<Text style = {{textAlign:"center",color:"white"}}>Game Hasnt Been Played Yet!</Text>}
            </VStack>
          ) : (
            <VStack>
              <Box style={{ height: "100%" }} backgroundColor={"#222222"}>
                <HStack
                  style={{
                    height: 40,
                    borderBottomColor: "lightgrey",
                    borderBottomWidth: 1,
                    width: "100%",
                    overflowX: "scroll",
                  }}
                  borderBottomColor={"lightgrey"}
                  textAlign={"center"}
                >
                  <Box w={150} alignItems={"flex-start"}>
                    <Text style={{ color: "white", paddingLeft: 20 }}>
                      Player
                    </Text>
                  </Box>
                  <Box width={15} alignItems={"center"}>
                    <Text style={{ color: "white" }}>P</Text>
                  </Box>
                  <Box
                    width={15}
                    textAlign={"center"}
                    marginLeft={3}
                    alignItems={"center"}
                  >
                    <Text style={{ color: "white" }}>A</Text>
                  </Box>
                  <Box
                    w={15}
                    textAlign={"center"}
                    alignItems={"center"}
                    marginLeft={3}
                  >
                    <Text style={{ color: "white" }}>R</Text>
                  </Box>
                  <Box
                    marginLeft={3}
                    w={20}
                    textAlign={"center"}
                    alignItems={"center"}
                  >
                    <Text style={{ color: "white" }}>Mins</Text>
                  </Box>
                </HStack>
                {fetchingLoader == false ? (
                  <View style={{ height: 500 }}>
                    <FlatList
                      style={{ height: "100%" }}
                      data={bestPlayers}
                      renderItem={({ item, index }) => (
                        <HStack
                          marginBottom={10}
                          style={{
                            height: 20,
                            borderBottomColor: "red",
                            borderBottom: 2,
                            width: "100%",
                          }}
                          marginTop={5}
                          overflowX={"scroll"}
                        >
                          <Box
                            display={"flex"}
                            flexDirection={"row"}
                            justifyContent={"space-between"}
                          >
                            <Box
                              style={{
                                display: "flex",
                                alignContent: "center",
                                paddingLeft: 20,
                              }}
                              width={150}
                            >
                              <Text
                                style={{
                                  color: "lightgrey",
                                  textAlign: "left",
                                }}
                              >
                                {item.team.code +
                                  " " +
                                  item.player.firstname +
                                  " " +
                                  item.player.lastname[0]}
                              </Text>
                            </Box>

                            <Box  alignItems={"center"}>
                              <Text style={{ color: "white",fontSize:10,textAlign:"center" }}>
                                {item.points}
                              </Text>
                            </Box>
                            <Box
                              width={17}
                              textAlign={"center"}
                              marginLeft={3}
                              alignItems={"center"}
                            >
                              <Text style={{ color: "white",fontSize:10 }}>
                                {item.assists}
                              </Text>
                            </Box>
                            <Box
                              w={17}
                              textAlign={"center"}
                              alignItems={"center"}
                              marginLeft={3}
                            >
                              <Text style={{ color: "white",fontSize:10 }}>
                                {item.totReb}
                              </Text>
                            </Box>
                            <Box
                              marginLeft={30}
                              w={17}
                              textAlign={"center"}
                              alignItems={"center"}
                            >
                              <Text style={{ color: "white",fontSize:10,textAlign:"center" }}>{item.min}</Text>
                            </Box>
                          </Box>
                        </HStack>
                      )}
                    />
                  </View>
                ) : (
                  <PlayersSkelleton />
                )}
              </Box>
            </VStack>
          )}
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
