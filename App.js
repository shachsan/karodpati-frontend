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
// import { start } from 'repl';




export default class App extends Component{

  touchHandler=()=>{
    Alert.alert('You tapped a button!')
  }
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.lifeLine}>
            <Text>50/50</Text>
            <Text>50/50</Text>
          </View>

          <View style={styles.quiz}>
              <Text>Question 1</Text>
          </View>

          <View style={styles.options}>
              <Text style={styles.optionText}>optidfsdfsdfon1</Text>
              <Text style={styles.optionText}>optsdfsdffsdion2</Text>
              <Text style={styles.optionText}>optdfdsgdgdgdfgion3</Text>
              <Text style={styles.optionText}>optsfsdfsfsdfsfsfdion4</Text>
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
    alignItems:'stretch',
    textAlign: 'center',
    backgroundColor:'yellow',
    margin: 10,
  },
  quiz:{
    flex:1,
    fontSize: 40,
    alignItems:'stretch',
    backgroundColor:'blue',
    textAlign: 'center',
    margin: 10,
  },

  options:{
    flex:2,
    flexDirection:'row',
    // justifyContent:'space-between',
    backgroundColor:'green',
    // alignItems:'center',
    margin:10,
  },
  
  optionText:{
    // display:'flex',
    flex:1,
    flexWrap:'wrap',
    // backgroundColor:'yellow',
    justifyContent:'space-between'
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
