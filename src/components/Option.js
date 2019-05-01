import React, { Component } from 'react';
import {StyleSheet,Text, TouchableOpacity} from 'react-native';

export default class Option extends Component {

    state={
        selectedOptionId:null
    }

    // isSelected=()=>{
    //     return this.props.optionId ? styles.selectedOption:null;
    // }

    render() {
        return (
            <TouchableOpacity disabled={this.props.isAnswerSubmitted} onPress={()=>this.props.optionSelectHandler(this.props.optionId)}>
                <Text style={[styles.options, 
                    this.props.isSelected && styles.selectedOption,
                    this.props.isAnswerSubmitted && this.props.isCorrectAnswer && styles.correctAnswer]}>{this.props.option}</Text>
            </TouchableOpacity>
        );
    }
};

const styles = StyleSheet.create({
    options:{
        width:130,
        marginVertical:30,
        marginHorizontal:10,
        fontSize:20,
        textAlign:'center',
        backgroundColor:'yellow',
      },
    selectedOption:{
        backgroundColor:'orange',
        color:'blue'
    },
    correctAnswer:{
        backgroundColor:'green',
        color:'white'
    }
});
