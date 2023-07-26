import { View, FlatList, Image, StyleSheet, Pressable } from "react-native";
import { POSTS } from "../../data/posts";
import { NavigationProps } from "../../navigation";
import { PostProps } from "../home/Posts";


export const GridPost: React.FC<NavigationProps> = ({navigation}) => {
    let posts: PostProps[] = POSTS.map((post) => ({
      ...post
    }))
    
    //posts = posts.flatMap((item )=>[item, item]) // double the posts list
    
  const renderItem = ({ item }: { item: PostProps }) => {
      return (
        <Pressable style={styles.item} onPress={()=>navigation.navigate("ViewPostScreen", item )}>
          <Image style={{resizeMode: "stretch", height: '100%', width: '100%'}} source={{uri: `${item.imageUrl}`}} />
        </Pressable>
      );
    };
  
    return (
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item.postId}
        numColumns={3} // Set the number of columns in the grid
        contentContainerStyle={styles.gridContainer}
      />
    );
};
  
  const styles = StyleSheet.create({
    gridContainer: {
      flexGrow: 1,
      justifyContent: "flex-start",
      paddingVertical: 5,
    },
    item: {
      flex: 1,
      margin: 2,
      justifyContent: 'center',
      alignItems: 'center',
      height: 130,
    },
  });