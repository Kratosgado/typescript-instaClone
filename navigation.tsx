import React from 'react'
import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { LoginScreen } from './screens/LoginScreen';
import { SignUpScreen } from './screens/SignupScreen';
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native'
import { BottomBar } from './components/home/BottomBar'

export type RootStackParamList = {
  HomeScreen: undefined;
  LoginScreen: undefined;
  SignupScreen: undefined;
};
type Screens = "HomeScreen" | "LoginScreen" | "SignupScreen"
type StackProps = StackNavigationProp<RootStackParamList, Screens>;
export type NavigationProps = {
  navigation?: StackProps;
};

const Stack = createStackNavigator<RootStackParamList>()

export const SignedInStack = () => (
  <NavigationContainer>
      <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
        <StatusBar style="inverted" hidden={true} />
        <BottomBar />
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