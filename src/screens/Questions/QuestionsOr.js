import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { screenHeight } from '../../utils/AppDimensions'
import CheckIcon from "../../assets/check.png"

const QuestionsOr = ({ navigation }) => {
    const [select, setSelect] = useState(null);

    const SelectYes = () => {
        setSelect(true);
        setTimeout(() => {
            navigation.navigate('QuestionsSelect')
        }, 300)
    }

    const SelectNo = () => {
        setSelect(false);
        setTimeout(() => {
            navigation.navigate('QuestionsSelect')
        }, 300)
    }

    return (
        <SafeAreaView style={styles.continer}>
            <View style={styles.content}>
                <Text style={styles.textHead}>Lorem ipsum dolor sit amet, consectetur?</Text>
                <TouchableOpacity
                    onPress={SelectYes}
                    style={select ? styles.activeButton : styles.button}>
                    <Text style={[styles.buttonText, { color: select ? '#fff' : '#1D1D1D' }]}>Yes</Text>
                    {select ? <Image source={CheckIcon} /> : null}
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={SelectNo}
                    style={select ? styles.button : styles.activeButton}>
                    <Text style={[styles.buttonText, { color: select ? '#1D1D1D' : '#fff' }]}>No</Text>
                    {select ? null : <Image source={CheckIcon} />}
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
        fontWeight: '700',
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
export default QuestionsOr