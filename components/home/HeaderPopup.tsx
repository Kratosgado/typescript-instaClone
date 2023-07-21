import React, { ReactNode } from 'react';
import { Modal, View, Text, StyleSheet, TouchableWithoutFeedback, Pressable } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationProps } from '../../navigation';

type PopupProps = NavigationProps &  {
  visible: boolean;
  onClose: () => void;
};

export const HeaderPopup: React.FC<PopupProps> = ({ visible, onClose, navigation}) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.backdrop}>
          <View style={styles.popup}>
            <Pressable
              style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}
              onPress={()=>navigation.navigate("FollowingScreen")}
            >
              <Text style={{ color: "white", fontSize: 16}} >Following</Text>
              <MaterialCommunityIcons name="account" color={"white"} size={24}/>
            </Pressable>
            <Pressable
              style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}
              onPress={()=>navigation.navigate("FavouriteScreen")}
            >
              <Text style={{ color: "white", fontSize: 16}} >Favourites</Text>
              <MaterialCommunityIcons name="star-outline" color={"white"} size={24}/>
            </Pressable>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    top: 50,
    left: 20
  },
  popup: {
    width: 130,
    padding: 8,
    height: 80,
    backgroundColor: '#1a1717',
    borderRadius: 8,
    justifyContent: "space-around",
    elevation: 5,
  },
});