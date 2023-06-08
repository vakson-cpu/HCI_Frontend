import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";
import Leaderboard from "../Screens/Leaderboard";
import TeamInfo from "../Screens/TeamInfo";
import MatchDeatails from "../Screens/MatchDeatails";
import GamesToday from "../Screens/GamesToday";
import Statistics from "../Screens/Statistics";
import ShowPlayerInfo from "../Screens/ShowPlayerInfo";
const StatisticsStack = () => {
  const Stack = createStackNavigator();

  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Stats" component={Statistics} />
          <Stack.Screen name="PlayerStats" component={ShowPlayerInfo} />
      </Stack.Navigator>
  );
};

export default StatisticsStack;
