import { useState,useRef } from "react";
import { AlertDialog,Center,Button } from "native-base";
const CustomAlert = ({isOpen,setIsOpen,addToFavorite}) => {
  
    const onClose = () => setIsOpen(false);
  
    const cancelRef = useRef(null);
    return <Center>
        <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
          <AlertDialog.Content>
            <AlertDialog.CloseButton />
            <AlertDialog.Header>Add  Team to Favorites</AlertDialog.Header>
            <AlertDialog.Body>
                Are you sure you want to add team to favorites?
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button.Group space={2}>
                <Button variant="unstyled" colorScheme="coolGray" onPress={onClose} ref={cancelRef}>
                  No
                </Button>
                <Button colorScheme="danger" onPress={addToFavorite}>
                  Yes
                </Button>
              </Button.Group>
            </AlertDialog.Footer>
          </AlertDialog.Content>
        </AlertDialog>
      </Center>;
  };
  export default CustomAlert