import { Box,HStack,VStack,Image } from "native-base";
import {Text} from 'react-native'
const SearchTeamResults = ({logo,name,city,conference}) => {
  return   (  <HStack
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
  <Box width={20} height={"100%"}>{ logo ?
    <Image style={{width:"100%",height:100}} source={{
      uri: logo
    }} alt="no pic" /> : <Image style={{width:"100%",height:100}} source={require("../../assets/PlainLogo.png")} alt="no pic" /> }
  </Box>
  <Box marginLeft={10}>
    <VStack>
      <HStack>
        <Text width={100} style={{color:"white"}} >Team: </Text>
        <Box width={20}>
            <Text style={{color:"white"}}>{name}</Text>
        </Box>
      </HStack>
      <HStack>
        <Text width={100} style={{color:"white"}} >City: </Text>
        <Box width={20}>
          <Text style={{color:"white"}}>
            {city}
          </Text>
        </Box>
      </HStack>
      <HStack>
        <Text width={100} style={{color:"white"}}>Conference</Text>
        <Box width={20}>
          <Text style={{color:"white"}}>{conference}</Text>
        </Box>
      </HStack>
    </VStack>
  </Box>
</HStack>
);
}

export default SearchTeamResults;
