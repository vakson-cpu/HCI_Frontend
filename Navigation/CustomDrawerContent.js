import { View, Text, Image, Pressable } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import NBALOGO2 from "../assets/NBA.png";
import { Button } from "native-base";
import { useState } from "react";
import RegistrationModal from "../Shared/Modals/RegistrationModal";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../Redux/Slices/authSlice";
const CustomDrawerContent = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.User.IsLoggedIn);
  const handleLogout = () => {
    dispatch(signOut())
  };
  return (
    <View style={{ padding: 10, flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontSize: 20,
            marginTop: 25,
          }}
        >
          Welcome!
        </Text>
        <View
          style={{
            display: "flex",
            alignContent: "center",
            marginBottom: 50,
            marginTop: 20,
          }}
        >
          <Image source={NBALOGO2} style={{ width: 250, height: 200 }} />
        </View>

        <DrawerItemList {...props} />
        {!isLogged ? (
          <TouchableOpacity onPress={() => setIsOpen(true)}>
            <DrawerItem
              activeTintColor="white"
              inactiveTintColor="gray"
              icon={({ color, size }) => (
                <MaterialIcons name="login" color={"grey"} size={20} />
              )}
              label="Register/Sign-In"
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => handleLogout()}>
            <DrawerItem
              activeTintColor="white"
              inactiveTintColor="gray"
              icon={({ color, size }) => (
                <MaterialIcons name="logout" color={"grey"} size={20} />
              )}
              label="Log-Out"
            />
          </TouchableOpacity>
        )}
      </DrawerContentScrollView>
      <RegistrationModal showModal={isOpen} setShowModal={setIsOpen} />
    </View>
  );
};

export default CustomDrawerContent;
