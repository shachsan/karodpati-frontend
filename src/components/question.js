import React, { Component } from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Question = props =>{
   
        return (
            <>
                <View>
                    <Text style={styles.question}>{props.quiz.question}</Text>
                    <Text style={styles.questionInNepali}>{props.quiz.questionInNep}</Text>
                </View>

               
            </>
        );
    
};

export default Question;

const styles = StyleSheet.create({

    question:{
        fontSize: 30,
        color:'white',
        textAlign:'center',
    },
    questionInNepali:{
        fontFamily:"Preeti",
        fontSize: 40,
        color:'white',
        textAlign:'center'
    },
    
})
