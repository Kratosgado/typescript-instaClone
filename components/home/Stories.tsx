import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Pressable } from 'react-native';
import { NavigationProps } from '../../navigation';
import { POSTS } from '../../data/posts';
import { PostProps } from './Posts';

export type StoryItem = {
    id: string,
    picture: string,
    username: string,
}
export type StoryList = {
    stories: StoryItem[];
}


export const Stories: React.FC<StoryList & NavigationProps> = ({ stories, navigation }) => {

    const Story = ({ id, picture, username }: StoryItem) => {
        function findPostIndexById(id:string) : number{
            return POSTS.findIndex((post)=> post.postId === id)
          }
          const post: PostProps = POSTS[findPostIndexById(id)]
        return (
            <Pressable onPress={()=>navigation.navigate('ViewPostScreen', post)}>
                <View style={styles.storyItem} >
                <Image source={{ uri: picture }} style={styles.profilePicture} />
                <Text style={styles.username}> {username} </Text>
            </View>
            </Pressable>
        );
    }
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ marginRight: 16, height: 100 }}>
            {stories.map((story) => (
                <View key={story.username} style={styles.storyItem}>
                    <Story key={story.id} id={story.id} picture={story.picture} username={story.username} />
                </View>
            ))
            }
        </ScrollView >
    );
};


const styles = StyleSheet.create({
    storyContainer: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 16,
        borderBottomColor: '#DDDDDD',
        borderBottomWidth: 1,
    },
    storyItem: {
        alignItems: 'center',
        width: 64,
        height: 64,
        marginHorizontal: 5
    },
    profilePicture: {
        width: 64,
        height: 64,
        borderRadius: 32,
        resizeMode: "contain",
        borderColor: "#ff8501",
        borderWidth: 3,
    },
    username: {
        marginTop: 8,
        fontSize: 12,
        textAlign: 'center',
        color: 'white'
    },
});
