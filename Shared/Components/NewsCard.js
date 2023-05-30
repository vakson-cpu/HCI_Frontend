import { Box,Image,Center,HStack,Stack,Text,Heading, Link } from "native-base";

const NewsCard = ({image,title,text,date,author,href,nameOfSource}) => {
    return <Box alignItems="center" marginTop={10} >
        <Box w="80" rounded="md" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
        borderColor: "black",
        backgroundColor: "gray.700"
      }} _web={{
        shadow: 2,
        borderWidth: 0
      }} _light={{
        backgroundColor: "#212120"
      }}>
          <Box>
              <Image style={{width:"100%",height:100}} source={{
              uri: image
            }} alt="image" />
            <Center bg="violet.500" _dark={{
            bg: "violet.400"
          }} _text={{
            color: "warmGray.50",
            fontWeight: "700",
            fontSize: "xs"
          }} position="absolute" bottom="0" px="3" py="1.5">
              {nameOfSource}
            </Center>
          </Box>
          <Stack p="4" space={3}>
            <Stack space={2}>
              <Heading size="md" ml="-1" color={"lightgrey"}>
                {title}
              </Heading>
              <Text fontSize="xs" _light={{
              color: "goldenrod"
            }} _dark={{
              color: "goldenrod"
            }} fontWeight="500" ml="-0.5" mt="-1">
                {author}
              </Text>
            </Stack>
            <Text fontWeight="400" color={"white"}>
              {text}
            </Text>
            <HStack alignItems="center" space={4} justifyContent="space-between">
              <HStack alignItems="center">
                <Text color="lightgrey" _dark={{
                color: "lightgrey"
              }} fontWeight="400">
                  {date.slice(0,10)}
                </Text>
              </HStack>
            </HStack>
            
            <Link style={{margin:5}} href={href} 

    
      >
        <Text     color={"violet.400"}>
          Read More...
          </Text>
        </Link>
          </Stack>
        </Box>
        
      </Box>;
  };


  export default NewsCard