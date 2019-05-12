import React, { Component } from 'react';
import { 
    View, 
    Text, 
    Button,
    TouchableOpacity, 
    StyleSheet, 
    Picker, 
    Item,
    } from 'react-native';
import {ButtonGroup} from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';




export default class QuizPrep extends Component {
    state={
        form:{
            numOfQuiz:5,
            // selectedIndex:1,
            categories:{international:false, national:false, any:false},
            // categoryNational:true,
            // selectedCat:[],
            subCat:[],
            level:{easy:false, medium:false, hard:false}
        }
    }

    static navigationOptions={
        title:'preparing your quiz'
    }

    selectMainCats=(selectedIndex)=>{
        console.log('selected Index', selectedIndex);
        newCat={...this.state.form}
        newCat.selectedCat.push(selectedIndex)
        console.log('selected category:', newCat.selectedCat);
       this.setState({form:newCat})
    }

    handleCategoryOnPress=(cat)=>{

        this.setState(state=>{
            if(cat==='any'){
                state.form.categories.international=!state.form.categories.international;
                state.form.categories.national=!state.form.categories.national;
                state.form.categories.any=!state.form.categories.any;

                return state;
            }else{

                state.form.categories[cat]=!state.form.categories[cat];
                return state;
            }
        })
    }

    handleOnPressLevel=(level)=>{
        this.setState(state=>{
            state.form.level[level]=!state.form.level[level]
            return state;
        })
    }

    submitHandler=()=>{

    }

    render() {
        console.log('state:', this.state);
        const {navigate} = this.props.navigation;
        const placeholder={
            label:"How many questions would you like to attempt?",
            value:null

        }
        //TODO: dynamically generate below array
        // quizQty=[ <Picker.Item key={5} label="5" value="5" />,
        //             <Picker.Item key={10} label="10" value="10" />,
        //             <Picker.Item key={15} label="15" value="15" />,
        //             <Picker.Item key={20} label="20" value="20" />,
        //             <Picker.Item key={25} label="25" value="25" />,
        //             <Picker.Item key={30} label="30" value="30" />,
        //             <Picker.Item key={35} label="35" value="35" />,
        //             <Picker.Item key={40} label="40" value="40" />
        //         ]
        let quizQty=[{
            label:"5",
            value:"5"
        },
        {
            label:"10",
            value:"10"
        },
        {
            label:"15",
            value:"15"
        },
        {
            label:"20",
            value:"20"
        },
        {
            label:"25",
            value:"25"
        },]
        mainCategories=["Internation", "National", "Both"];
        const {categories} = this.state.form;
        const {level}=this.state.form;

        return (
             <View style={styles.container}>
                <View style={styles.questionQtyContainer}>
                    <Text style={styles.label}>How many questions would you like to attempt?</Text>
                    {/* <Picker
                        selectedValue={this.state.numOfQuiz}
                        style={styles.picker}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({numOfQuiz: itemValue})
                        }>{quizQty}
                    </Picker> */}
                    <RNPickerSelect
                        placeholder={{}}
                        items={quizQty}
                        style={styles.pickerSelect}
                        onValueChange={(value)=>{
                            this.setState({numOfQuiz:value})
                        }}
                    />
                </View>
                <View style={styles.category}>
                    <Text>Choose Question Categories</Text>
                    <TouchableOpacity onPress={()=>this.handleCategoryOnPress("international")}>
                        <Text style={[
                            styles.categoryText, 
                            categories.international ? styles.optionSelected : null
                            ]}>International</Text>
                    </TouchableOpacity >
                    <TouchableOpacity onPress={()=>this.handleCategoryOnPress("national")}>
                        <Text style={[
                            styles.categoryText,
                            categories.national ? styles.optionSelected : null
                            ]}>National</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.handleCategoryOnPress("any")}>
                        <Text style={styles.categoryText}>Any</Text>
                    </TouchableOpacity>

                    {/* <ButtonGroup 
                        onPress={this.selectMainCats}
                        selectedIndex={selectedIndex}
                        buttons={mainCategories}
                        containerStyle={{height: 100}}
                        selectMutiple={true}
                    /> */}
                    {/* <Button style={styles.mainCatBtns} title="International">International</Button>
                    <Button style={styles.mainCatBtns} title="National">National</Button>
                    <Button style={styles.mainCatBtns} title="Both">Both</Button> */}
                </View>
                    
                <View style={styles.qyestionTypes}>
                    <View style={{width:400, alignItems:'center'}}><Text>Question Types</Text></View>
                    <TouchableOpacity onPress={()=>this.handleOnPressLevel('easy')}>
                        <Text style={[
                            styles.questionTypeText,
                            level.easy ? styles.optionSelected : null
                            ]}>Easy</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.handleOnPressLevel('medium')}>
                        <Text style={[
                            styles.questionTypeText,
                            level.medium ? styles.optionSelected : null
                            ]}>Medium</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.handleOnPressLevel('hard')}>
                        <Text style={[
                            styles.questionTypeText,
                            level.hard ? styles.optionSelected : null
                            ]}>Hard</Text></TouchableOpacity>
                </View>
                    <View style={styles.submit}><Button color='white' title="Submit" onPress={()=>navigate('Quiz')}/></View>
               
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
        flexWrap:'wrap',
        marginBottom:80
    },
    label:{
        backgroundColor:'blue',
        fontSize:18,
        textAlign:'center',
        color:'white',
        // margin:5,
        padding:5
    },
    pickerSelect:{
        // flex:1,
        height: 100, 
        fontSize:15,
        width: 100, 
        marginTop:30,
        borderWidth:1,
        borderColor:'blue'

    },

    questionQtyContainer:{
        flex:1,
        alignItems:'center',
    },

    category:{
        flex:2,
        alignItems:'center',
        // marginBottom:30
    },

    categoryText:{
        // width:40,
        padding:10,
        margin:5,
        borderWidth:1,
        borderColor:'black'

    },

    qyestionTypes:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        flexWrap:'wrap',
    
    },

    questionTypeText:{
        margin:20,
        padding:10,
        // width:90,
        borderWidth:1,
        borderColor:'black',
        textAlign:'center'
    },

    optionSelected:{
        backgroundColor:'yellow',
        color:'red',
        fontSize:20
    },

    submit:{
        borderWidth:1,
        backgroundColor:'blue',
        width:100
    },
    header:{
        fontSize:35,
        alignItems:'stretch'
        
    }
})