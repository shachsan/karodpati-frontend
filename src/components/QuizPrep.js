import React, { Component } from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    StyleSheet, 
    Picker, 
    Item,
    } from 'react-native';
import {ButtonGroup} from 'react-native-elements';

export default class QuizPrep extends Component {
    state={
        form:{
            numOfQuiz:5,
            mainCat:'',
            selectedCat:[],
            subCat:[],
            level:''
        }
    }

    static navigationOptions={
        title:'preparing your quiz'
    }

    selectMainCats=(selectedIndex)=>{
        console.log('selected Index', selectedIndex);
        newCat=[...this.state.selectedCat]
        newCat.push(selectedIndex)
       this.setState({selectedCat:newCat})
    }
    render() {
        console.log('selected category:', this.state.mainCat);
        //TODO: dynamically generate below array
        quizQty=[ <Picker.Item key={5} label="5" value="5" />,
                    <Picker.Item key={10} label="10" value="10" />,
                    <Picker.Item key={15} label="15" value="15" />,
                    <Picker.Item key={20} label="20" value="20" />,
                    <Picker.Item key={25} label="25" value="25" />,
                    <Picker.Item key={30} label="30" value="30" />,
                    <Picker.Item key={35} label="35" value="35" />,
                    <Picker.Item key={40} label="40" value="40" />
                ]
        mainCategories=["Internation", "National", "Both"];
        const {mainCat} = this.state;

        return (
             <View style={styles.container}>
                <Text style={styles.label}>How many questions would you like to attempt?</Text>
                <Picker
                    selectedValue={this.state.numOfQuiz}
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({numOfQuiz: itemValue})
                    }>{quizQty}
                </Picker>

                <View style={styles.category}>
                    <Text>Choose Question Categories</Text>
                    <ButtonGroup 
                        onPress={this.selectMainCats}
                        selectedIndex={mainCat}
                        buttons={mainCategories}
                        containerStyle={{height: 100}}
                        selectMutiple={true}
                    />
                    {/* <Button style={styles.mainCatBtns} title="International">International</Button>
                    <Button style={styles.mainCatBtns} title="National">National</Button>
                    <Button style={styles.mainCatBtns} title="Both">Both</Button> */}
                </View>
                <View style={styles.category}>
                    <Text>Choose Question Categories</Text>
                </View>
                <View style={styles.category}>
                    <Text>Choose Question Categories</Text>
                </View>

             </View>
        );
    }
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        // justifyContent:'flex-start',
        alignItems:'center',
        // flexDirection:'row',
        flexWrap:'wrap'
    },
    label:{
        backgroundColor:'blue',
        fontSize:18,
        textAlign:'center',
        color:'white',
        // margin:5,
        padding:5
    },
    picker:{
        flex:1,
        height: 50, 
        width: 100, 
        marginTop:-30
    },

    category:{
        flex:1,
        justifyContent:'flex-start'
    },
    header:{
        fontSize:35,
        alignItems:'stretch'
        
    }
})