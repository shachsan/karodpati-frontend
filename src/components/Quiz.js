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
        answerSubmitted:false,
        toggleSubmitBtn:false

    }   
    
    isAnswerSubmitted=()=>{
        return this.state.answerSubmitted;
    }

    isCorrectAnswer=(optionIdx)=>{
        return this.props.quiz.answer===optionIdx;
    }

    optionSelectHandler=(optionId)=>{
        this.setState({
            optionSelected:optionId,
            toggleSubmitBtn:true,
        })

        // console.log('option Id selected', this.props.optionId);
    }

    isSelected=(optionIndex)=>{
        return this.state.optionSelected===optionIndex;
    }

    checkAnswer=()=>{
        if(this.state.optionSelected===this.props.quiz.answer){
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
      for(let i=1;i<=4;i++){
          options.push(<Option 
            key={i} 
            option={this.props.quiz.options[i]} 
            isSelected={this.isSelected(i)}
            isAnswerSubmitted={this.isAnswerSubmitted()}
            isCorrectAnswer={this.isCorrectAnswer(i)}
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

            <Text style={styles.questionInNepali}>{this.props.quiz.questionInNep}</Text>

            <View>
                {this.state.isAnswerCorrect === 'correct' ? <Text style={styles.correct}>Correct</Text> : null}
                {this.state.isAnswerCorrect === 'incorrect' ? <Text style={styles.inCorrect}>Incorrect</Text>:null}
            </View>
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
    // textAlign: 'center',
    justifyContent:'space-between',
    flexWrap:'wrap',
    margin: 10,
},
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
  optionsContainer:{
    flex:2,
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-around',
    backgroundColor:'grey',
    // alignItems:'center',
    margin:10,
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
