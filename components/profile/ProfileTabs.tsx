import React, { useState } from 'react';
import { StyleSheet, Text,useWindowDimensions, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabView, TabBar, SceneMap, SceneRendererProps } from 'react-native-tab-view';

import { GridPost } from './GridPosts';

export const ProfileTabs = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);

  type TabRoute = {
    key: string;
    title: string;
    icon: 'grid-outline' | 'videocam-outline' | 'person-outline';
  };
  
  const [routes] = useState<TabRoute[]>([
    { key: 'posts', title: 'Posts', icon: 'grid-outline' },
    { key: 'reels', title: 'Reels', icon: 'videocam-outline' },
    { key: 'saved', title: 'Saved', icon: 'person-outline' },
  ]);

  const renderScene = SceneMap({
    posts: PostsTab,
    reels: ReelsTab,
    saved: SavedTab,
  });

  const renderTabBar = (props: SceneRendererProps) => (
    <TabBar
      {...props}
      navigationState={{routes, index}}
      style={styles.tabBar}
      activeColor="white"
      inactiveColor="#7c7575"
      indicatorStyle={{ backgroundColor: "white" }}
      renderIcon={({ route, color }) => (
        <Ionicons name={route.icon} size={24} color={color} />
      )}
      renderLabel={() => null}
    />
  );

  return (
    <View style={styles.container}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={renderTabBar}
        initialLayout={{width: layout.width, height: layout.height}}
      />
    </View>
  );
};

const PostsTab = () => {
  
  return (
    <GridPost />
  );
};

const ReelsTab = () => {
  return (
    <GridPost />
  );
};

const SavedTab = () => {
  return (
    <GridPost />
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    flex: 1
  },
  tabBar: {
    backgroundColor: '#000000',
    height: 60,
  },
});