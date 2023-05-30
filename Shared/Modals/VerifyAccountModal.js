import { Center, Modal, Input, Button, FormControl } from "native-base";
import { useState } from "react";
import { authService } from "../../Services/authService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setVerify } from "../../Redux/Slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
const VerifyAccountModal = ({ showModal, setShowModal }) => {
  const [code, setCode] = useState("");
  const isVerified = useSelector((state) => state.User.Verified);
  const dispatch = useDispatch();
  console.log("Verified",isVerified)
  const VerifyUser = async () => {
    let userId = await AsyncStorage.getItem("Id")
      .then((value) => value)
      .catch((err) => err);
    if (userId != null)
      try {
        console.log("user id je : ", userId);
        let result = await authService.VerifyUser(code, userId);
        console.log("resultat je : ,", result);
        console.log("code je :", code);
        alert("Successfuly Verified!");
        dispatch(setVerify("1"));
        setShowModal(false);
      } catch (err) {
        alert("Something went wrong!");
        return;
      }
  };

  return (
    <Center>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content backgroundColor={"#262626"} maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header
            borderColor={"white"}
            _text={{ fontSize: "md", fontWeight: "bold", color: "grey" }}
            backgroundColor={"#262626"}
          >
            Verify Account
          </Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Code</FormControl.Label>
              <Input
                maxLength={4}
                color={"white"}
                value={code}
                onChangeText={(text) => setCode(text)}
              />
            </FormControl>
          </Modal.Body>
          <Modal.Footer
            mt={5}
            borderTopColor={"white"}
            backgroundColor={"#262626"}
          >
            <Button.Group>
              <Button
                variant="outline"
                _text={{ color: "red.300" }}
                borderColor={"red.400"}
                onPress={() => {
                  setShowModal(false);
                }}
              >
                Cancel
              </Button>
              <Button
                // bgColor={"success.700"}
                variant={"outline"}
                colorScheme={"success"}
                borderColor={"success.700"}
                width={100}
                onPress={VerifyUser}
              >
                Verify
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};
export default VerifyAccountModal;
