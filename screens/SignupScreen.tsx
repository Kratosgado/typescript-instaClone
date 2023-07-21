import React, { useState, FC } from 'react';
import { View, TextInput, Image, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { NavigationProps } from '../navigation';


export const SignUpScreen: FC<NavigationProps> = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Handle login logic here
    console.log('Login:', email, password);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
        <View style={styles.container}>
          <Image source={require('../assets/header-logo.png')} style={styles.logo} />
          <View style={styles.input}>
          <TextInput
            style={{color: "white", fontSize: 18}}
            placeholder="Username"
            value={email}
            onChangeText={setUsername}
            autoCapitalize="none"
            cursorColor={"white"}
            placeholderTextColor={"gray"}
          />
        </View>
        <View style={styles.input}>
          <TextInput
            style={{color: "white", fontSize: 18}}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            cursorColor={"white"}
            placeholderTextColor={"gray"}
          />
        </View>
        <View style={styles.input}>
          <TextInput
            style={{color:"#fff", fontSize: 18}}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            cursorColor={"white"}
            placeholderTextColor={"gray"}
          />
        </View>
          <Pressable style={{ alignSelf: "flex-end", paddingHorizontal: 8, bottom: 8}}>
            <Text style={{color: "#284db4"}}>Forget password</Text>
          </Pressable>
          <TouchableOpacity style={styles.buttonContainer} onPress={handleSignUp}>
            <Text style={{color: "white", fontSize: 20, fontWeight: "bold"}}>Sign Up</Text>
          </TouchableOpacity>
          <View style={{flexDirection: 'row', alignItems: "center"}}>
            <View style={{height: 0.5, width: "100%", backgroundColor: "grey"}}/>
              <Text style={{ color: "gray", padding: 10}}>OR</Text>
            <View style={{height: 0.5, width: "100%", backgroundColor: "gray"}}/>
          </View>
        <TouchableOpacity style={styles.facebookContainer}>
          <Ionicons name="logo-facebook" size={24} color={"#284db4"} />
          <Text style={{ color: "#284db4", fontWeight: "bold", left: 6}}>
            Continue as Mbeah Essilfie
          </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signUpContainer}>
          <Text style={{ color: "gray" }}>Already have an account? </Text>
        <Pressable onPress={()=>navigation.navigate("LoginScreen")}>
          <Text style={{ color: "#284db4", fontWeight: "bold" }}>
            Log In
          </Text></Pressable>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center',
        padding: 16,
    backgroundColor: "black"
    },
    logo: {
        resizeMode: "contain",
        height: 100, width: 200,
    },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: 'gray',
    marginBottom: 16,
    paddingHorizontal: 8,
    backgroundColor: '#242222',
    justifyContent: "center",
  },
  buttonContainer: {
    width: '100%',
    height: 50,
    borderRadius: 15,
    paddingHorizontal: 8,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    backgroundColor: "#284db4"
  },
  facebookContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    elevation: 10,
    borderWidth: 1,
    borderColor: "#0f0f0e",
    borderRadius: 15,
    paddingHorizontal: 10,
  },
  signUpContainer: {
    borderTopColor: "gray",
    borderTopWidth: 0.5,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    padding: 20
  }
});
