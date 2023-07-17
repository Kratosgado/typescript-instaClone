import React, { useState } from 'react';
import { View, TextInput,Image, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native';

export const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
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
      <TouchableOpacity style={styles.buttonContainer} onPress={handleLogin}>
        <Text style={{color: "white", fontSize: 20, fontWeight: "bold"}}>Log In</Text>
      </TouchableOpacity>
      <View style={{flexDirection: 'row', alignItems: "center"}}>
        <View style={{height: 0.5, width: "100%", backgroundColor: "grey"}}/>
        <Text style={{ color: "gray", padding: 10}}>OR</Text>
        <View style={{height: 0.5, width: "100%", backgroundColor: "gray"}}/>
      </View>
      </View>
      <View style={styles.signUpContainer}>
        <Text style={{ color: "gray" }}>Don't have an account? </Text>
        <Pressable><Text style={{color: "#284db4", fontWeight: "bold"}}>Sign Up</Text></Pressable>
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
  signUpContainer: {
    borderTopColor: "gray",
    borderTopWidth: 0.5,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    padding: 20
  }
});
