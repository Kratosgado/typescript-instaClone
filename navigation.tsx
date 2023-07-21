import React from 'react'
import { StackHeaderProps, StackNavigationProp, createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { LoginScreen } from './screens/LoginScreen';
import { SignUpScreen } from './screens/SignupScreen';
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native'
import { BottomBar } from './components/home/BottomBar';
import { FollowingScreen } from './components/home/Following';
import { FavouriteScreen } from './components/home/Favourites';



type ScreenList = {
  BottomBar: undefined;
  LoginScreen: undefined;
  SignupScreen: undefined;
  FollowingScreen: undefined;
  FavouriteScreen: undefined;
};
type Screens =  "LoginScreen" | "SignupScreen" | "FollowingScreen" | "BottomBar" | "FavouriteScreen"

export type NavigationProps = {
  navigation: StackNavigationProp<ScreenList, Screens>;
};

const Stack = createStackNavigator<ScreenList>()

export const SignedInStack = () => (
  <NavigationContainer>
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      <StatusBar hidden={true} />
      <Stack.Navigator
        initialRouteName="BottomBar"
      >
        <Stack.Screen
          name='BottomBar'
          component={BottomBar}
          options={{headerShown: false}}
           />
        <Stack.Screen name="FollowingScreen" component={FollowingScreen} />
        <Stack.Screen name="FavouriteScreen" component={FavouriteScreen} />
      </Stack.Navigator>
    </SafeAreaView>
  </NavigationContainer>
)

export const SignedOutStack = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{ headerShown: false}}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignupScreen" component={SignUpScreen} />
    </Stack.Navigator>
  </NavigationContainer>
)