import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const QuizEndReport = props =>{
    return (
        <View style={styles.container}>
                <Text>
                    This is the end of Questions
                </Text>
            <View style={styles.circle}>
                <Text style={[styles.accuracy, {fontSize:20}]}>Accuracy</Text>
                <Text style={styles.accuracy}>
                    {(props.noOfCorrectAns/props.totalQuestions)*100}%
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    circle:{
        display:'flex',
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
        backgroundColor: 'green',
        justifyContent:'center',
    },
    accuracy:{
        textAlign:'center',
        color:'white',
        fontSize:30

    }
})

export default QuizEndReport;