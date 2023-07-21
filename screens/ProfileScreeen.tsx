import { View, Text, StyleSheet, ScrollView } from "react-native"
import { PHeader } from "../components/profile/PHeader"
import { UserInfo } from "../components/profile/UserInfo"
import { USERS } from "../data/users"
import { User } from "../components/profile/UserInfo"
import { StoryHighlight } from "../components/profile/StoryHighlight"
import { ProfileTabs } from "../components/profile/ProfileTabs"
import { NavigationProps } from "../navigation"


export const ProfileScreen: React.FC<NavigationProps> = ({navigation}) => {
    const currentUser: User = USERS[0]
    return (
        <View style={styles.container}>
            <PHeader navigation={navigation}/>
            <UserInfo {...currentUser} />
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