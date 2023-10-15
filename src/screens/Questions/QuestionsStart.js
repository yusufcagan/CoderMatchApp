import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import PersonImage from "../../assets/person.png"
import RightIcon from '../../assets/right.png'
import { screenHeight, screenWidth } from '../../utils/AppDimensions'

const Questions = ({ navigation }) => {

    const SignUp = () => {
        console.log("go");
        navigation.navigate('QuestionsGender')
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={{ backgroundColor: '#FF015C', borderRadius: 50 }}>
                    <Image source={PersonImage} style={{ width: screenWidth * 0.21, height: screenWidth * 0.21, tintColor: '#fff' }} />
                </View>
                <View style={styles.textView}>
                    <Text style={styles.textHead}>Welcome Oktay!</Text>
                    <Text style={styles.textDescription}>Turpis egestas maecenas pharetra convallis posuere...</Text>
                </View>
            </View>
            <View style={styles.buttonView}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={SignUp}>
                    <Text style={styles.buttonText}>Questions</Text>
                    <Image source={RightIcon} style={{ right: 0, position: 'absolute', marginRight: 30 }} />
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
        fontSize: 32,
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
        position: 'absolute',
    },
    button: {
        borderRadius: 50,
        borderWidth: 3,
        borderColor: "#24292F",
        height: screenHeight / 15,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    buttonText: {
        color: '#1D1D1D',
        fontWeight: "700",
        fontSize: 24,
        textAlign: 'center'
    }
})
export default Questions