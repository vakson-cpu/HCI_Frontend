import { HStack,Spinner } from "native-base";
export default  NativeSpinner = () => {
  return (
    <HStack space={8} justifyContent="center" alignItems="center">
      <Spinner size="lg" />
    </HStack>
  );
};
