import React, { ReactNode } from 'react';
import { Modal, View, Text,Image, StyleSheet, TouchableWithoutFeedback, Pressable } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationProps } from '../../navigation';
import { PopupProps, SheetItemProps } from '../profile/sheetData';
import { Comment, PostProps } from './Posts';
import { User } from '../profile/UserInfo';
import { USERS } from '../../data/users';
import { ProfileScreen } from '../../screens/ProfileScreeen';


export const CommentSheet: React.FC<PopupProps & PostProps> = ({ visible, onClose, navigation, ...post }) => {

  return (
    <Modal visible={visible} transparent animationType="slide"  >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.backdrop}>
          <View style={styles.sheet}>
            <View
              style={{
                backgroundColor: "white",
                width: 50, height: 3,
                alignSelf: "center",
                borderRadius: 3,
              }}>
            </View>
            <Text style={{color: "white", alignSelf: "center", padding: 15, fontSize: 18, fontWeight: "bold"}}>Comments</Text>
            <View
              style={{backgroundColor: "white",width: "100%", height: 0.5,alignSelf: "center",borderRadius: 3,
              }}>
            </View>
            {
              post.comments.map((comment) => (
                <CommentItem navigation={navigation} {...comment} />
              ))
            }
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const CommentItem: React.FC<NavigationProps & Comment> = ({ navigation, ...comment }) => {
  function findUserIndexById(id:string) : number{
    return USERS.findIndex((user)=> user.id === comment.id)
  }
  const user: User = USERS[findUserIndexById(comment.id)]
  const handleProfilePress = () => {
    // Navigate to the OtherUsersProfile screen when a comment is pressed
    navigation.navigate('OtherUsersProfile', user);
  };

  return (
    <View style={styles.sheetTile}>
      <Pressable onPress={handleProfilePress}>
        <Image source={{uri: user.profilePicture}} style={{height: 40, width: 40, borderRadius: 20, alignSelf: "center"}} />
      </Pressable>
      <View style={{paddingLeft: 10, top: 5, width: "80%"}}>
        <Text style={{ color: "white"}}>{comment.username}</Text>
        <Text style={{ color: "white" }}>{comment.comment}</Text>
        <Pressable>
          <Text style={{ color : "gray"}}>reply</Text>
        </Pressable>
      </View>
      <MaterialCommunityIcons name="heart-outline" size={20} color={"white"} style={{alignSelf: "center"}}/>
    </View>
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
    width: "100%",
    height: "60%",
    backgroundColor: '#252525',
    borderRadius: 30,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    elevation: 10,
    flexDirection: "column"
   },
  sheetTile: {
    height: 50,
    flexDirection: "row",
    width: "100%",
    margin: 10,
  }
});