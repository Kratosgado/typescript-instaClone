import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Header = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/header-logo.png')} style={styles.logo} />
            <TouchableOpacity onPress={() => console.log('Open menu')}>
                <AntDesign name="menu-fold" size={24} color="white" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    logo: {
        width: 120,
        height: 40
    },
});

export default Header;
