import { Box, Skeleton } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
const GamesSkeleton = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
      <SafeAreaView>
        <Skeleton.Text lines={1} px="4" my="3"  />
        <Skeleton h={"24"} px="4" my="1" rounded="xl" ></Skeleton>
        <Skeleton h={"24"} px="4" my="1" rounded="xl" ></Skeleton>
        <Skeleton h={"24"} px="4" my="1" rounded="xl" ></Skeleton>
        <Skeleton h={"24"} px="4" my="1" rounded="xl" ></Skeleton>
        <Skeleton h={"24"} px="4" my="1" rounded="xl" ></Skeleton>
        <Skeleton h={"24"} px="4" my="1" rounded="xl" ></Skeleton>
   
    
      </SafeAreaView>
  );
};

export default GamesSkeleton;
