import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-elements';
import { Ionicons, Feather, FontAwesome, AntDesign } from '@expo/vector-icons';

export type PostProps = {
    username: string;
    profilePicture: string;
    image: string;
    caption: string;
}

export const Post: React.FC<PostProps> = (postProps: PostProps) => {
    const { username, profilePicture, image, caption } = postProps;

    return (
        <View style={styles.container}>
            <Divider width={1} color='white' />
            <PostHeader username={username} profilePicture={profilePicture} />
            <PostImage image={image} />
            <PostFooter caption={caption} />
        </View>
    );
};

type PostHeaderProps = {
    username: string;
    profilePicture: string;
}

const PostHeader: React.FC<PostHeaderProps> = ({ username, profilePicture }) => {
    return (
        <View style={styles.postHeaderContainer}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image source={{ uri: profilePicture }} style={styles.profilePicture} />
                <Text style={styles.username}>{username}</Text>
            </View>
            <FontAwesome name="dot-circle-o" size={24} color='white' />
        </View>
    );
};

type PostImageProps = {
    image: string;
}

const PostImage: React.FC<PostImageProps> = ({ image }) => {
    return <Image source={{ uri: image }} style={styles.postImage} />;
};

interface PostFooterProps {
    caption: string;
}

const PostFooter: React.FC<PostFooterProps> = ({ caption }) => {
    const handleLike = () => {
        // Handle like functionality
    };

    const handleComment = () => {
        // Handle comment functionality
    };

    const handleShare = () => {
        // Handle share functionality
    };

    const handleBookmark = () => {
        // Handle bookmark functionality
    };

    return (
        <View style={styles.postFooterContainer}>
            <View style={styles.iconsContainer}>
                <View style={styles.iconGroup}>
                    <TouchableOpacity onPress={handleLike}>
                        <Ionicons name="heart-outline" size={24} color="white" style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleComment}>
                        <Ionicons name="chatbubble-outline" size={24} color="white" style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleShare}>
                        <Ionicons name="paper-plane-outline" size={24} color="white" style={styles.icon} />
                    </TouchableOpacity>
                </View>
                <View style={styles.iconGroup}>
                    <TouchableOpacity onPress={handleBookmark}>
                        <Ionicons name="bookmark-outline" size={24} color="white" style={styles.icon} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.commentContainer}>
                <Image
                    source={{ uri: 'https://example.com/user-profile.jpg' }}
                    style={styles.profileImage}
                />
                <TextInput
                    style={styles.commentInput}
                    placeholder="Add a comment..."
                    placeholderTextColor="#AAAAAA"
                    multiline
                />
                <TouchableOpacity>
                    <Feather name="send" size={24} color="white" style={styles.sendIcon} />
                </TouchableOpacity>
            </View>
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
    },
    postHeaderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        margin: 10,
        justifyContent: "space-between"
    },
    profilePicture: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 8,
    },
    username: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    postImage: {
        width: '100%',
        height: 500,
        resizeMode: 'cover',
        marginBottom: 8,
    },
    postFooterContainer: {
        paddingHorizontal: 16,
        paddingTop: 8,
        paddingBottom: 16,
    },
    iconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    iconGroup: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginRight: 12,
    },
    commentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileImage: {
        width: 24,
        height: 24,
        borderRadius: 12,
        marginRight: 8,
    },
    commentInput: {
        flex: 1,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#333333',
        color: 'white',
        paddingHorizontal: 12,
        fontSize: 14,
    },
    sendIcon: {
        marginLeft: 8,
    },
    caption: {
        fontSize: 14,
        color: 'white',
    },
});
