import React, { Component } from 'react';
import {StyleSheet,Text, View, TouchableOpacity} from 'react-native';

export default class Option extends Component {

    state={
        selectedOptionId:null
    }

    get5050Options=()=>{
        return
    }
    // isSelected=()=>{
    //     return this.props.optionId ? styles.selectedOption:null;
    // }

    render() {
        return (
            <TouchableOpacity disabled={this.props.isAnswerSubmitted} 
                    onPress={()=>this.props.optionSelectHandler(this.props.optionId)}>
                <View style={[styles.options, 
                        this.props.isSelected && styles.selectedOption,
                        this.props.isAnswerSubmitted && this.props.isCorrectAnswer && styles.correctAnswer]}>
                    <Text style={styles.optionText}>
                        {this.props.fiftyFifty 
                            ? this.props.fiftyFiftyOptions.includes(this.props.optionId) 
                                ? this.props.option
                                : null
                            : this.props.option}
                    </Text>

                </View>
            </TouchableOpacity>
        );
    }
};

const styles = StyleSheet.create({
    options:{
        display:'flex',
        width:130,
        height:70,
        marginVertical:20,
        marginHorizontal:10,
        padding:10,
        justifyContent:'center',

        // verticalAlign:'middle',
        backgroundColor:'yellow',
    },
    optionText:{
        fontSize:20,
        textAlign:'center',

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
