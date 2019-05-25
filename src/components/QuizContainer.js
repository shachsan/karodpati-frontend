import React, {useState, useEffect} from 'react';
import LifeLine from './lifeLine';
import Quiz from './Quiz';
// import HomeContainer from './src/components/HomeContainer';
// import AppNavigator from './src/appNavigator';
import httpRequests from '../httpRequests';
import {View, Text, StyleSheet} from 'react-native';

const App = props=>{

    navigationOptions = {
        title: 'Quiz',
      };

  const [id, setId] = useState(1);
  const [quiz, setQuiz] = useState([]);
  const [fiftyFifty, setFiftyFifty] = useState(false)
  const [quizPrepStarted, setQuizPrepStarted] = useState(false)
  const [quizReady, setQuizReady] = useState(false)
  const [correctAnswerCounter, setCorrectAnswerCounter] = useState(0);
  const [wrongAnswerCounter, setWrongAnswerCounter] = useState(0);

  useEffect(()=>{
    const {navigation} = props;
    const query = navigation.getParam('query', '');
    console.log('query props:',query );
    const data = httpRequests.getQuiz(query)
    data.then(quizData => {
      setQuiz(quizData);
    })
    console.log('data:', data);
    console.log('quiz:', quiz);
  },[]) //here empty array has been passed as second argument to useEffect. 
  //if we pass any data inside this array and if that data changes, useEffect 
  //will re-execute. By passing empty array, there will be no change ever inside 
  //this array which will prevent useEffect to re-run often. 

  const fiftyFiftySelectHandler=()=>{
    setFiftyFifty(true)
  }

  const nextQuizHandler=()=>{
    setId(id+1);
    setFiftyFifty(false);
  }

  const getQuiz=()=>{
    return quiz[id-1];
  }

  const scoreHandler = (answer)=>{
    answer ? setCorrectAnswerCounter(correctAnswerCounter+1) : setWrongAnswerCounter(wrongAnswerCounter+1);
  }

    return (
        <View style={styles.container}>
            {quiz.length > 0
            ? <>
                
                <LifeLine useFiftyFifty={fiftyFiftySelectHandler}></LifeLine>
                <View style={styles.statusBar}>
                  <Text>correct ans:{correctAnswerCounter}</Text>
                  <Text>Incorrect ans:{wrongAnswerCounter}</Text>
                  <Text style={{fontSize:15}}>Ques:{props.quizAttemping}/{props.numOfQuiz}</Text>
                </View>
                <Quiz key={id} quiz={getQuiz()} 
                      nextQuiz={nextQuizHandler}
                      fiftyFifty={fiftyFifty}
                      numOfQuiz = {quiz.length}
                      quizAttemping = {id}
                      scoreHandler={scoreHandler}
                      // setWrongAnswerCounter={setWrongAnswerCounter}
                />
              </>
            : null}
        </View>
    );
  
}

export default App;



  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // marginTop:40,
      marginBottom:30,
      backgroundColor: '#F5FCFF',
    },
    statusBar:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      backgroundColor:'yellow'
    },
  })