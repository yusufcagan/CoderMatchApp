import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { screenHeight } from '../../utils/AppDimensions'
import CheckIcon from "../../assets/check.png"

const QuestionsSelect = ({ navigation }) => {
    const [select, setSelect] = useState("one");

    const SelectOne = () => {
        setSelect("one");
        setTimeout(() => {
            navigation.navigate('MatchFoundScreen')
        }, 300)
    }
    const SelectTwo = () => {
        setSelect("two");
        setTimeout(() => {
            navigation.navigate('MatchFoundScreen')
        }, 300)
    }
    const SelectThree = () => {
        setSelect("three");
        setTimeout(() => {
            navigation.navigate('MatchFoundScreen')
        }, 300)
    }
    return (
        <SafeAreaView style={styles.continer}>
            <View style={styles.content}>
                <Text style={styles.textHead}>Magna ac placerat vestibulum lectus. Viverra mauris?</Text>
                <TouchableOpacity
                    onPress={SelectOne}
                    style={select == "one" ? styles.activeButton : styles.button}>
                    <Text style={[styles.buttonText, { color: select == "one" ? '#fff' : '#1D1D1D' }]}>Vitae purus</Text>
                    {select == "one" ? <Image source={CheckIcon} /> : null}
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={SelectTwo}
                    style={select == "two" ? styles.activeButton : styles.button}>
                    <Text style={[styles.buttonText, { color: select == "two" ? '#fff' : '#1D1D1D' }]}>Vitae purus</Text>
                    {select == "two" ? <Image source={CheckIcon} /> : null}
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={SelectThree}
                    style={select == "three" ? styles.activeButton : styles.button}>
                    <Text style={[styles.buttonText, { color: select == "three" ? '#fff' : '#1D1D1D' }]}>Lorem ipsum dolor</Text>
                    {select == "three" ? <Image source={CheckIcon} /> : null}
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
export default QuestionsSelect