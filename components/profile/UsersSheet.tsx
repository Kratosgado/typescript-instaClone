import React, { ReactNode } from 'react';
import { Modal, View,Image, Text, StyleSheet, TouchableWithoutFeedback, Pressable } from 'react-native';
import { MaterialCommunityIcons, } from "@expo/vector-icons";
import { signOut, getAuth } from "../../firebase";

import { NavigationProps } from '../../navigation';
import { PopupProps, SheetItemProps, sheetListItems } from './sheetData';
import { USERS } from '../../data/users';
import { User } from './UserInfo';


export const UsersSheet: React.FC<PopupProps> = ({ visible, onClose, navigation }) => {
   const currentUser: User = USERS[0];

   const handleSignout = () => {
      const auth = getAuth();
    
      // Sign out the current user
      signOut(auth)
        .then(() => {
          // Sign-out successful.
           console.log('User signed out successfully.');
           alert("User signed out successfully")
          // You can also perform any other actions after sign-out if needed.
        })
        .catch((error) => {
          // An error happened.
           console.error('Error signing out:', error);
           alert(`Error signing out:, ${error}`)
        });
    };
    
  return (
    <Modal visible={visible} transparent animationType="slide"  >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.backdrop}>
          <View style={styles.sheet}>
            <View style={{backgroundColor: "gray", width: 50, height: 3, alignSelf: "center", borderRadius: 3}}></View>
            <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 10}}>
                    <View style={{flexDirection: "row", alignItems:"center"}}>
                    <Image
                       source={{ uri: currentUser.profilePicture }}
                       style={{ height: 50, width: 50, borderRadius: 25, borderWidth: 2 }} />
                    <Text style={{ color: "white", padding: 10 }}>{currentUser.username}</Text>
                    </View>
                    <View
                       style={{
                          height: 26, width: 26, borderRadius: 13, backgroundColor: "black", borderWidth: 8, borderColor: "blue",
                       }}
                    ></View>
                 </View>
                     {/* Add new account */}
                 <Pressable onPress={handleSignout} style={{flexDirection: "row", alignItems: "center", padding: 10}}>
                    <View style={{backgroundColor: '#1a1a1b',height: 50,width: 50,borderRadius: 25, borderWidth: 1, borderColor: "white", alignItems: "center",justifyContent: "center",}}>
                        <Text style={{ color: "white", fontSize: 30 }}>+</Text>
                      </View>
                    <Text style={{ color: "white", padding: 10 }}>Add Account</Text>
                 </Pressable>
               <View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({

  backdrop: {
    flex: 1,
  },
  sheet: {
    bottom: 0,
    position: "absolute",
    padding: 8,
    width: "100%",
    backgroundColor: '#252525',
    borderRadius: 30,
    justifyContent: "space-around",
    elevation: 10,
  },
});