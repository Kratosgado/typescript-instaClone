import { View, FlatList, Image, StyleSheet } from "react-native";
import { POSTS } from "../../data/posts";

type PostProps = {
    id: string;
    imageUrl: string;
  }
  
export const GridPost: React.FC = () => {
    let posts: PostProps[] = POSTS.map((post) => ({
      id: post.postId,
      imageUrl: post.imageUrl
    }))
    
    posts = posts.flatMap((item )=>[item, item]) // double the posts list
    
    const renderItem = ({ item }: { item: PostProps }) => {
      return (
        <View style={styles.item}>
          <Image style={{resizeMode: "stretch", height: '100%', width: '100%'}} source={{uri: `${item.imageUrl}`}} />
        </View>
      );
    };
  
    return (
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
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