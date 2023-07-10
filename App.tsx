import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { BottomBar } from './components/home/BottomBar';

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
        <StatusBar style="inverted" hidden={true} />
        <BottomBar />
      </SafeAreaView>
    </NavigationContainer>
  );
}
