import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import { screenWidth } from '../utils/AppDimensions'
import LeftButton from '../assets/left.png'
import SettingIcon from '../assets/setting.png'

const HeadComponent = () => {
    return (
        <View style={styles.head}>
            <TouchableOpacity style={styles.backButton}>
                <Image source={LeftButton} style={styles.icon} />
            </TouchableOpacity>
            <View>
                <Text style={styles.textHead}>
                    Discover
                </Text>
                <Text style={styles.childText}>
                    İstanbul(Anadolu Yakası)
                </Text>
            </View>
            <TouchableOpacity style={styles.backButton}>
                <Image source={SettingIcon} style={styles.iconTwo} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    head: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    backButton: {
        backgroundColor: '#fff',
        height: screenWidth / 7,
        width: screenWidth / 7,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    },
    textHead: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: "700",
        color: '#000'
    },
    childText: {
        textAlign: 'center',
        fontSize: 12,
        fontWeight: "400",
        color: '#000'
    },
    icon: {
        height: screenWidth / 20,
        width: screenWidth / 32
    },
    iconTwo: {
        height: screenWidth / 17,
        width: screenWidth / 20
    }
})

export default HeadComponent