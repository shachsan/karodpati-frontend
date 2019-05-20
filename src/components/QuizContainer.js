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

  // state={
  //   id:1,
  //   quiz:[],
  //   fiftyFifty:false,
  //   quizPrepStarted:false,
  //   quizReady:false
  // }
  const [id, setId] = useState(1);
  const [quiz, setQuiz] = useState([]);
  const [fiftyFifty, setFiftyFifty] = useState(false)
  const [quiPrepStarted, setQuiPrepStarted] = useState(false)
  const [quizReady, setQuizReady] = useState(false)

  useEffect(()=>{
    const {navigation} = props;
    const query = navigation.getParam('query', '');
    console.log('query props:',query );
    // const httpReq = new httpRequests();
    const data = httpRequests.getQuiz(query)
    data.then(quizData => {
      setQuiz(quizData);
    })
    console.log('data:', data);
    console.log('quiz:', quiz);
  },[])
      

  // quizPrepHandler=()=>{
  //   setState({
  //     quizPrepHandler:true
  //   })
  // }

  const fiftyFiftySelectHandler=()=>{
    // setState({
    //   fiftyFifty:true
    // })
    console.log('50 50 clicked');

    setFiftyFifty(true)
  }

  const nextQuizHandler=()=>{
    // setState({
    //   id:id+1,
    //   fiftyFifty:false
    // })
    setId(id+1);
    setFiftyFifty(false);
  }

  const getQuiz=()=>{
    return quiz[id-1];
  }

  // async componentDidMount(){
  //   const {navigation} = props;
  //   const query = navigation.getParam('query', '');
  //   console.log('query props:',query );
  //   // const httpReq = new httpRequests();
  //   const data = await httpRequests.getQuiz(query)
  //   console.log('data:', data);
  //     setState({
  //         quiz:data
  //       })
  // }

  // async componentDidMount(){
  //   const {navigation} = props;
  //   const query = navigation.getParam('query', '');
  //   console.log('query props:',query );
  //   // const httpReq = new httpRequests();
  //   const data = await httpRequests.getQuiz(query)
  //   console.log('data:', data);
  //     setState({
  //         quiz:data
  //       })
  // }




    return (
        <View style={styles.container}>
            {quiz.length > 0
            ? <>
                
                <LifeLine useFiftyFifty={fiftyFiftySelectHandler}></LifeLine>
                <Quiz key={id} quiz={getQuiz()} 
                      nextQuiz={nextQuizHandler}
                      fiftyFifty={fiftyFifty}
                      numOfQuiz = {quiz.length}
                      quizAttemping = {id}
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
    }
  })