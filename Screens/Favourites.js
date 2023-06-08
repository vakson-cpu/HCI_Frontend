import React from "react";
import { Box, Text, HStack } from "native-base";
import { useEffect, useState } from "react";
import { userService } from "../Services/userService";
import { FlatList, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NativeSpinner from "../Shared/Components/NativeSpinner";
import SearchTeamResults from "../Shared/Components/SearchTeamResults";
import { useNavigation } from "@react-navigation/native";
import { useIsFocused } from "@react-navigation/native";
const Favourites = ({ route }) => {
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  function handlePress(index) {
    console.log("\n", index);
    navigation.navigate("FavoriteTeamInfo", { value: index });
  }

  // This hook returns `true` if the screen is focused, `false` otherwise
  const isFocused = useIsFocused();
  const fetchFavorites = async () => {
    try {
      setIsLoading(true);
      let userId = await AsyncStorage.getItem("Id")
        .then((value) => value)
        .catch((err) => err);
      console.log(userId);
      if (userId != null) {
        let helpFavorites = await userService.getFavorites(userId);
        if (helpFavorites === null || helpFavorites === undefined) {
          console.log("Null suuu");
          return;
        } else {
          console.log(helpFavorites);
          let realFavorites = helpFavorites.data.favorites;
          setFavorites(realFavorites);
          setIsLoading(false);
        }
      }
    } catch (err) {
      alert("Something went wrong!");
      console.log(err);
      return;
    }
  };
  // if(favorites===null){
  //   fetchFavorites()
  // }
  useEffect(() => {
    fetchFavorites();
  }, [isFocused,route.name]);
  console.log(route.name)
  return (
    <Box style={{ height: "100%", backgroundColor: "#222222" }}>
      <Text
        style={{ color: "white", textAlign: "center" }}
        fontSize={"xl"}
        marginBottom={10}
      >
        List of Favorite Teams
      </Text>
      {(isLoading === false && favorites !== null) ? (
        <Box style={{ width: "90%", alignSelf: "center" }}>
          {favorites.length > 0 ? (
            <FlatList
              listKey="recent-event"
              style={{ marginBottom: 20 }}
              data={favorites}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  key={item.id} // Corrected key to use item.id instead of index
                  onPress={() => handlePress(item.id)}
                >
                  <SearchTeamResults
                    logo={item.logo}
                    name={item.name}
                    city={item.city}
                    conference={item.leagues.standard.conference}
                  />
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.id} // Corrected keyExtractor to use item.id
            />
          ) : (
            <Box style={{ alignItems: "center" }}>
              <Text style={{ color: "white", textAlign: "center" }}>
                No favorite teams present!
              </Text>
            </Box>
          )}
        </Box>
      ) : (
        <NativeSpinner />
      )}
    </Box>
  );
};

export default Favourites;
