import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { screenHeight } from '../../utils/AppDimensions'
import CheckIcon from "../../assets/check.png"

const QuestionsGender = ({ navigation }) => {
    const [selectGender, setSelectGender] = useState(null);

    const OnManSelect = () => {
        setSelectGender(false);
        setTimeout(() => {
            navigation.navigate('QuestionsOr')
        }, 500)
    }

    const OnWomenSelect = () => {
        setSelectGender(true);
        setTimeout(() => {
            navigation.navigate('QuestionsOr')
        }, 500)
    }

    return (
        <SafeAreaView style={styles.continer}>
            <View style={styles.content}>
                <Text style={styles.textHead}>I am a</Text>
                <TouchableOpacity
                    onPress={OnWomenSelect}
                    style={selectGender ? styles.activeButton : styles.button}>
                    <Text style={[styles.buttonText, { color: selectGender ? '#fff' : '#1D1D1D' }]}>Women</Text>
                    {selectGender ? <Image source={CheckIcon} /> : null}
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={OnManSelect}
                    style={selectGender ? styles.button : styles.activeButton}>
                    <Text style={[styles.buttonText, { color: selectGender ? '#1D1D1D' : '#fff' }]}>Man</Text>
                    {selectGender ? null : <Image source={CheckIcon} />}
                </TouchableOpacity>
            </View>
        </SafeAreaView >
    )
}


const styles = StyleSheet.create({
    continer: {
        flex: 1,
        backgroundColor: "#E4DEF3"
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 25
    },
    textHead: {
        color: '#1D1D1D',
        fontSize: 31,
        fontWeight: '700'
    },
    button: {
        marginTop: 30,
        height: screenHeight / 14,
        borderRadius: 10,
        borderWidth: 2,
        alignItems: 'center',
        paddingHorizontal: 30,
        flexDirection: 'row'
    },
    activeButton: {
        marginTop: 30,
        height: screenHeight / 14,
        backgroundColor: "#FF015C",
        borderRadius: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 30,
        flexDirection: 'row'
    },
    buttonText: {
        fontSize: 20,
        fontWeight: "500",
    }
})
export default QuestionsGender