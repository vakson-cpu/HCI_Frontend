import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";
import Leaderboard from "../Screens/Leaderboard";
import TeamInfo from "../Screens/TeamInfo";
import MatchDeatails from "../Screens/MatchDeatails";
const StackNavigator = () => {
  const Stack = createStackNavigator();

  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LeaderBoard" component={Leaderboard} />
        <Stack.Screen name="TeamInfo" component={TeamInfo} />
        <Stack.Screen name="MatchDetails" component={MatchDeatails} />
      </Stack.Navigator>
  );
};

export default StackNavigator;
