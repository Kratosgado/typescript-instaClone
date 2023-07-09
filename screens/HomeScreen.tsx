import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { USERS } from '../data/users';
import { POSTS } from "../data/posts";
import { Header } from '../components/home/Header';
import { Stories, Story, StoryList } from '../components/home/Stories';
import { StoryItem } from '../components/home/Stories';

const HomeScreen = () => {
    let stories: StoryList = {
        stories: USERS.map((user) => ({
            picture: user.profilePicture,
            username: user.username,
        })),
    };

    return (
        <View style={styles.container}>
            <Header />
            <Stories stories={stories.stories} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
    },
    postList: {
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    postContainer: {
        marginBottom: 16,
    },
    userInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 8,
    },
    username: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    postImage: {
        width: '100%',
        height: 300,
        resizeMode: 'cover',
        marginBottom: 8,
    },
    caption: {
        fontSize: 14,
    },
});

export default HomeScreen;
