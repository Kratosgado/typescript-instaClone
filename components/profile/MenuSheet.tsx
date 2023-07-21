import React, { ReactNode } from 'react';
import { Modal, View, Text, StyleSheet, TouchableWithoutFeedback, Pressable } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationProps } from '../../navigation';
import { PopupProps, SheetItemProps, sheetListItems } from './sheetData';



export const MenuSheets: React.FC<PopupProps> = ({ visible, onClose, navigation }) => {

  return (
    <Modal visible={visible} transparent animationType="slide"  >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.backdrop}>
          <View style={styles.sheet}>
            {
              sheetListItems.map((item, index) => (
                <SheetItem key={index} {...item} navigation={navigation}/>
              ))
            }
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const SheetItem: React.FC<SheetItemProps & NavigationProps> = ({name, icon, navigation}) => {
  return (
    <Pressable style={{flexDirection: "row", justifyContent: "flex-start"}}>
      <MaterialCommunityIcons name={icon} size={24} color={"white"} />
      <Text style={{color: "white", fontSize: 16}} >{name}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({

  backdrop: {
    flex: 1,
  },
  sheet: {
    bottom: 0,
    position: "absolute",
    padding: 8,
    height: "60%",
    width: "100%",
    backgroundColor: '#252525',
    borderRadius: 30,
    justifyContent: "space-around",
    elevation: 10,
  },
});