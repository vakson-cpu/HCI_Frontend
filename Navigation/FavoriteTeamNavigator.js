import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";
import Leaderboard from "../Screens/Leaderboard";
import TeamInfo from "../Screens/TeamInfo";
import MatchDeatails from "../Screens/MatchDeatails";
import GamesToday from "../Screens/GamesToday";
import Favourites from "../Screens/Favourites";

const FavoriteTeamNavigator = () => {
  const Stack = createStackNavigator();

  return (
      <Stack.Navigator screenOptions={{
        drawerStyle: {
          backgroundColor: "black",
        },
        headerStyle: {
          backgroundColor: "black",
        },

        headerTintColor: "#fff",
        
      }}>
        <Stack.Screen name="FavoriteTeams"   options={{headerShown:false}} component={Favourites} />
        <Stack.Screen options={{headerShown:false}} name="FavoriteTeamInfo" component={TeamInfo} />
        <Stack.Screen options={{headerShown:false}} name="MatchDetails" component={MatchDeatails} />
      </Stack.Navigator>
  );
};

export default FavoriteTeamNavigator;
