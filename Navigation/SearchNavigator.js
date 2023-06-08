import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";
import Leaderboard from "../Screens/Leaderboard";
import TeamInfo from "../Screens/TeamInfo";
import MatchDeatails from "../Screens/MatchDeatails";
import GamesToday from "../Screens/GamesToday";
const SearchNavigator = () => {
  const Stack = createStackNavigator();

  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SearchPlayerInfo" component={Leaderboard} />

      </Stack.Navigator>
  );
};

export default SearchNavigator;
