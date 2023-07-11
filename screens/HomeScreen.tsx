import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { USERS } from '../data/users';
import { POSTS } from "../data/posts";
import { Header } from '../components/home/Header';
import { Stories, StoryList } from '../components/home/Stories';
import { PostProps, Post } from '../components/home/Posts';

const HomeScreen = () => {
    let stories: StoryList = {
        stories: USERS.map((user) => ({
            picture: user.profilePicture,
            username: user.username,
            id: user.id
        })),
    };

    let posts: PostProps[] = POSTS.map((post) => ({
        username: post.username,
        profilePicture: post.profile_picture,
        image: post.imageUrl,
        caption: post.caption,
    }))

    return (
        <View style={styles.container}>
            <Header />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Stories stories={stories.stories} />
                {posts.map((post, index) => (
                    <Post key={index} {...post} />
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
    },
});

export default HomeScreen;
