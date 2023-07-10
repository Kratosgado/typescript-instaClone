import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../../screens/HomeScreen";
import { SearchScreen } from "../../screens/SearchScreen";
import { ReelScreen } from "../../screens/ReelScreen";
import { AddPostScreen } from "../../screens/AddPostScreen";
import { ProfileScreen } from "../../screens/ProfileScreeen";

const Tab = createBottomTabNavigator();

export const BottomBar = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="SearchScreen"
                component={SearchScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="search-outline" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="AddPostScreen"
                component={AddPostScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="add-outline" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="ReelScreen"
                component={ReelScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="md-videocam-outline" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person-circle" size={size} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}