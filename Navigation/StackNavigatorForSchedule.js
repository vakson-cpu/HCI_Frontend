import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";
import Leaderboard from "../Screens/Leaderboard";
import TeamInfo from "../Screens/TeamInfo";
import MatchDeatails from "../Screens/MatchDeatails";
import GamesToday from "../Screens/GamesToday";
const StackNavigatorForSchedule = () => {
  const Stack = createStackNavigator();

  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="schedule" component={GamesToday} />
        <Stack.Screen name="MatchDetails" component={MatchDeatails} />
      </Stack.Navigator>
  );
};

export default StackNavigatorForSchedule;
