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

    // state={
    //     optionSelected:null,
    //     isAnswerCorrect:null,
    //     answerSubmitted:false,
    //     toggleSubmitBtn:false,
    //     optionsToRender:[+props.quiz.answer]
    // }   
    
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
        // setState({
        //     optionSelected:optionId,
        //     toggleSubmitBtn:true,
        // })
      setOptionSelected(optionId);
      setToggleSubmitBtn(true)
    }

    const isSelected=(optionIndex)=>{
        return optionSelected===optionIndex;
    }

    const checkAnswer=()=>{
        if(optionSelected===+props.quiz.answer){
            setIsAnswerCorrect('correct');
            setAnswerSubmitted(true);
            setToggleSubmitBtn(false);
        }else{
            setIsAnswerCorrect('incorrect');
            setAnswerSubmitted(true);
            setToggleSubmitBtn(false);
        }
    }


  const renderOptions=()=>{

      //TODO: randomly arrange Options in an array
      
      const options=[];
      // const shuffledOptions=[];
      // let numOfOption = props.fiftyFifty ? 2 : 4;
      for(let i=0;i<4;i++){
        // let idx = Math.floor(Math.random()*(4-i));
          // options.splice(idx, 0, <Option 
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

  // componentDidMount(){
  //   console.log('quiz', props.quiz);
  // }

  
  useEffect(()=> {
    // console.log('optionsToBeRendered:', optionsToRender);
    if(props.fiftyFifty && optionsToRender.length<2){
      // let optionsToRender=[+props.quiz.answer];
      let secondNum = getRandomIdx();
      console.log('answer id:', props.quiz.answer);
      while(secondNum===+props.quiz.answer){
        secondNum=getRandomIdx();
        console.log('inside while loop, secondNum:',secondNum);
      }
      // setState({
      //   optionsToRender:[...optionsToRender,secondNum]
      // })
      console.log("optionsToRender:", [...optionsToRender,secondNum]);
      setOptionsToRender([...optionsToRender,secondNum])

    }
  },[props.fiftyFifty])
    return (
        <>
           
          <View style={styles.quizContainer}>
            <View style={styles.quizCount}>
              <Text style={{fontSize:15}}>{props.quizAttemping}/{props.numOfQuiz}</Text>
            </View>
            <View style={styles.question}>
              <Question isAnswerCorrect={isAnswerCorrect}
                quiz={props.quiz}
              />
            </View>
            
          </View>  

          <View style={styles.optionsContainer}>
            {renderOptions()}
            {toggleSubmitBtn ?
            <TouchableOpacity onPress={checkAnswer}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Submit Answer</Text>
                </View>
            </TouchableOpacity> : null}

            {answerSubmitted ?
            <TouchableOpacity onPress={props.nextQuiz}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Next Question</Text>
                </View>
            </TouchableOpacity> : null}
        </View>

      </>
    );

}

export default Quiz;

const styles = StyleSheet.create({
  quizContainer:{
    flex:2,
    backgroundColor:'blue',
    flexWrap:'wrap',
    marginHorizontal: 10,
    // flexDirection:'row',
    // alignItems:'center',
    justifyContent:'center',
    marginVertical:5
  },
  question:{
    alignSelf:'center',
  },

  quizCount:{
    // width:1,
    padding:5,
    // fontSize:15,
    alignItems:'flex-end',
    // alignSelf:'flex-start',
    backgroundColor:'yellow'
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
