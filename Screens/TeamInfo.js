import { Text, View, VirtualizedList, ActivityIndicator } from "react-native";
import { useState, useEfect, useEffect } from "react";
import { nbaService } from "../Services/nbaService";
import { Avatar, Box, HStack, VStack, Skeleton, Center } from "native-base";
import NativeSpinner from "../Shared/Components/NativeSpinner";
import { FlatList } from "react-native-gesture-handler";

import Match from "../Shared/Components/Match";
import { List } from "react-virtualized";
const TeamInfo = ({ route }) => {
  const [team, setTeam] = useState({});
  const [matches, setMatches] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [color, setColor] = useState("");
  const [isLoading2, setIsLoading2] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const getItem = (matches, index) => {
    return matches[index];
  };



  async function GetTeamInfo() {
    console.log("Poziva se ", route.params.value);
    try {
    
      let result = await nbaService.getTeamById(route.params.value);
      console.log(result);
      setTeam(result.team[0]);
      setColor(result.color);
      console.log(result.color);
      setIsLoading(false);
    } catch (err) {
      alert("Something went wrong!");
    }
  }
  const handleEndReached = () => {
    setIsLoadingMore(true);
  };
  const renderFooter = () => {
    if (!isLoading2) {
      return null;
    }
    if (isLoading2) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color="gray" />
        </View>
      );
    }
  };
  async function GetTeamGames() {
    try {
      setIsLoading2(true);
      let result = await nbaService.getTeamGames(2022, route.params.value);
      setMatches(result);
      setIsLoading2(false);
    } catch (err) {
      alert("Something went wrong!");
    }
  }
  // async function FetchData() {
  //   await GetTeamInfo();
  //   await GetTeamGames();
  // }
  const handleReturn = (item) => {
    return <Match match={item} />;
  };
  const getItemCount = () => {
    return matches.length;
  };
  useEffect(() => {
    GetTeamInfo();
    GetTeamGames();
  }, []);

  if (isLoading == true) {
    return (
      <Box
        style={{
          backgroundColor: "#222222",
          margin: "auto",
          alignItems: "center",
        }}
        h="100%"
      >
        <VStack
          marginTop="50"
          w="90%"
          maxW="400"
          borderWidth="1"
          space={6}
          rounded="md"
          alignItems="center"
          _dark={{
            borderColor: "coolGray.500",
          }}
          _light={{
            borderColor: "coolGray.200",
          }}
        >
          <Skeleton h="40" />
          <Skeleton
            borderWidth={1}
            borderColor="coolGray.200"
            endColor="warmGray.50"
            size="20"
            rounded="full"
            mt="-70"
          />
          <HStack space="2">
            <Skeleton size="5" rounded="full" />
            <Skeleton size="5" rounded="full" />
            <Skeleton size="5" rounded="full" />
            <Skeleton size="5" rounded="full" />
            <Skeleton size="5" rounded="full" />
          </HStack>
          <Skeleton.Text lines={3} alignItems="center" px="12" />
          <Skeleton mb="3" px="5" />
        </VStack>
      </Box>
    );
  } else
    return (
      <Box>
        <Box
          style={{ height: "100%", padding: 30 }}
          backgroundColor={"#222222"}
        >
          <Box
            style={{
              backgroundColor: `rgb(${color[0]}, ${color[1]},${color[2]})`,
            }}
          >
            <Avatar
              style={{
                margin: "auto",
                alignSelf: "center",
                margin: 20,
                width: 160,
                height: 160,
              }}
              source={{ uri: team.logo }}
            />
          </Box>
          <Box
            style={{
              borderBottomWidth: 2,
              borderBottomColor: "goldenrod",
              marginBottom: 15,
            }}
          ></Box>
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontSize: 25,
              fontWeight: "bold",
            }}
          >
            {team.name}
          </Text>
          <Text
            style={{ color: "lightgrey", textAlign: "center", fontSize: 16 }}
          >
            Town: {team.city}
          </Text>
          <Text
            style={{ color: "lightgrey", textAlign: "center", fontSize: 16 }}
          >
            Conference: {team.leagues.standard.conference}
          </Text>
          <Text
            style={{ color: "lightgrey", textAlign: "center", fontSize: 16 }}
          >
            Division: {team.leagues.standard.division}
          </Text>
          <Box
            style={{
              margin: "auto",
              alignSelf: "center",
              borderBottomWidth: 2,
              borderBottomColor: "goldenrod",
              marginTop: 15,
              width: "80%",
            }}
          ></Box>
        
                   <VirtualizedList
              initialNumToRender={4}
              data={matches}
              renderItem={({ item }) => <Match match={item} />}
              keyExtractor={(item) => item.id}
              getItemCount={getItemCount}
              getItem={(matches, index) => getItem(matches, index)}
              ListFooterComponent={renderFooter}
            />
        </Box>
      </Box>
    );
};

export default TeamInfo;

//   if (isLoading!=true) {
//     console.log(team.name);
//     console.log(team.leagues.standard.conference);

//   } else <NativeSpinner></NativeSpinner>;
// };

/* <FlatList
data={matches}
initialNumToRender={4}
refreshing={isLoading2}
renderItem={(item) => <Match match={item} />}
/> */
