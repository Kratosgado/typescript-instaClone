import React from 'react'
import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack'
import { LoginScreen } from './screens/LoginScreen';
import { SignUpScreen } from './screens/SignupScreen';
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native'
import { BottomBar } from './components/home/BottomBar';
import { FollowingScreen } from './components/home/Following';
import { FavouriteScreen } from './components/home/Favourites';
import { Archive } from './components/profile/SheetScreens/Archive';
import { CloseFriends } from './components/profile/SheetScreens/CloseFriends';
import { OrdersPayments } from './components/profile/SheetScreens/OrdersPayments';
import { Settings } from './components/profile/SheetScreens/Settings';
import { QRCode } from './components/profile/SheetScreens/QRCode';
import { OtherUsersProfile } from './screens/OtherUsersProfile';
import { User } from './components/profile/UserInfo';
import { RouteProp } from '@react-navigation/native';
import { ViewPostScreen } from './screens/ViewPostScreen';
import { PostProps } from './components/home/Posts';



export type ScreenList = {
  BottomBar: undefined;
  LoginScreen: undefined;
  SignupScreen: undefined;
  FollowingScreen: undefined;
  FavouriteScreen: undefined;
  Archive: undefined;
  CloseFriends: undefined;
  OrdersPayments: undefined;
  Settings: undefined;
  Supervision: undefined;
  QRCode: undefined
  OtherUsersProfile: User | undefined
  ViewPostScreen: PostProps | undefined
};
export type Screens = "ViewPostScreen"| "LoginScreen" | "SignupScreen" | "FollowingScreen" | "BottomBar" | "FavouriteScreen" 
              | "Archive" | "CloseFriends" | "OrdersPayments" | "Settings" | "Supervision" | "QRCode" | "OtherUsersProfile"

export type NavigationProps = {
  navigation: StackNavigationProp<ScreenList, Screens>;
};
export type NavigationWithParams = NavigationProps & {
   route: RouteProp<ScreenList, "OtherUsersProfile">;
};
 
 

const Stack = createStackNavigator<ScreenList>()

export const SignedInStack = () => (
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
        <Stack.Screen name="Archive" component={Archive} />
        <Stack.Screen name="CloseFriends" component={CloseFriends} />
        <Stack.Screen name="OrdersPayments" component={OrdersPayments} />
        <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="QRCode" component={QRCode} />
      <Stack.Screen name="ViewPostScreen" component={ViewPostScreen} options={{headerShown: false}} />
      <Stack.Screen name="OtherUsersProfile" component={OtherUsersProfile} options={{headerShown: false}}/>
      </Stack.Navigator>
    </SafeAreaView>
)

export const SignedOutStack = () => (
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{ headerShown: false}}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignupScreen" component={SignUpScreen} />
    </Stack.Navigator>
)