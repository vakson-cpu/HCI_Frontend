import { Modal, Center, Button, FormControl, Input } from "native-base";
import { Icon } from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useState } from "react";
import { authService } from "../../Services/authService";
import { Pressable, Text } from "react-native";
import { useDispatch } from "react-redux";
import { setVerify, signIn } from "../../Redux/Slices/authSlice";
import NativeSpinner from "../Components/NativeSpinner"


const RegistrationModal = ({ showModal, setShowModal }) => {
  const [name, setName] = useState({ value: "", error: false });
  const [email, setEmail] = useState({ value: "", error: false });
  const [password, setPassword] = useState({ value: "", error: false });
  const [password2, setPassword2] = useState({ value: "", error: false });
  const [modalFlag, setModalFlag] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch();
  const validatePassword = () => {
    if (password.value !== password2.value) return false;
    if (password.value.length < 6) {
      setPassword({ ...password, error: true });
      return false;
    }
    return true;
  };
  const hanldeRegistration = async () => {
    if (validatePassword() == false)
      return alert("Validation failed, make sure that passwords match!");
    try {
      setIsLoading(true);
      let result = await authService.Register(
        name.value,
        email.value,
        password.value
      );
      setIsLoading(false);
      alert("Successfuly Registerd! We have sent verification code!");
      setModalFlag(true);
    } catch (err) {
      alert("Something went wrong, please try again!");
    }
  };
  const handleSignIn =async()=>{
    try{
      setIsLoading(true)
    let result = await authService.Login(email.value,password.value);
    dispatch(signIn(result.role.name))
    dispatch(setVerify("result.verified"))
    setIsLoading(false);
    setShowModal(false);
    }catch(err){
      console.log(err)
      alert("Invalid Credentials!")
      return;
    }
  }

  if (modalFlag == false)
    return (
      <Center>
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          { isLoading==false ?
          <Modal.Content backgroundColor={"#262626"} maxWidth="400px">
            <Modal.CloseButton />
            <Modal.Header
              borderColor={"white"}
              _text={{ fontSize: "md", fontWeight: "bold", color: "grey" }}
              backgroundColor={"#262626"}
            >
              Register
            </Modal.Header>
            <Modal.Body>
              <FormControl isRequired>
                <FormControl.Label>Name</FormControl.Label>
                <Input
                  value={name.value}
                  onChangeText={(text) => setName({ ...name, value: text })}
                  pl={2}
                  cursorColor={"white"}
                  variant="underlined"
                  InputLeftElement={
                    <Icon as={<MaterialIcons name="person" />} size={5} />
                  }
                  color={"white"}
                />
              </FormControl>
              <FormControl mt="3" isRequired>
                <FormControl.Label>Email</FormControl.Label>
                <Input
                  pl={2}
                  cursorColor={"white"}
                  value={email.value}
                  onChangeText={(text) => setEmail({ ...email, value: text })}
                  variant="underlined"
                  InputLeftElement={
                    <Icon as={<MaterialIcons name="email" />} size={5} />
                  }
                  color={"white"}
                />
              </FormControl>
              <FormControl mt="3" isRequired>
                <FormControl.Label>Password</FormControl.Label>
                <Input
                  value={password.value}
                  onChangeText={(text) =>
                    setPassword({ ...password, value: text })
                  }
                  pl={2}
                  cursorColor={"white"}
                  variant="underlined"
                  type="password"
                  InputLeftElement={
                    <Icon as={<MaterialIcons name="lock" />} size={5} />
                  }
                  color={"white"}
                />
                <FormControl.HelperText>
                  Must be atleast 6 characters.
                </FormControl.HelperText>
                <FormControl.ErrorMessage
                  leftIcon={<MaterialIcons name="warning" size="xs" />}
                >
                  Atleast 6 characters are required.
                </FormControl.ErrorMessage>
              </FormControl>
              <FormControl mt="3" mb="6" isRequired>
                <FormControl.Label>Confirm Password</FormControl.Label>
                <Input
                  value={password2.value}
                  onChangeText={(text) =>
                    setPassword2({ ...password2, value: text })
                  }
                  cursorColor={"white"}
                  pl={2}
                  variant="underlined"
                  type="password"
                  InputLeftElement={
                    <Icon as={<MaterialIcons name="lock" />} size={5} />
                  }
                  color={"white"}
                />
              </FormControl>

              <Pressable
                stle={{ marginTop: 20 }}
                onPress={() => setModalFlag(true)}
              >
                <Text
                  style={{
                    color: "lightgray",
                    textDecorationLine: "underline",
                    textAlign: "center",
                  }}
                >
                  Already have an Account?
                </Text>
              </Pressable>
            </Modal.Body>
            <Modal.Footer
              mt={5}
              borderTopColor={"white"}
              backgroundColor={"#262626"}
            >
              {" "}
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
                  onPress={hanldeRegistration}
                >
                  Register
                </Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>:<NativeSpinner />}
        </Modal>
                
      </Center>
    );
  else
    return (
      <Center>
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          {isLoading===false ?
          <Modal.Content backgroundColor={"#262626"} maxWidth="400px">
            <Modal.CloseButton />
            <Modal.Header
              borderColor={"white"}
              _text={{ fontSize: "md", fontWeight: "bold", color: "grey" }}
              backgroundColor={"#262626"}
            >
              Sign In
            </Modal.Header>
            <Modal.Body>
              <FormControl mt="3" isRequired>
                <FormControl.Label>Email</FormControl.Label>
                <Input
                  pl={2}
                  cursorColor={"white"}
                  value={email.value}
                  onChangeText={(text) => setEmail({ ...email, value: text })}
                  variant="underlined"
                  InputLeftElement={
                    <Icon as={<MaterialIcons name="email" />} size={5} />
                  }
                  color={"white"}
                />
                
              </FormControl>
              <FormControl mt="3" isRequired>
                <FormControl.Label>Password</FormControl.Label>
                <Input
                  value={password.value}
                  onChangeText={(text) =>
                    setPassword({ ...password, value: text })
                  }
                  pl={2}
                  cursorColor={"white"}
                  variant="underlined"
                  type="password"
                  InputLeftElement={
                    <Icon as={<MaterialIcons name="lock" />} size={5} />
                  }
                  color={"white"}
                />
              </FormControl>
              <Pressable
                  style={{
                    marginTop: 20,
                  }}
                  onPress={() => setModalFlag(false)}
                >
                  <Text
                    style={{
                      color: "lightgray",
                      textDecorationLine: "underline",
                      textAlign: "center",
                    }}
                  >
                    Dont have an Account? Sign Up!
                  </Text>
                </Pressable>
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
                  onPress={handleSignIn}
                >
                  Sign In
                </Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>:<NativeSpinner></NativeSpinner>
}
        </Modal>
      </Center>
    );
};
export default RegistrationModal;
