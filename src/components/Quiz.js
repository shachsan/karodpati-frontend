/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform, TouchableHighlight, TouchableOpacity, 
  Alert, StyleSheet, Text, View} 
  
  from 'react-native';


export default class Quiz extends Component{

    

  touchHandler=()=>{
    Alert.alert('You tapped a button!')
  }

  renderOptions=()=>{
      const options=[];
      for(let i=1;i<=4;i++){
          options.push(<Text key={i} style={styles.options}>{this.props.quiz.options[i]}</Text>)
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
          </View>

          <View style={styles.optionsContainer}>
            {this.renderOptions()}
              {/* <Text style={styles.options}>optidffon1</Text>
              <Text style={styles.options}>optdfdsfgion3</Text>
              <Text style={styles.options}>optsdfsdion2</Text>
              <Text style={styles.options}>optsfsdfsion4</Text> */}
          </View>

          <View style={styles.button}>
              <Text style={styles.buttonText}>Submit</Text>
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
    alignItems:'stretch',
    textAlign: 'center',
    backgroundColor:'yellow',
    margin: 10,
  },
  quiz:{
    flex:2,
    fontSize: 40,
    alignItems:'stretch',
    backgroundColor:'blue',
    textAlign: 'center',
    margin: 10,
},
question:{
    color:'white'

  },
  optionsContainer:{
    flex:2,
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-around',
    backgroundColor:'green',
    // alignItems:'center',
    margin:10,
  },
  options:{
    width:120,
    marginVertical:30,
    fontSize:20,
    textAlign:'center',
    backgroundColor:'yellow',
  },
  button:{
    margin:5,
    width:180,
    backgroundColor:'blue',
    alignItems:'center',
    // justifyContent:'flex-start',
  },
  buttonText:{
    padding:5,
    color:'white'
  }

});
