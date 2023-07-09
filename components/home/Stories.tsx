import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export type StoryItem = {
    picture: string;
    username: string;
}
export type StoryList = {
    stories: StoryItem[];
}


export const Stories: React.FC<StoryList> = ({ stories }) => {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ marginRight: 16 }}>
            {stories.map((story) => (
                <View key={story.username} style={styles.storyItem}>
                    <Story picture={story.picture} username={story.username} />
                </View>
            ))
            }
        </ScrollView >
    );
};


export const Story = ({ picture, username }: StoryItem) => (
    <View style={styles.storyItem} >
        <Image source={{ uri: picture }} style={styles.profilePicture} />
        <Text style={styles.username}> {username} </Text>
    </View>
);
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
