/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import Option from './Option';
import Question from './question';
import {
  Platform, TouchableHighlight, TouchableOpacity, 
  Alert, StyleSheet, Text, View} 
  
  from 'react-native';


export default class Quiz extends Component{

    state={
        optionSelected:null,
        isAnswerCorrect:null,
        answerSubmitted:false,
        toggleSubmitBtn:false,
    }   
    
    isAnswerSubmitted=()=>{
        return this.state.answerSubmitted;
    }

    isCorrectAnswer=(optionIdx)=>{
        return +this.props.quiz.answer===optionIdx;
    }

    optionSelectHandler=(optionId)=>{
        this.setState({
            optionSelected:optionId,
            toggleSubmitBtn:true,
        })

    }

    isSelected=(optionIndex)=>{
        return this.state.optionSelected===optionIndex;
    }

    checkAnswer=()=>{
        if(this.state.optionSelected===+this.props.quiz.answer){
            this.setState({
                isAnswerCorrect:'correct',
                answerSubmitted:true,
                toggleSubmitBtn:false
            })
        }else{
            this.setState({
                isAnswerCorrect:'incorrect',
                answerSubmitted:true,
                toggleSubmitBtn:false
            })
        }
    }


  renderOptions=()=>{
      const options=[];
      let numOfOption = this.props.fiftyFifty ? 2 : 4;
      for(let i=1;i<=numOfOption;i++){
          options.push(<Option 
            key={i} 
            option={this.props.quiz.options[i]} 
            isSelected={this.isSelected(i)}
            isAnswerSubmitted={this.isAnswerSubmitted()}
            isCorrectAnswer={this.isCorrectAnswer(i)}
            optionId={i}
            optionSelectHandler={this.optionSelectHandler}/>)
      }
      return options;
  }

  componentDidMount(){
    console.log('quiz', this.props.quiz);
  }

  
  render() {
    return (
        <>
           
          <View style={styles.quizContainer}>
            <Question isAnswerCorrect={this.state.isAnswerCorrect}
              quiz={this.props.quiz}
            />
            
          </View>  

          <View style={styles.optionsContainer}>
            {this.renderOptions()}
            {this.state.toggleSubmitBtn ?
            <TouchableOpacity onPress={this.checkAnswer}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Submit Answer</Text>
                </View>
            </TouchableOpacity> : null}

            {this.state.answerSubmitted ?
            <TouchableOpacity onPress={this.props.nextQuiz}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Next Question</Text>
                </View>
            </TouchableOpacity> : null}
        </View>

      </>
    );
  }
}

const styles = StyleSheet.create({
  quizContainer:{
    flex:2,
    // alignItems:'stretch',
    backgroundColor:'blue',
    // textAlign: 'center',
    justifyContent:'space-between',
    flexWrap:'wrap',
    marginHorizontal: 10,
    marginVertical:5
},
 
  optionsContainer:{
    flex:2,
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-around',
    backgroundColor:'grey',
    marginHorizontal: 10,
    marginVertical:5
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
