import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { USERS } from '../data/users';
import { POSTS } from "../data/posts";
import { Header } from '../components/home/Header';
import { Stories, StoryList } from '../components/home/Stories';
import { PostProps, Post } from '../components/home/Posts';
import { NavigationProps } from '../navigation';

const HomeScreen: React.FC<NavigationProps> = ({navigation}) => {
    let stories: StoryList = {
        stories: POSTS.map((post) => ({
            id: post.postId,
            picture: post.imageUrl,
            username:post.username,
        })),
    };

    let posts: PostProps[] = POSTS.map((post) => ({
        ...post
    }))

    return (
        <View style={styles.container}>
            <Header navigation={navigation}/>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Stories stories={stories.stories} navigation={navigation}/>
                {posts.map((post) => (
                    <Post key={post.postId} {...post} navigation={navigation}/>
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
