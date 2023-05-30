import { View, Text, Button, SafeAreaView } from "react-native";
import { Box } from "native-base";
import NewsCard from "../Shared/Components/NewsCard";
import { VStack } from "native-base";
import { useState ,useEffect} from "react";
import { NewsService } from "../Services/NewsService";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaInsetsContext } from "react-native-safe-area-context";
const Home = () => {
  const [news, setNews] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const fetchNews =async ()=>{
    setIsLoading(true)
    let result = await NewsService.getNews();
    setNews(result.articles)
    console.log(result.articles)
    setIsLoading(false);
  }
  useEffect(() => {
    fetchNews();
  }, [])
  if(isLoading===false)
  return (
    <SafeAreaView>
    <Box style={{ backgroundColor: "#222222", height: "100%" }}>
      <VStack>
        <Text style={{backgroundColor:"#191a19",padding:5,color:"white",textAlign:"center",fontSize:20,fontWeight:"bold",marginTop:20}}>Latest News</Text>
        
        {
          <FlatList 
          data={news}
          renderItem={({item})=><NewsCard  href={item.url} image={item.urlToImage} author={item.author} title={item.title} text={item.description} date={item.publishedAt} nameOfSource={item.source.name} />}
          style={{marginBottom:100}}
          />      
          
  }
      </VStack>
    </Box>
    </SafeAreaView>
  );
  else
  return (
    <Box style={{ height: "100%" }} backgroundColor={"#222222"}>
      <NativeSpinner />
    </Box>
  );    
};

export default Home;
