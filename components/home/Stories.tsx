import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Pressable } from 'react-native';
import { NavigationProps } from '../../navigation';
import { POSTS } from '../../data/posts';
import { PostProps } from './Posts';
import { LinearGradient } from 'expo-linear-gradient';

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
            <Pressable onPress={() => navigation.navigate('ViewPostScreen', post)}>
                <LinearGradient 
                    colors={['#e00909','#e00909', '#eb2c17', '#d05e07', '#d05e07','#d05e07','#e00909']}
                    style={styles.storyItem}
                >
                <View style={styles.storyItem} >
                <Image source={{ uri: picture }} style={styles.profilePicture} />
                </View>
                </LinearGradient>
                <Text style={styles.username}> {username} </Text>

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
        width: 66,
        height: 66,
        marginHorizontal: 5,
        borderRadius: 32,
    },
    profilePicture: {
        width: 60,
        height: 60,
        borderRadius: 30,
        resizeMode: "center",
        top: 3
        // borderColor: "#ff8501",
    },
    username: {
        marginTop: 8,
        fontSize: 12,
        textAlign: 'center',
        color: 'white'
    },
});
