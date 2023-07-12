import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";

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
        <View>
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
            <Text style={{ color: "white", marginLeft: 10}}>
                {username}
                <Text style={{ fontWeight: "300" }}> he/him/his</Text>
            </Text>
            <Text style={{ color: "white", marginLeft: 10 }}>{bio}</Text>

            <View style={{flexDirection: "row", justifyContent: "space-around", padding: 10}}>
                <TouchableOpacity style={styles.button}>
                    <Text style={{ color: "white", marginHorizontal: 30}}>Edit Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                <Text style={{color: "white", marginHorizontal: 30}}>Share profile </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Ionicons name="person-add" size={16} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    picFollowersContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        padding: 8

    },
    profilePicture: {
        height: 70,
        width: 70,
        borderRadius: 35,
        resizeMode: "contain",

    },
    followersButton: {
        color: "black",
        flexDirection: "column",
        alignItems: "center",
    },
    button: {
        backgroundColor: "#1a1a1b",
        paddingVertical: 7,
        paddingHorizontal: 10,
        borderRadius: 10
    }
})