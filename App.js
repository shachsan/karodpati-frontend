import React, {Component} from 'react';
import Quiz from './src/components/Quiz';
import LifeLine from './src/components/lifeLine';
import httpRequests from './src/httpRequests';
import {View, Text, StyleSheet} from 'react-native';

export default class App extends Component{

  state={
    id:1,
    quiz:[],
    fiftyFifty:false,
    
  }

 
  fiftyFiftySelectHandler=()=>{
    this.setState({
      fiftyFifty:true
    })
  }

  nextQuizHandler=()=>{
    this.setState({
      id:this.state.id+1,
      fiftyFifty:false
    })
  }

  getQuiz=()=>{
    return this.state.quiz[this.state.id-1];
  }

  async componentDidMount(){
    console.log('1: start component will mount');
    // const httpReq = new httpRequests();
    const data = await httpRequests.getQuiz()
    console.log('data:', data);
      this.setState({
          quiz:data
        })
  }
    
    render() {
      console.log('3: quiz  in state', this.state.quiz);
    
    return (
      <View style={styles.container}>
        {this.state.quiz.length > 0
          ? <>
              <LifeLine useFiftyFifty={this.fiftyFiftySelectHandler}></LifeLine>
              <Quiz key={this.state.id} quiz={this.getQuiz()} 
                    nextQuiz={this.nextQuizHandler}
                    fiftyFifty={this.state.fiftyFifty}/>
            </>
          : null}
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:40,
    marginBottom:30,
    backgroundColor: '#F5FCFF',
  }
})
