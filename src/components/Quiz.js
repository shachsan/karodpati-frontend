/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState, useEffect} from 'react';
import Option from './Option';
import Question from './question';
import {
  Platform, TouchableHighlight, TouchableOpacity, 
  Alert, StyleSheet, Text, View} 
  
  from 'react-native';


const Quiz=props=>{
  
    const [optionSelected, setOptionSelected] = useState(null);
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
    const [answerSubmitted, setAnswerSubmitted] = useState(false);
    const [toggleSubmitBtn, setToggleSubmitBtn] = useState(false);
    const [optionsToRender, setOptionsToRender] = useState([+props.quiz.answer]);
    
    console.log("optionsToRender:", optionsToRender);
    
    const isAnswerSubmitted=()=>{
        return answerSubmitted;
    }

    const isCorrectAnswer=(optionIdx)=>{
        return +props.quiz.answer===optionIdx;
    }

    const optionSelectHandler=(optionId)=>{
      setOptionSelected(optionId);
      setToggleSubmitBtn(true)
    }

    const isSelected=(optionIndex)=>{
        return optionSelected===optionIndex;
    }

    const checkAnswer=()=>{
      setAnswerSubmitted(true);
      setToggleSubmitBtn(false);
        if(optionSelected===+props.quiz.answer){
            setIsAnswerCorrect('correct');
            props.scoreHandler(true);
        }else{
            setIsAnswerCorrect('incorrect');
            props.scoreHandler(false);
        }
    }


  const renderOptions=()=>{

      //TODO: randomly arrange Options in an array
      
      const options=[];
      for(let i=0;i<4;i++){
          options.push(<Option 
            key={i+1} 
            option={props.quiz.options[i+1]} 
            isSelected={isSelected(i+1)}
            isAnswerSubmitted={isAnswerSubmitted()}
            isCorrectAnswer={isCorrectAnswer(i+1)}
            optionId={i+1}
            fiftyFifty={props.fiftyFifty}
            fiftyFiftyOptions={optionsToRender}
            optionSelectHandler={optionSelectHandler}/>)
      }

      return options;
  }

  const getRandomIdx=()=>{
    return Math.ceil(Math.random()*4);
  }

  
  useEffect(()=> {
    if(props.fiftyFifty && optionsToRender.length<2){
      let secondNum = getRandomIdx();
      while(secondNum===+props.quiz.answer){
        secondNum=getRandomIdx();
      }
      setOptionsToRender([...optionsToRender,secondNum])

    }
  },[props.fiftyFifty]) //here props.fiftyFifty is passed as 2nd argument to
  //useEffect hook. Passing the argument here will make the useEffect hook 
  //work like componentDidUpdate life cycle hook. This argument tells this hook
  //that if there is a change in props.fiftyFifty, re-run the effect
    return (
        <>
           
          <View style={styles.quizContainer}>
            <View style={styles.question}>
              <Question
                quiz={props.quiz}
              />
            </View>

            <View>
                    {isAnswerCorrect === 'correct' ? <Text style={[styles.correct, styles.answerStatus]}>Correct</Text> : null}
                    {isAnswerCorrect === 'incorrect' ? <Text style={[styles.inCorrect, styles.answerStatus]}>Incorrect</Text>:null}
            </View>
            
          </View>  

          <View style={styles.optionsContainer}>
            {renderOptions()}
            {toggleSubmitBtn ?
            <TouchableOpacity onPress={()=>{checkAnswer();props.checkIfLastQuiz()}}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Submit Answer</Text>
                </View>
            </TouchableOpacity> : null}

            {answerSubmitted && !props.lastQuestion ?
            <TouchableOpacity onPress={props.nextQuiz}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>Next Question</Text>
                </View>
            </TouchableOpacity> : null}

            {answerSubmitted && props.lastQuestion ?
            <TouchableOpacity onPress={props.displayReport}>
                <View style={{alignItems:'center'}}>
                  <Text style={styles.buttonText}>End of Quiz!</Text>
                </View>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>Show Report</Text>
                </View>
            </TouchableOpacity> : null}
                    
        </View>

      </>
    );

}

export default Quiz;

const styles = StyleSheet.create({
  quizContainer:{
    flex:1,
    backgroundColor:'blue',
    flexWrap:'wrap',
    marginHorizontal: 10,
    justifyContent:'space-between',
    marginVertical:5
  },

  // quizCount:{
  //   padding:5,
  //   backgroundColor:'yellow',
  //   alignSelf:'flex-end'
  // },
 
  optionsContainer:{
    flex:1,
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-around',
    backgroundColor:'grey',
    marginHorizontal: 10,
    marginVertical:5
  },
  
  button:{
    marginTop:30,
    width:180,
    backgroundColor:'blue',
    alignItems:'center',
  },
  buttonText:{
    padding:5,
    color:'white'
  },

  answerStatus:{
    color:'white',
    fontSize:25,
    textAlign:'center',
  },
  correct:{
    backgroundColor:'green',
  },

  inCorrect:{
    backgroundColor:'red',
  },

});
