import { Box, Icon, Input, SearchIcon, Switch } from "native-base";
import { Text } from "react-native";
import { useState, useEffect } from "react";
import { nbaService } from "../Services/nbaService";
import { FlatList } from "react-native-gesture-handler";
import { Button, HStack } from "native-base";
import SearchPlayerResults from "../Shared/Components/SearchPlayerResults";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import NativeSpinner from "../Shared/Components/NativeSpinner";
import SearchTeamResults from "../Shared/Components/SearchTeamResults";

const Search = () => {
  const [inputText, setText] = useState("");
  const [isSwitched, setSwitch] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const searchTeams = async () => {
    if (inputText.length < 3) {
      alert("Input needs to be 3 letters long!");
    } else {
      setIsLoading(true);
      let result =await nbaService.searchForTeam(inputText);
      setSearchResults(result);
      setIsLoading(false);
    }
  };
  const searchPlayers = async() => {
    if (inputText.length < 3) {
      alert("Input needs to be 3 letters long!");
    } else {
      setIsLoading(true);
      let result =await nbaService.searchForPlayer(inputText);
      console.log(result);
      setSearchResults(result);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    setSearchResults([]);
  }, [isSwitched]);

  const handleSearch = () => {
    if (isSwitched) searchTeams(inputText);
    else searchPlayers(inputText);
  };
  return (
    <Box style={{ backgroundColor: "#222222", height: "100%" }}>
      <Box style={{alignItems:"center"}}>
      <Input
        style={{color:"white"}}
        width={"80%"}
        onChangeText={(text) => setText(text)}
        value={inputText}
        variant="underlined"
        placeholder={isSwitched ? "Search for Teams" : "Search for Players"}
      /></Box>
      <Box style={{ alignItems: "center" }}>
        <Switch
          colorScheme={"emerald"}
          value={isSwitched}
          onToggle={() => setSwitch(!isSwitched)}
          style={{ margin: "auto" }}
        />
      </Box>
      <Box style={{ alignItems: "center" }}>
        <Button
          leftIcon={<MaterialIcons name="search" color={"black"} style={{marginRight:5}} size={25} />}
          style={{ marginBottom: 5, marginTop: 20,fontSize:25,textAlign:"center" }}
          onPress={handleSearch}
          
        >Search</Button>
  
      </Box>
      {isLoading === false ? (
        <Box>
          {isSwitched ? (
                     <Box style={{width:"80%",alignSelf:"center"}}>{
                      searchResults.length > 0?
                      <FlatList
                        style={{marginBottom:20}}
                        data={searchResults}
                        renderItem={({ item }) => (
                          <SearchTeamResults
                            logo={item.logo}
                            name={item.name}
                            conference={item.nbaFranchise ? item.leagues.standard.conference : "Not in NBA"}
                          />
                        )
                      }
                      />:<Text style={{color:"white",textAlign:"center"}}>No results!</Text>}
                    </Box>
          ) : (
            <Box style={{width:"80%",alignSelf:"center"}}>{
              searchResults.length > 0?
              <FlatList
                style={{marginBottom:20}}
                data={searchResults}
                renderItem={({ item }) => (
                  <SearchPlayerResults
                    name={item.firstname}
                    lastName={item.lastname}
                    birthDay={item.birth.date}
                  />
                )
              }
              />:<Text style={{color:"white",textAlign:"center"}}>No results!</Text>}
            </Box>
          )}
        </Box>
      ) : (
        <NativeSpinner/>
      )}
    </Box>
  );
};

export default Search;
