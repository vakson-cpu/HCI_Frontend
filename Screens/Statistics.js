import React from "react";
import { Box, Text, HStack, ScrollView } from "native-base";
import { SafeAreaView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";


const Statistics = () => {

  const navigation = useNavigation();


  function handlePress(index) {
    navigation.navigate("PlayerStats", { value: index });
  }
  return (
    <SafeAreaView>
      <Box backgroundColor={"#222222"} height={"100%"}>
        <ScrollView>
          <Text
            style={{ color: "white", textAlign: "center", margin: 5 }}
            fontSize={"xl"}
          >
            Offensive Leaders
          </Text>
          <HStack margin={5}>
            <Box width={300}>
              <Text color={"white"}>Player</Text>
            </Box>
            <Text style={{ textAlign: "right" }} color={"white"}>
              Points
            </Text>
          </HStack>
          <TouchableOpacity onPress={() => handlePress(1)}>
            <HStack margin={5} marginTop={0}>
              <Box width={300}>
                <Text color={"white"}>Joel Embid</Text>
              </Box>
              <Text style={{ textAlign: "right" }} color={"white"}>
                33
              </Text>
            </HStack>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress(2)}>
            <HStack margin={5} marginTop={0}>
              <Box width={300}>
                <Text color={"white"}>Luka Doncic</Text>
              </Box>
              <Text style={{ textAlign: "right" }} color={"white"}>
                32.4
              </Text>
            </HStack>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress(3)}>
            <HStack margin={5} marginTop={0}>
              <Box width={300}>
                <Text color={"white"}>Damian Lilard</Text>
              </Box>
              <Text style={{ textAlign: "right" }} color={"white"}>
                32.2
              </Text>
            </HStack>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress(4)}>
            <HStack margin={5} marginTop={0}>
              <Box width={300}>
                <Text color={"white"}>S. Gilgeous Alexander</Text>
              </Box>
              <Text style={{ textAlign: "right" }} color={"white"}>
                31.4
              </Text>
            </HStack>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress(5)}>
            <HStack
              margin={5}
              marginTop={0}
              borderBottomColor={"light.500"}
              borderBottomWidth={2}
              paddingBottom={5}
            >
              <Box width={300}>
                <Text color={"white"}>G. Antetokounmpo</Text>
              </Box>
              <Text style={{ textAlign: "right" }} color={"white"}>
                33
              </Text>
            </HStack>
          </TouchableOpacity>
          <Text
            style={{ color: "white", textAlign: "center", margin: 5 }}
            fontSize={"xl"}
          >
            Assists
          </Text>
          <HStack margin={5}>
            <Box width={300}>
              <Text color={"white"}>Player</Text>
            </Box>
            <Text style={{ textAlign: "right" }} color={"white"}>
              Assists
            </Text>
          </HStack>
          <TouchableOpacity onPress={() => handlePress(8)}>
            <HStack margin={5} marginTop={0}>
              <Box width={300}>
                <Text color={"white"}>Nikola Jokic</Text>
              </Box>
              <Text style={{ textAlign: "right" }} color={"white"}>
                10.3
              </Text>
            </HStack>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress(6)}>
            <HStack margin={5} marginTop={0}>
              <Box width={300}>
                <Text color={"white"}>Trae Young</Text>
              </Box>
              <Text style={{ textAlign: "right" }} color={"white"}>
                10.2
              </Text>
            </HStack>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress(7)}>
            <HStack margin={5} marginTop={0}>
              <Box width={300}>
                <Text color={"white"}>James Harden</Text>
              </Box>
              <Text style={{ textAlign: "right" }} color={"white"}>
                8.3
              </Text>
            </HStack>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress(9)}>
            <HStack margin={5} marginTop={0}>
              <Box width={300}>
                <Text color={"white"}>J.Holiday</Text>
              </Box>
              <Text style={{ textAlign: "right" }} color={"white"}>
                8
              </Text>
            </HStack>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress(10)}>
            <HStack
              margin={5}
              marginTop={0}
              borderBottomColor={"light.500"}
              borderBottomWidth={2}
              paddingBottom={5}
            >
              <Box width={300}>
                <Text color={"white"}>D. Fox</Text>
              </Box>
              <Text style={{ textAlign: "right" }} color={"white"}>
                7.7
              </Text>
            </HStack>
          </TouchableOpacity>
          <Text
            style={{ color: "white", textAlign: "center", margin: 5 }}
            fontSize={"xl"}
          >
            Rebounds
          </Text>
          <HStack margin={5}>
            <Box width={300}>
              <Text color={"white"}>Player</Text>
            </Box>
            <Text style={{ textAlign: "right" }} color={"white"}>
              Rebounds
            </Text>
          </HStack>
          <TouchableOpacity onPress={() => handlePress(11)}>
            <HStack margin={5} marginTop={0}>
              <Box width={300}>
                <Text color={"white"}>Anthony Davis</Text>
              </Box>
              <Text style={{ textAlign: "right" }} color={"white"}>
                14.1
              </Text>
            </HStack>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress(8)}>
            <HStack margin={5} marginTop={0}>
              <Box width={300}>
                <Text color={"white"}>Nikola Jokic</Text>
              </Box>
              <Text style={{ textAlign: "right" }} color={"white"}>
                13.3
              </Text>
            </HStack>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress(12)}>
            <HStack margin={5} marginTop={0}>
              <Box width={300}>
                <Text color={"white"}>Kevon Looney</Text>
              </Box>
              <Text style={{ textAlign: "right" }} color={"white"}>
                13.1
              </Text>
            </HStack>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress(13)}>
            <HStack margin={5} marginTop={0}>
              <Box width={300}>
                <Text color={"white"}>Rudy Gobert</Text>
              </Box>
              <Text style={{ textAlign: "right" }} color={"white"}>
                12.2
              </Text>
            </HStack>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress(5)}>
            <HStack
              margin={5}
              marginTop={0}
              borderBottomColor={"light.500"}
              borderBottomWidth={2}
              paddingBottom={5}
            >
              <Box width={300}>
                <Text color={"white"}>G. Antetokounmpo</Text>
              </Box>
              <Text style={{ textAlign: "right" }} color={"white"}>
                33
              </Text>
            </HStack>
          </TouchableOpacity>
        </ScrollView>
      </Box>
    </SafeAreaView>
  );
};

export default Statistics;
