import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const QuizEndReport = props =>{
    const accuracyData = props.navigation.state.params;//navigation.state.params stores
        //object passed as second argument to navigate methode. Ref: QuizContainer/navigate('QuizEndReport') 
    console.log('End of quiz report:', accuracyData);
    const accuracyRate = (accuracyData.noOfCorrectAns/accuracyData.totalQuestions)*100;
    
    const getColor = ()=>{
        // console.log('inside getcolor func, accuracyRate', accuracyRate);
        if(accuracyRate > 70){
            return 'green';
        }else{
            return 'red';
        }
    }
    
    return (
        <View style={styles.container}>
                <Text>
                    Report
                </Text>
            <View style={[styles.circle, {backgroundColor:getColor()}]}>
                <Text style={[styles.accuracy, {fontSize:20}]}>Accuracy</Text>
                <Text style={styles.accuracy}>
                    {accuracyRate}%
                </Text>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    circle:{
        display:'flex',
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
        justifyContent:'center',
    },
    accuracy:{
        textAlign:'center',
        color:'white',
        fontSize:30

    }
})

export default QuizEndReport;