import React, {Component} from 'react';
import Quiz from './src/components/Quiz';
import httpRequests from './src/httpRequests';

export default class App extends Component{

  state={
    id:1,
    quiz:[]
  }

  touchHandler=()=>{
    Alert.alert('You tapped a button!')
  }

  nextQuizHandler=()=>{
    this.setState({id:this.state.id+1})
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
      <>
        {this.state.quiz.length > 0
          ? <Quiz key={this.state.id} quiz={this.getQuiz()} nextQuiz={this.nextQuizHandler}/>
          : null}
      </>
    );
  }
}

