import { Avatar, Box, HStack, Text } from "native-base";
import { TouchableOpacity } from "react-native";
import { memo } from "react";
import { useNavigation } from "@react-navigation/native";
const Match = ({ match }) => {

  const navigation = useNavigation();

  const convertDate = (time) => {

    const date = time.slice(0, 10);
    let yy = date.slice(0, 4);
    let mm = date.slice(5, 7);
    let dd = date.slice(8);
    console.log(yy + " " + mm + " " + dd);
    return dd + "/" + mm + "/" + yy;
  };
  const convertTime = (time) => {
    const hours = time.slice(11, 16);
    return hours;
  };

  const cutLongName = (name) => {
    return name.slice(0, 10);
  };
  function handleMatchPressed(index) {
    console.log("\n",index);
    navigation.navigate("MatchDetails", { value: index });
  }

  return (
    <TouchableOpacity  onPress={()=>handleMatchPressed(match.id)}>
      <Box
        style={{
          width: "100%",
          backgroundColor: "#292828",
          margin: 5,
          borderBottomColor: "lightgray",
          borderBottomWidth: 2,
        }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white" }}>
            {convertDate(match.date.start)}
          </Text>
          <Text style={{ color: "red" }}>{convertTime(match.date.start)}</Text>
        </Box>
        <HStack alignContent={"center"} justifyContent={"space-between"}>
          <Box style={{}}>
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: 100,
              }}
            >
              <Avatar
                style={{ margin: "auto" }}
                source={{ uri: match.teams.home.logo }}
              />
              <Text style={{ color: "white" }}>{match.teams.home.code}</Text>
            </Box>
          </Box>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white" }}>
              {match.scores.home.points ?? 0}:
            </Text>
            <Text style={{ color: "white" }}>
              {match.scores.visitors.points ?? 0}
            </Text>
          </Box>
          <Box>
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: 100,
              }}
            >
              <Avatar
                style={{ margin: "auto" }}
                source={{ uri: match.teams.visitors.logo }}
              />
              <Text style={{ color: "white" }}>
                {match.teams.visitors.code}
              </Text>
            </Box>
          </Box>
        </HStack>
      </Box>
    </TouchableOpacity>
  );
};

export default memo(Match);
