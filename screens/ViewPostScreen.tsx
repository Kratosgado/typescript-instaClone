import { View, Image,Text, TextInput, TouchableOpacity, StyleSheet } from "react-native"
import { NavigationProps, NavigationWithParams, ScreenList } from "../navigation"
import { RouteProp } from "@react-navigation/native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { PostHeader, PostProps } from '../components/home/Posts';
import { LinearGradient } from "expo-linear-gradient";

type ViewPostParams = NavigationProps & {
   route: RouteProp<ScreenList, "ViewPostScreen">
}

export const ViewPostScreen: React.FC<ViewPostParams> = ({navigation, route}) => {
   const post = route!.params as PostProps;
   return (
      <View style={{backgroundColor: "black", flex: 1}}>
         <LinearGradient
            colors={['#4c669f', '#3b5998', '#192f6a']}
            style={{ flex: 7, backgroundColor: "red", justifyContent: "space-between" }}
         >
            <PostHeader {...post} navigation={navigation}/>
            <Image source={{ uri: post!.imageUrl }} style={{ height: "60%", width: "80%", alignSelf: "center" }} />
            <View>
               <Text style={{color: "white", fontSize: 30, left: 50, bottom: 50}}>@whoever</Text>
            </View>
         </LinearGradient>
         <View style={{flex: 1, flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 20}}>
            <TextInput
                    style={styles.commentInput}
                    placeholder="Add a comment..."
                    placeholderTextColor="#AAAAAA"
                    multiline
            />
            <TouchableOpacity>
               <MaterialCommunityIcons name="heart-outline" size={24} color={"white"} style={{padding: 5}}/>
            </TouchableOpacity>
               <TouchableOpacity>
                    <Feather name="send" size={24} color="white" style={{padding: 5, alignSelf: 'center'}} />
               </TouchableOpacity>
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   commentInput: {
      flex: 1,
      height: 40,
      borderRadius: 20,
      backgroundColor: '#131212',
      color: 'white',
      paddingHorizontal: 15,
      fontSize: 14,
  },
})