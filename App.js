import React, {Component} from 'react';
import Quiz from './src/components/Quiz';

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

  componentWillMount(){

    this.setState({
      
        quiz:[{
            id:1,
            question:'What is the height of Mt. Everest?',
            questionInNep:';u/dfyf lxdfnsf] prfO{ slt 5 <',
            options:{
                1:'8484 meter',
                2:'8848 meter',
                3:'8884 meter',
                4:'8488 meter'
                },
            answer:2
            },
            {
            id:2,
            question:'In which year did facebook buy Instagram?',
            options:{
                1:'2012',
                2:'2011',
                3:'2013',
                4:'2014'
                },
            answer:1
            },
            {
            id:3,
            question:'Which is the smallest country in the world?',
            options:{
                1:'Nepal',
                2:'Sri Lanka',
                3:'Vatican City',
                4:'Poland'
                },
            answer:3
            }
        ]
    })
    //TODO: fetch questions from server
  }
  render() {
    
    return (
      <Quiz key={this.state.id} quiz={this.getQuiz()} nextQuiz={this.nextQuizHandler}/>
    );
  }
}

