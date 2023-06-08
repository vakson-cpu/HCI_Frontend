import { Text, View, VirtualizedList, ActivityIndicator } from "react-native";
import { useState, useEffect, useMemo } from "react";
import { nbaService } from "../Services/nbaService";
import { Avatar, Box, HStack, VStack, Skeleton } from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { userService } from "../Services/userService";
import Match from "../Shared/Components/Match";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TouchableOpacity } from "react-native";
import CustomAlert from "../Shared/Modals/CustomAlert";
import NativeSpinner from "../Shared/Components/NativeSpinner";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native";
import { useIsFocused } from '@react-navigation/native';

const TeamInfo = ({ route }) => {
  const [team, setTeam] = useState({});
  const [matches, setMatches] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [color, setColor] = useState("");
  const [isLoading2, setIsLoading2] = useState(true);
  const [isFavorited, setIsFavorited] = useState(false);
  const [favoriteLoading, setFavoriteLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigation = useNavigation();
  const isFocused = useIsFocused();      
  const teamId = useMemo(() => route.params.value, [route.params.value]);

  const fetchFavorites = async (theTeam) => {
    console.log("Rutica je :",route.name);

    setFavoriteLoading(true);
    setIsFavorited(false);
    try {
      let userId = await AsyncStorage.getItem("Id")
        .then((value) => value)
        .catch((err) => err);
        console.log(userId);
        var favorites = await userService.getFavorites(userId);
        const realFavorites = favorites.data.favorites;
        let filterResults = realFavorites.filter(
          (item) => item.id === theTeam.id
        );
          if (filterResults.length > 0) {
            console.log(filterResults);
            setIsFavorited(true);
          }
        setFavoriteLoading(false);
    } catch (err) {
      alert("Something went wrong")
      console.log(err);
    }
  };
  const getItem = (matches, index) => {
    return matches[index];
  };

  async function GetTeamInfo() {
    setIsLoading(true);
    console.log("Ovo hoce", route.params.value);
    try {
      let result = await nbaService.getTeamById(route.params.value);
      setTeam(result.team[0]);
      setColor(result.color);
      await fetchFavorites(result.team[0]);
      setIsLoading(false);
    } catch (err) {
      alert("Something went wrong!");
      console.log(err);
    }
  }

  const renderFooter = () => {
    if (!isLoading2) {
      return null;
    }
    if (isLoading2) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color="red" />
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
  }, [teamId]);

  const pickFavorite = async (teamId) => {
    if (isOpen === false) setIsOpen(true);
    else {
      let userId = await AsyncStorage.getItem("Id")
        .then((value) => value)
        .catch((err) => err);
      console.log(userId);
      try {
        await userService.pickFavorites(userId, team.id);
        setIsFavorited(true);
        setIsOpen(false);
      } catch (err) {
        alert("Something went wrong!");
      }
    }
  };

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
            {favoriteLoading === false && isLoading == false && (
              <Box style={{ alignItems: "flex-end" }}>
                <TouchableOpacity onPress={() => pickFavorite(team.id)}>
                  <MaterialIcons
                    name="favorite"
                    color={isFavorited ? "red" : "grey"}
                    size={20}
                  />
                </TouchableOpacity>
              </Box>
            )}
            { (isLoading != true && team!==null) &&
            <Avatar
              style={{
                margin: "auto",
                alignSelf: "center",
                margin: 20,
                width: 160,
                height: 160,
              }}
              source={{ uri: team.logo || ""}}
            />
}
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
          { isLoading2 ==false &&
              <VirtualizedList
              initialNumToRender={4}
              data={matches}
              listKey="second-list"
              renderItem={({ item,index }) => <Match key={index} match={item} onlyToday={true} />}
              keyExtractor={(item) => item.id}
              getItemCount={getItemCount}
              getItem={(matches, index) => getItem(matches, index)}
              ListFooterComponent={renderFooter}
              />
          }
        </Box>
        <CustomAlert
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          addToFavorite={pickFavorite}
        />
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
/* <VirtualizedList
              initialNumToRender={4}
              data={matches}
              listKey="second-list"
              renderItem={({ item,index }) => <Match key={index} match={item} onlyToday={true} />}
              keyExtractor={(item) => item.id}
              getItemCount={getItemCount}
              getItem={(matches, index) => getItem(matches, index)}
              ListFooterComponent={renderFooter}
            /> */
