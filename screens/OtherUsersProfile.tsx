import { View, Text, StyleSheet, ScrollView } from "react-native"
import { PHeader } from "../components/profile/PHeader"
import { UserInfo } from "../components/profile/UserInfo"
import { USERS } from "../data/users"
import { User } from "../components/profile/UserInfo"
import { StoryHighlight } from "../components/profile/StoryHighlight"
import { ProfileTabs } from "../components/profile/ProfileTabs"
import { NavigationProps, ScreenList } from "../navigation"
import { RouteProp } from "@react-navigation/native"

type OtherUsersProfileScreenProps = NavigationProps & {
   route: RouteProp<ScreenList, 'OtherUsersProfile'>;
 };
 

export const OtherUsersProfile: React.FC<OtherUsersProfileScreenProps> = ({ route, navigation }) => {
   
    return (
        <View style={styles.container}>
            <PHeader navigation={navigation}/>
            <UserInfo {...route.params!} />
            <StoryHighlight />
            <ProfileTabs />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    }
})