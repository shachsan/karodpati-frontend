import React, { Component } from 'react';
// import QuizPrep from './QuizPrep';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class HomeContainer extends Component {

    static navigationOptions = {
        title: 'Welcome',
      };


    render() {
        const {navigate} = this.props.navigation;
        return (
             <View style={styles.container}>
                <View>
                    <Text style={styles.header}>Welcome to Karodpati</Text>
                </View>
                <TouchableOpacity onPress={()=>navigate('PrepareQuiz')}>
                    <Text style={styles.navText}>Start Quiz</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.navText}>Report</Text>
                </TouchableOpacity>
             </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        // flexDirection:'row',
        flexWrap:'wrap'
    },
    navText:{
        backgroundColor:'blue',
        fontSize:25,
        textAlign:'center',
        color:'white',
        margin:10,
        padding:5
    },

    header:{
        fontSize:35,
        alignItems:'stretch'
        
    }
})
