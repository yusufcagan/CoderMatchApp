import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { screenWidth, screenHeight } from '../utils/AppDimensions'
import BackImage from '../assets/php.png'
import Swiper from 'react-native-swiper'

const OnBoardingScreen = () => {

    const swiperData = [
        {
            id: 0,
            text: "Lorem ipsum dolor sit amet,",
            description: "Turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie."
        },
        {
            id: 2,
            text: "Lorem ipsum dolor sit amet,",
            description: "Turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie."
        },
        {
            id: 3,
            text: "Lorem ipsum dolor sit amet,",
            description: "Turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie."
        },
    ]

    return (
        <SafeAreaView style={styles.container}>
            <Swiper
                activeDotStyle={{ marginBottom: screenHeight / 5, }}
                dotStyle={{ marginBottom: screenHeight / 5 }}
                activeDotColor='#F59924'
            >
                {swiperData.map((item) => (
                    <View style={styles.content} key={item.id}>
                        <Image source={BackImage} />
                        <View style={styles.textView}>
                            <Text style={styles.textOne}>Lorem ipsum dolor sit amet,</Text>
                        </View>
                        <View style={styles.textView}>
                            <Text style={styles.textTwo}>Turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie.</Text>
                        </View>
                    </View>
                ))}
            </Swiper>
            <View style={styles.footButtonContainer}>
                <TouchableOpacity style={styles.goButton}>
                    <Text style={styles.goText}>Let's Go!</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.skipButton}>
                    <Text style={styles.skipText}>Skip</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView >
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E4DEF3",
    },
    content: {
        marginTop: screenHeight / 10,
        alignSelf: 'center'
    },
    textView: {
        marginTop: screenHeight / 25,
        marginHorizontal: 20,
    },
    textOne: {
        fontSize: 22,
        color: "#1D1D1D",
        fontWeight: "700",
        textAlign: 'center'
    },
    textTwo: {
        fontSize: 18,
        color: "#1D1D1D",
        fontWeight: "400",
        textAlign: 'center',
        marginHorizontal: 20
    },
    footButtonContainer: {
        paddingHorizontal: 20,
        paddingBottom: screenHeight / 20,
        width: screenWidth,
        bottom: 0,
        position: 'absolute'
    },
    goButton: {
        height: screenHeight / 15,
        borderRadius: 10,
        backgroundColor: "#FF015C",
        justifyContent: 'center'
    },
    goText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: "700",
        textAlign: 'center'
    },
    skipButton: {
        height: screenHeight / 15,
        borderRadius: 10,
        justifyContent: 'center'
    },
    skipText: {
        color: '#6F6F6F',
        fontSize: 22,
        fontWeight: "500",
        textAlign: 'center',
    },
})
export default OnBoardingScreen