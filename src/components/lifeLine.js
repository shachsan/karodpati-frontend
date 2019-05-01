import React, { Component } from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';

export default class LifeLine extends Component {


    lifeLineTouchHandler=()=>{
        console.log('lifeLine Clicked');
      }

    render() {
        return (
            <View style={styles.lifeLineContainer}>
                <TouchableOpacity onPress={this.props.useFiftyFifty}>
                    <Text style={styles.lifeLine}>50/50</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.lifeLineTouchHandler}>
                    <Text style={styles.lifeLine}>Hint</Text>
                </TouchableOpacity>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    lifeLineContainer: {
        flex:0.25,
        fontSize: 20,
        flexDirection:'row',
        backgroundColor:'orange',
        justifyContent:'space-around',
        alignItems:'center',
        marginHorizontal: 10,
        marginVertical:5
      },
      lifeLine:{
        width:90,
        height:30,
        backgroundColor:'green',
        color:'white',
        textAlign:'center',
      }
})
