/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import Option from './Option';
import {
  Platform, TouchableHighlight, TouchableOpacity, 
  Alert, StyleSheet, Text, View} 
  
  from 'react-native';


export default class Quiz extends Component{

    state={
        optionSelected:null,
        isAnswerCorrect:null,
    }    

    optionSelectHandler=(optionId)=>{
        this.setState({
            optionSelected:optionId,
        })

        // console.log('option Id selected', this.props.optionId);
    }

    checkAnswer=()=>{
        if(this.state.optionSelected===this.props.quiz.answer){
            this.setState({
                isAnswerCorrect:true
            })
        }else{
            this.setState({
                isAnswerCorrect:false
            })
        }
    }

  touchHandler=()=>{
    Alert.alert('You tapped a button!')
  }

  renderOptions=()=>{
      const options=[];
      for(let i=1;i<=4;i++){
          options.push(<Option 
            key={i} 
            option={this.props.quiz.options[i]} 
            optionId={i}
            optionSelectHandler={this.optionSelectHandler}/>)
        //   options.push(<Text key={i} style={styles.options}>{this.props.quiz.options[i]}</Text>)
      }
      return options;
  }

  componentDidMount(){
    console.log('quiz', this.props.quiz);
  }

  
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.lifeLine}>
            <Text>50/50</Text>
            <Text>Hint</Text>
          </View>

          <View style={styles.quiz}>
              <Text style={styles.question}>{this.props.quiz.question}</Text>
              {this.state.isAnswerCorrect ? <Text>Correct</Text> : <Text>Incorrect</Text>}
          </View>

          <View style={styles.optionsContainer}>
            {this.renderOptions()}
            <TouchableOpacity onPress={this.checkAnswer}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Submit Answer</Text>
                </View>
            </TouchableOpacity>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    marginTop:20,
    marginBottom:20,
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  lifeLine: {
    flex:1,
    fontSize: 20,
    flexDirection:'row',
    // alignItems:'stretch',
    // textAlign: 'center',
    backgroundColor:'yellow',
    margin: 10,
  },
  quiz:{
    flex:2,
    // alignItems:'stretch',
    backgroundColor:'blue',
    textAlign: 'center',
    margin: 10,
},
question:{
    fontSize: 30,
    color:'white',
    textAlign:'center'
  },
  optionsContainer:{
    flex:2,
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-around',
    backgroundColor:'grey',
    // alignItems:'center',
    margin:10,
  },

  button:{
    marginTop:40,
    width:180,
    backgroundColor:'blue',
    alignItems:'center',
    // justifyContent:'center',
  },
  buttonText:{
    padding:5,
    color:'white'
  }

});
