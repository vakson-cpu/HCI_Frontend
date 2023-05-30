import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Screens/Home";
import CustomDrawerContent from "./Navigation/CustomDrawerContent";
import { NativeBaseProvider } from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setName, setVerify, signIn } from "./Redux/Slices/authSlice";
import StackNavigator from "./Navigation/StackNavigator";
import StackNavigatorForSchedule from "./Navigation/StackNavigatorForSchedule";
import Search from "./Screens/Search";
import Favourites from "./Screens/Favourites"
// import HomeStack from './Routes/HomeStack';r
export default function App() {
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.User.IsLoggedIn);
  
  useEffect(() => {
    AsyncStorage.getItem("role")
      .then((value) => {
        if (value !== null) {
          dispatch(signIn("User"));
          console.log("Data exists:", value);
        } else {
          console.log("No data for login");
        }
      })
    AsyncStorage.getItem("name")
      .then((value) => {
        if (value !== null) {
          dispatch(setName(value));
          console.log("Data exists:", value);
        } else {
          console.log("No data for login");
        }
      })
      AsyncStorage.getItem("verified")
      .then((value) => {
        if (value !== null) {
          let verified;
          console.log(value)
          if(value==="false")
          verified = "0";
          else verified = "1";
          console.log("verified je : ",verified)
          dispatch(setVerify(verified))
          console.log("Data exists:", verified);
        } else {
          console.log("No data for verified");
        }
      })
      
      .catch((error) => {
        console.log("Error checking AsyncStorage:", error);
      });
    
  }, [isLogged]);

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
            component={StackNavigatorForSchedule}
            options={{
              drawerIcon: (color, size) => (
                <MaterialIcons name="schedule" color={"grey"} size={20} />
              ),
            }}
          />
          <Drawer.Screen
            name="Search"
            component={Search}
            options={{
              drawerIcon: (color, size) => (
                <MaterialIcons name="bar-chart" color={"grey"} size={20} />
              ),
            }}
          />
          <Drawer.Screen
            name="Favorites"
            component={Favourites}
            options={{
              drawerIcon: (color, size) => (
                <MaterialIcons name="favorite" color={"grey"} size={20} />
              ),
            }}
          />
        </Drawer.Navigator>

      </NavigationContainer>
  
    </NativeBaseProvider>
  );
}
