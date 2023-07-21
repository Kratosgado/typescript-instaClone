import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, AntDesign, Octicons, MaterialCommunityIcons } from "@expo/vector-icons";
import HomeScreen from "../../screens/HomeScreen";
import { SearchScreen } from "../../screens/SearchScreen";
import { ReelScreen } from "../../screens/ReelScreen";
import { AddPostScreen } from "../../screens/AddPostScreen";
import { ProfileScreen } from "../../screens/ProfileScreeen";
import { USERS } from "../../data/users";
import { User } from "../profile/UserInfo";
import { NavigationProps } from "../../navigation";

const Tab = createBottomTabNavigator();

export const BottomBar = (navigation: NavigationProps) => {
    const currentUser: User = USERS[0];
    return (
        <Tab.Navigator  screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "white",
            tabBarShowLabel: false,
            tabBarInactiveBackgroundColor: "black",
            tabBarActiveBackgroundColor: "black",
        }}>
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home-variant" size={size} color={color} />
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
                        <AntDesign name="plussquareo" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="ReelScreen"
                component={ReelScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Octicons name="video" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="ProfileScreen"
                component={() => {
                    return <ProfileScreen navigation={navigation.navigation} {...currentUser}/>
                } }
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person-circle" size={size} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}