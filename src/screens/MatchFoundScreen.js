import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import FoundImage from '../assets/found.png'
import RightIcon from '../assets/right.png'
import { screenHeight, screenWidth } from '../utils/AppDimensions'

const MatchFoundScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.textHead}>Congratulations!</Text>
                <Text style={styles.textHeadRed}>7 matches found</Text>
                <Image source={FoundImage} style={{ alignSelf: 'center' }} />
            </View>
            <View style={styles.buttonView}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('MyTab')}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Show me</Text>
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
        marginHorizontal: 30
    },
    textHead: {
        fontSize: 31,
        fontWeight: "400",
        color: '#1D1D1D'
    },
    textHeadRed: {
        fontSize: 37,
        fontWeight: "700",
        color: '#FF015C',
        marginTop: 5
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
export default MatchFoundScreen