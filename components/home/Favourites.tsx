import { View, Text } from "react-native"
import { Image } from "react-native-elements"

export const FavouriteScreen = () => {
   return (
      <View style={{ backgroundColor: "black" , flex: 1}}>
         <Image source={require("../../assets/favscreen.jpg")} style ={{height: "100%"}} />
      </View>
   )
}