import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export const ProfileTabs = () => {
  return (
    <View style={styles.container}>
      <Tab.Navigator screenOptions={{
          tabBarActiveTintColor: "white",
        tabBarShowLabel: false,
        tabBarInactiveTintColor: "white",
            tabBarShowIcon: true
        }}>
        <Tab.Screen
          name="Posts"
          component={PostsTab}
          options={{ tabBarIcon: ({ color }) => <Ionicons name="grid-outline" color={color} size={24} /> }}
        />
        <Tab.Screen
          name="Reels"
          component={ReelsTab}
          options={{ tabBarIcon: ({ color }) => <Ionicons name="videocam-outline" color={color} size={24} /> }}
        />
        <Tab.Screen
          name="Saved"
          component={SavedTab}
          options={{ tabBarIcon: ({ color }) => <Ionicons name="person-outline" color={color} size={24} /> }}
        />
      </Tab.Navigator>
    </View>
  );
};

const PostsTab = () => {
  return (
    <View style={styles.tabContent}>
      <Text>Posts Tab</Text>
    </View>
  );
};

const ReelsTab = () => {
  return (
    <View style={styles.tabContent}>
      <Text>Reels Tab</Text>
    </View>
  );
};

const SavedTab = () => {
  return (
    <View style={styles.tabContent}>
      <Text>Saved Tab</Text>
    </View>
  );
};

const tabBarOptions = {
  showIcon: true,
  showLabel: false,
  style: {
    backgroundColor: '#000000',
  },
  indicatorStyle: {
    backgroundColor: 'white',
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  tabContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});