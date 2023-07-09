import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

const Header = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/header-logo.png')} style={styles.logo} />
            <View style={styles.iconsContainer}>
                <TouchableOpacity onPress={() => console.log('Like')}>
                    <AntDesign name="hearto" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log('Messenger')}>
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>3</Text>
                    </View>
                    <FontAwesome name="comment-o" size={24} color="white" />

                </TouchableOpacity>
            </View>
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
        height: 40,
    },
    iconsContainer: {
        flexDirection: 'row',
    },
    badge: {
        backgroundColor: 'red',
        borderRadius: 10,
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
    },
    badgeText: {
        color: 'white',
        fontSize: 12,
    },
});

export default Header;
