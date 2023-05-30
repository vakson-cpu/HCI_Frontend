import { Box, HStack, VStack } from "native-base";
import { Text } from "react-native";
import { Image } from "react-native";
const SearchPlayerResults = ({ name, lastName, birthDay }) => {
  return (
    <HStack
      style={{
        width: "100%",
        borderBottomColor: "lightgrey",
        borderBottomWidth: 2,
        borderTopColor: "lightgrey",
        borderTopColor: "lightgrey",
        heght: 100,
        marginBottom:20,
        alignItems:"center"
      }}
    >
      <Box width={20} height={"100%"}>
        <Image style={{width:"100%",height:100}} source={require("../../assets/Player.png")} />
      </Box>
      <Box marginLeft={10}>
        <VStack>
          <HStack>
            <Text width={100} style={{color:"white"}} >FirstName: </Text>
            <Box width={20}>
                <Text style={{color:"white"}}>{name}</Text>
            </Box>
          </HStack>
          <HStack>
            <Text width={100} style={{color:"white"}} >LastName: </Text>
            <Box width={20}>
              <Text style={{color:"white"}}>
                {lastName}
              </Text>
            </Box>
          </HStack>
          <HStack>
            <Text width={100} style={{color:"white"}}>Date of Birth: </Text>
            <Box width={20}>
              <Text style={{color:"white"}}>{birthDay}</Text>
            </Box>
          </HStack>
        </VStack>
      </Box>
    </HStack>
  );
};

export default SearchPlayerResults;
              {/* <Text> {name.length > 10 ? name.slice(0, 10) : name}</Text> */}
                {/* {lastName.length > 10 ? lastName.slice(0, 10) : lastName} */}
