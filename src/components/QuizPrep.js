import React, { Component } from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    StyleSheet, 
    Picker, 
    Item 
    } from 'react-native';

export default class QuizPrep extends Component {
    state={
        form:{
            numOfQuiz:5,
            categories:[],
            level:''
        }
    }

    static navigationOptions={
        title:'preparing your quiz'
    }
    render() {
        // console.log('selected number:', this.state.numOfQuiz);
        quizQty=[ <Picker.Item key={5} label="5" value="5" />,
                    <Picker.Item key={10} label="10" value="10" />,
                    <Picker.Item key={15} label="15" value="15" />,
                    <Picker.Item key={20} label="20" value="20" />,
                    <Picker.Item key={25} label="25" value="25" />,
                    <Picker.Item key={30} label="30" value="30" />,
                    <Picker.Item key={35} label="35" value="35" />,
                    <Picker.Item key={40} label="40" value="40" />
                ]
        return (
             <View style={styles.container}>
                <Text style={styles.label}>How many questions would you like to attempt?</Text>
                <Picker
                    selectedValue={this.state.numOfQuiz}
                    style={{height: 50, width: 100, marginTop:-30}}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({numOfQuiz: itemValue})
                    }>{quizQty}
                </Picker>

                
             </View>
        );
    }
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        // justifyContent:'center',
        alignItems:'center',
        // flexDirection:'row',
        flexWrap:'wrap'
    },
    label:{
        backgroundColor:'blue',
        fontSize:18,
        textAlign:'center',
        color:'white',
        // margin:5,
        padding:5
    },

    header:{
        fontSize:35,
        alignItems:'stretch'
        
    }
})