import React, { Component } from 'react';
import {StyleSheet,Text, TouchableOpacity} from 'react-native';

export default class Option extends Component {



    render() {
        return (
            <TouchableOpacity onPress={()=>this.props.optionSelectHandler(this.props.optionId)}>
                <Text style={styles.options}>{this.props.option}</Text>
            </TouchableOpacity>
        );
    }
};

const styles = StyleSheet.create({
    options:{
        width:120,
        marginVertical:30,
        fontSize:20,
        textAlign:'center',
        backgroundColor:'yellow',
      }
});
