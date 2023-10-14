import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { screenHeight, screenWidth } from '../utils/AppDimensions'
import HeadComponent from '../components/HeadComponent'
import SwiperImage from '../assets/girl.png'
import CloseIcon from '../assets/close.png'
import LikeIcon from '../assets/like.png'
import StarIcon from '../assets/star.png'

const MatchScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <HeadComponent />
                <View style={styles.discover}>
                    <ImageBackground source={SwiperImage} style={{ height: screenWidth * 0.975, width: screenWidth * 0.75 }}>
                        <View style={{ position: 'absolute', bottom: 0, margin: 20 }}>
                            <Text style={{ color: '#fff', fontSize: 24, fontWeight: "700" }}>Gönül Yazar, 63</Text>
                            <Text style={{ color: '#fff', fontSize: 16, fontWeight: "400" }}>Software Developer</Text>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.footButton}>
                    <TouchableOpacity style={styles.circle}>
                        <Image source={CloseIcon} style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bigCircle}>
                        <Image source={LikeIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.circle}>
                        <Image source={StarIcon} style={styles.icon} />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E4DEF3"
    },
    content: {
        margin: 20
    },
    discover: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60
    },
    circle: {
        backgroundColor: '#fff',
        borderRadius: 50,
        height: screenWidth / 5.5,
        width: screenWidth / 5.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bigCircle: {
        backgroundColor: '#FF015C',
        borderRadius: 50,
        height: screenWidth / 4,
        width: screenWidth / 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footButton: {
        marginTop: screenHeight / 25,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    icon: {
        height: screenWidth / 13,
        width: screenWidth / 13
    }
})
export default MatchScreen;