import { View, StyleSheet, } from "react-native"
import { PHeader } from "../components/profile/PHeader"
import { UserInfo } from "../components/profile/UserInfo"
import { StoryHighlight } from "../components/profile/StoryHighlight"
import { ProfileTabs } from "../components/profile/ProfileTabs"
import { NavigationWithParams } from "../navigation"


export const OtherUsersProfile: React.FC<NavigationWithParams> = ({ route, navigation }) => {
   
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