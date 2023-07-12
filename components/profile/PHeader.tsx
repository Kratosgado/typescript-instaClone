import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';

export const PHeader = () => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                <Text style={styles.username}>mbeah_essilfie</Text>
                <AntDesign name="down" size={16} color='white' />
            </View>

            <View style={styles.iconsContainer}>
                <TouchableOpacity>
                    <Image
                        style={styles.icon}
                        source={{
                            uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png',
                        }}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log('Messenger')}>
                    <Ionicons name="md-reorder-three-outline" size={30} color="white" />

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
    username: {
        width: 120,
        height: 25,
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
        color: "white"
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
        marginLeft: 8,
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