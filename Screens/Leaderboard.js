import { View, Text, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Box, Image, Avatar, Pressable } from "native-base";
import { useEffect, useState } from "react";
import { nbaService } from "../Services/nbaService";
import NativeSpinner from "../Shared/Components/NativeSpinner";
import { HStack } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
const Leaderboard = () => {
  const [Leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  const fetchTeams = async () => {
    try{
    let result = await nbaService.getLeaderBoard("east");
    console.log(result);
    setLeaderboard(result.data.Leaderboard);
    setLoading(false);}
    catch(err){
      console.log("An error occured,, \n",err);
    }
  };

  useEffect(() => {
    fetchTeams();
  }, []);

  function splitSpace(value) {
    let newString = value.split(" ");
    return newString[0];
  }
  function handlePress(index) {
    console.log("\n",index);
    navigation.navigate("TeamInfo", { value: index });
  }

  if (loading)
    return (
      <Box style={{ height: "100%" }} backgroundColor={"#222222"}>
        <NativeSpinner />
      </Box>
    );
  else
    return (
      <SafeAreaView style={{ backgroundColor: "#222222" }}>
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
            <Box w={200} alignItems={"flex-start"}>
              <Text style={{ color: "white", paddingLeft: 20 }}>Team</Text>
            </Box>
            <Box width={10} alignItems={"center"}>
              <Text style={{ color: "white" }}>Win</Text>
            </Box>
            <Box width={10} textAlign={"center"} alignItems={"center"}>
              <Text style={{ color: "white" }}>Loss</Text>
            </Box>
            <Box
              marginLeft={2}
              w={10}
              textAlign={"center"}
              alignItems={"center"}
            >
              <Text style={{ color: "white" }}>W%</Text>
            </Box>
            <Box
              marginLeft={5}
              width={10}
              textAlign={"center"}
              alignItems={"center"}
            >
              <Text style={{ color: "white" }}>L%</Text>
            </Box>
          </HStack>
          <FlatList
            data={Leaderboard}
            renderItem={({ item, index }) => (
              <TouchableOpacity onPress={() => handlePress(item.team.id)}>
                <HStack
                  marginBottom={10}
                  style={{ height: 20 }}
                  justifyContent="center"
                  marginTop={5}
                  overflowX={"scroll"}
                >
                  <Box
                    display={"flex"}
                    flexDirection={"row"}
                    alignContent={"center"}
                    alignItems={"center"}
                  >
                    <Box
                      style={{ display: "flex", alignContent: "center" }}
                      width={20}
                      alignContent={"center"}
                      alignItems={"flex-start"}
                    >
                      <Avatar
                        style={{ margin: "auto" }}
                        source={{ uri: item.team.logo }}
                      />
                    </Box>
                    <Text style={{ color: "lightgrey" }}>{index + 1}. </Text>
                    <Box width={20}>
                      <Text style={{ color: "lightgrey" }}>
                        {splitSpace(item.team.name)}
                      </Text>
                    </Box>
                  </Box>
                  <Box width={10} marginLeft={5}>
                    <Text style={{ color: "lightgrey" }}>
                      {item.conference.win}
                    </Text>
                  </Box>
                  <Box width={10}>
                    <Text style={{ color: "lightgrey" }}>
                      {item.conference.loss}
                    </Text>
                  </Box>
                  <Box marginRight={5}>
                    <Text style={{ color: "lightgrey" }}>
                      {item.win.percentage}
                    </Text>
                  </Box>
                  <Box>
                    <Text style={{ color: "lightgrey" }}>
                      {item.loss.percentage}
                    </Text>
                  </Box>
                  <Box>
                    <Text
                      style={{
                        color: "lightgrey",
                        textAlign: "center",
                        justifyContent: "center",
                      }}
                    >
                      {item.streak}
                    </Text>
                  </Box>
                </HStack>
              </TouchableOpacity>
            )}
          />
        </Box>
      </SafeAreaView>
    );
};

export default Leaderboard;
