import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity, Button } from "react-native";

export type User = {
    id: string,
    username: string,
    profilePicture: string,
    posts: number,
    followers: number,
    following: number,
    bio: string
}

export const UserInfo: React.FC<User> = (currentUser) => {
    const { id, username, profilePicture, posts, followers, following, bio } = currentUser;

    return (
        <View style={styles.infoContainer}>
            <View style={styles.picFollowersContainer}>
                <Image source={{
                    uri: profilePicture
                }} style={styles.profilePicture} />
                <TouchableOpacity style={styles.followersButton}>
                    <Text style={{ color: "white" }}>{posts}</Text>
                    <Text style={{ color: "white" }}>Posts</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.followersButton}>
                    <Text style={{ color: "white" }}>{followers}</Text>
                    <Text style={{ color: "white" }}>Followers</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.followersButton}>
                    <Text style={{ color: "white" }}>{following}</Text>
                    <Text style={{ color: "white" }}>Following</Text>
                </TouchableOpacity>
            </View>
            <Text style={{ color: "white" }}>
                {username}
                <Text style={{ fontWeight: "100" }}> he/him/his</Text>
            </Text>
            <Text style={{ color: "white" }}>{bio}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    infoContainer: {
        height: 500,
        padding: 15,
    },
    picFollowersContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",

    },
    profilePicture: {
        height: 64,
        width: 64,
        borderRadius: 32,
        resizeMode: "contain",
        borderWidth: 2,
        borderColor: "white"
    },
    followersButton: {
        color: "black",
        flexDirection: "column",
        alignItems: "center",
    }
})