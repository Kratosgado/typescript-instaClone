import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { HeaderPopup } from './HeaderPopup';
import { Button } from 'react-native-elements';
import { NavigationProps } from '../../navigation';
import { StackHeaderProps } from '@react-navigation/stack';



export const Header: React.FC<NavigationProps> = ({navigation}) => {
    const [ showPopup, setShowPopup] = useState(false)
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={{ flexDirection: "row", alignItems: "center" }}
                onPress={()=> setShowPopup(true)}
            >
                <Image source={require('../../assets/header-logo.png')} style={styles.logo} />
                <AntDesign name="down" size={16} color='white' />
            </TouchableOpacity>
            <HeaderPopup visible={showPopup} onClose={() => setShowPopup(false)} navigation={navigation} />
            <View style={styles.iconsContainer}>
                <TouchableOpacity onPress={() => console.log('Like')}>
                    <AntDesign name="hearto" size={24} color="white" />
                    <View style={styles.dot} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log('Messenger')}>
                    <Image style={styles.icon} source={{
                        uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/facebook-messenger.png'
                    }} />
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>13</Text>
                    </View>


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
        alignItems: 'center',
        justifyContent: 'space-around',
        width: 80
    },
    icon: {
        height: 30,
        width: 30,
        resizeMode: 'contain',
        marginLeft: 8
    },
    dot: {
        backgroundColor: 'red',
        borderRadius: 10,
        width: 8,
        height: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
        position: 'absolute',
        bottom: 17,
        left: 14
    },
    badge: {
        backgroundColor: 'red',
        borderRadius: 10,
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
        position: 'absolute',
        bottom: 15,
        left: 15
    },
    badgeText: {
        color: 'white',
        fontSize: 12,
        position: 'absolute',
        zIndex: 100,
    },
});