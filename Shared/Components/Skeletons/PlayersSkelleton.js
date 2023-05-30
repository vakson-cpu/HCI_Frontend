import { Skeleton } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";

const PlayersSkelleton = () => {
  return (
    <SafeAreaView>
      <Skeleton.Text lines={50} px={5} py={2} />
    </SafeAreaView>
  );
};

export default PlayersSkelleton;
