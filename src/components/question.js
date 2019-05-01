import React, { Component } from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class Question extends Component {
    render() {
        return (
            <>
                <Text style={styles.question}>{this.props.quiz.question}</Text>

                <Text style={styles.questionInNepali}>{this.props.quiz.questionInNep}</Text>

                <View>
                    {this.props.isAnswerCorrect === 'correct' ? <Text style={styles.correct}>Correct</Text> : null}
                    {this.props.isAnswerCorrect === 'incorrect' ? <Text style={styles.inCorrect}>Incorrect</Text>:null}
                </View>
            </>
        );
    }
};

const styles = StyleSheet.create({

    question:{
        fontSize: 30,
        color:'white',
        textAlign:'center'
    },
    questionInNepali:{
        fontFamily:"Preeti",
        fontSize: 40,
        color:'white',
        textAlign:'center'
    },
    correct:{
        backgroundColor:'green',
        color:'white',
        fontSize:25,
        textAlign:'center'
    },
  
    inCorrect:{
        backgroundColor:'red',
        color:'white',
        fontSize:25,
        textAlign:'center'
    },
})
