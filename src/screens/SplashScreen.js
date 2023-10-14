import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native'
import React from 'react'
import AppIcon from '../assets/appIcon.png'
import TextIcon from '../assets/appOnMatch.png'
import { screenHeight, screenWidth } from '../utils/AppDimensions'

const SplashScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Image source={AppIcon} style={styles.icon} />
                <Image source={TextIcon} style={styles.text} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#29155C'
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        height: screenWidth * 0.3,
        width: screenWidth * 0.345
    },
    text: {
        marginTop: 20,
        height: screenWidth * 0.07,
        width: screenWidth * 0.35
    }
})
export default SplashScreen