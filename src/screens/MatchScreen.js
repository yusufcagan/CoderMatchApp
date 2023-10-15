import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { screenHeight, screenWidth } from '../utils/AppDimensions'
import HeadComponent from '../components/HeadComponent'
import GirlOne from '../assets/girl.png'
import GirlTwo from '../assets/girl1.png'
import GirlThree from '../assets/girl2.png'
import CloseIcon from '../assets/close.png'
import LikeIcon from '../assets/like.png'
import StarIcon from '../assets/star.png'
import Swiper from 'react-native-deck-swiper'

const MatchScreen = () => {
    const [liked, setLiked] = useState(null)
    const CardData = [
        { name: "Gönül Yazar", age: 27, job: "Software Developer", src: GirlOne },
        { name: "aa Yazar", age: 27, job: "Software Developer", src: GirlTwo },
        { name: "bb Yazar", age: 27, job: "Software Developer", src: GirlThree }
    ]
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <HeadComponent />
                <View style={styles.discover}>
                    <Swiper
                        containerStyle={{ backgroundColor: 'transparent' }}
                        cards={CardData}
                        stackSize={3}
                        stackSeparation={-25}
                        cardIndex={0}
                        onSwipedRight={() => {
                            setLiked(true);
                            console.log("liked")
                        }}
                        onSwipedLeft={() => {
                            setLiked(false)
                            console.log("dislike");
                        }}
                        animateCardOpacity
                        verticalSwipe={false}
                        renderCard={card => (
                            <ImageBackground source={card.src} style={{ height: screenWidth * 0.975, width: screenWidth * 0.75 }}>
                                <View style={{ position: 'absolute', bottom: 0, margin: 20 }}>
                                    <Text style={{ color: '#fff', fontSize: 24, fontWeight: "700" }}>{card.name},{card.age}</Text>
                                    <Text style={{ color: '#fff', fontSize: 16, fontWeight: "400" }}>{card.job}</Text>
                                </View>
                            </ImageBackground>
                        )}
                    />
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
        </SafeAreaView >
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
        height: screenWidth * 0.975,
        width: screenWidth * 0.75,
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
        marginTop: screenHeight / 10,
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