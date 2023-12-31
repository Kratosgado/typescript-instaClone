import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Pressable, Animated } from 'react-native';
import { Divider } from 'react-native-elements';
import { Ionicons, Feather, FontAwesome, Entypo } from '@expo/vector-icons';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '../../navigation';
import { CommentSheet } from './PostCommentSheet';
import { USERS } from '../../data/users';
import { User } from '../profile/UserInfo';

export type Comment = {
    id: string,
    username: string,
    comment: string,
}

export type PostProps =  {
    userId: string;
    postId: string;
    username: string;
    profile_picture: string;
    imageUrl: string;
    likes: number;
    caption: string;
    comments:  Comment[]
}

export const Post: React.FC<PostProps & NavigationProps> = (postProps) => {
    const [showCommentSheet, setShowCommentSheet] = useState(false);
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(postProps.likes);
    const auth = getAuth();
    const db = getFirestore();

    useEffect(() => {
        // If the initial like count is greater than 0, the user has liked the post
        setLiked(postProps.likes > 0);
      }, []);
    
      const handleLike = () => {
        // Toggle the liked state and increase/decrease the like count accordingly
        if (liked) {
          setLikeCount((prevLikeCount) => prevLikeCount - 1);
        } else {
          setLikeCount((prevLikeCount) => prevLikeCount + 1);
        }
        setLiked((prevLiked) => !prevLiked);
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
    
    const PostImage: React.FC<PostProps> = (post) => {
        return (
            <Pressable onMagicTap={()=>handleLike}>
                <Image source={{ uri: post.imageUrl }} style={styles.postImage} />
        </Pressable>
    )
    };

    const PostFooter: React.FC<PostProps> = (post, navigation: NavigationProps) => {
    
    return (
        <View style={styles.postFooterContainer}>
            <View style={styles.iconsContainer}>
                <View style={styles.iconGroup}>
                    <TouchableOpacity onPress={handleLike}>
                    <Animated.View style={{ transform: [{ scale: liked ? 1.2 : 1 }] }}>
                    {/* Use Animated.View to animate the scale when liked */}
                        <Ionicons name={liked ? 'heart' : 'heart-outline'} size={24} color={liked ? 'red' : 'white'} style={styles.icon} />
                    </Animated.View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>setShowCommentSheet(true)}>
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
            <Text style={{color: "white"}}>{likeCount} {likeCount > 1 ? "likes" : "like"} </Text>
            <Text style={{ color: "white" }} >{post.username}    {post.caption}</Text>
            {/* Comment session */}
            <Pressable
                style={{ padding: 5, bottom: 3 }}
                onPress={()=>setShowCommentSheet(true)}
            >
            <Text style={{ color: "gray" }}>
                view {post.comments.length > 1 ? "all " : " "}
                {post.comments.length}
                {post.comments.length > 1 ? " comments" : "comment"}
                </Text>
            </Pressable>
            {/* Show commentSheet */}
            <CommentSheet visible={showCommentSheet} onClose={()=>setShowCommentSheet(false)} navigation={navigation.navigation} {...post} />
            <View style={styles.commentContainer}>
                <Image
                    source={{ uri: 'https://avatars.githubusercontent.com/u/29388627?v=4' }}
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

    return (
        <View style={styles.container}>
            <Divider width={0.5} color='white' />
            <PostHeader {...postProps} />
            <PostImage {...postProps} />
            <PostFooter {...postProps} />
        </View>
    );
};


export const PostHeader: React.FC<PostProps & NavigationProps> = ( {navigation, ...post}) => {
    function findUserIndexById(id:string) : number{
        return USERS.findIndex((user)=> user.id === post.userId)
      }
      const user: User = USERS[findUserIndexById(post.userId)]
    return (
        <View style={styles.postHeaderContainer}>
            <Pressable style={{ flexDirection: "row", alignItems: "center" }} onPress={()=>navigation.navigate("OtherUsersProfile", user)}>
                <Image source={{ uri: post.profile_picture }} style={styles.profile_picture} />
                <Text style={styles.username}>{post.username}</Text>
            </Pressable>
            <Entypo name="dots-three-vertical" size={24} color='white' />
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
        height: 40,
        margin: 10,
        justifyContent: "space-between"
    },
    profile_picture: {
        width: 35,
        height: 35,
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
        backgroundColor: '#131212',
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
