import "react-native-gesture-handler";
import { View, Text, StatusBar } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Leaderboard from "./Screens/Leaderboard";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Screens/Home";
import CustomDrawerContent from "./Navigation/CustomDrawerContent";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeBaseProvider, Box } from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { Provider } from "react";
import { store } from "./Redux/Store";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "./Redux/Slices/authSlice";
import TeamInfo from "./Screens/TeamInfo";
import { createStackNavigator } from "@react-navigation/stack";
import StackNavigator from "./Navigation/StackNavigator";
// import HomeStack from './Routes/HomeStack';r
export default function App() {
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.User.IsLoggedIn);
  if (isLogged) console.log("logovan je");
  useEffect(() => {
    AsyncStorage.getItem("role")
      .then((value) => {
        if (value !== null) {
          dispatch(signIn("User"));
          console.log("Data exists:", value);
        } else {
          console.log("No data");
        }
      })
      .catch((error) => {
        console.log("Error checking AsyncStorage:", error);
      });
  }, []);

  const Drawer = createDrawerNavigator();

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            drawerStyle: {
              backgroundColor: "black",
            },
            headerStyle: {
              backgroundColor: "black",
            },

            headerTintColor: "#fff",
            drawerActiveTintColor: "white",
            drawerInactiveTintColor: "grey",
          }}
          drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
          <Drawer.Screen
            name="Home"
            component={Home}
            options={{
              drawerIcon: (color, size) => (
                <MaterialIcons name="dashboard" color={"grey"} size={20} />
              ),
            }}
          />
          <Drawer.Screen
            name="Leaderboard"
            component={StackNavigator}
            options={{
              drawerIcon: (color, size) => (
                <MaterialIcons name="leaderboard" color={"grey"} size={20} />
              ),
            }}
          />
          <Drawer.Screen
            name="Schedule"
            component={Home}
            options={{
              drawerIcon: (color, size) => (
                <MaterialIcons name="schedule" color={"grey"} size={20} />
              ),
            }}
          />
          <Drawer.Screen
            name="Statistics"
            component={Home}
            options={{
              drawerIcon: (color, size) => (
                <MaterialIcons name="bar-chart" color={"grey"} size={20} />
              ),
            }}
          />
        </Drawer.Navigator>

      </NavigationContainer>
  
    </NativeBaseProvider>
  );
}
