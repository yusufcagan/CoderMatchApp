import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import GithubImage from "../assets/github.png"
import { screenHeight, screenWidth } from '../utils/AppDimensions'

const SignUp = ({ navigation }) => {

    const Sign = () => {
        console.log("sign");
        navigation.navigate("Questions")
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Image source={GithubImage} style={{ width: screenWidth * 0.21, height: screenWidth * 0.2 }} />
                <View style={styles.textView}>
                    <Text style={styles.textHead}>Sign up with GitHub</Text>
                    <Text style={styles.textDescription}>Turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie.</Text>
                </View>
            </View>
            <View style={styles.buttonView}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={Sign}>
                    <Text style={styles.buttonText}>Sign up</Text>
                </TouchableOpacity>
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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textView: {
        marginHorizontal: 26,
        marginTop: screenHeight / 25
    },
    textHead: {
        fontSize: 26,
        fontWeight: "700",
        color: '#1D1D1D',
        textAlign: 'center'
    },
    textDescription: {
        fontSize: 18,
        fontWeight: '400',
        color: '#1D1D1D',
        textAlign: 'center',
        marginTop: screenHeight / 25
    },
    buttonView: {
        paddingHorizontal: 30,
        paddingBottom: screenHeight / 20,
        width: screenWidth,
        bottom: 0,
        position: 'absolute'
    },
    button: {
        borderRadius: 50,
        borderWidth: 3,
        borderColor: "#24292F",
        height: screenHeight / 15,
        justifyContent: 'center'
    },
    buttonText: {
        color: '#1D1D1D',
        fontWeight: "700",
        fontSize: 24,
        textAlign: 'center'
    }
})
export default SignUp