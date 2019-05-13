import React, { Component } from 'react';
import { 
    View, 
    Text, 
    Button,
    TouchableOpacity, 
    StyleSheet, 
    Picker, 
    Item,
    TextInput,
    } from 'react-native';
import {ButtonGroup} from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';




export default class QuizPrep extends Component {
    state={
        form:{
            numOfQuiz:5,
            categories:{
                international:false, 
                national:false, 
                any:false
            },
            subCat:{
                science:false,
                politics:false,
                sports:false,
                geography:false,
                history:false,
                art:false, 
            },
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

        this.setState(prevState=>{
            if(cat==='any'){
                console.log('any:',this.state.form.categories.any)
                console.log('prevState:',prevState)
                if(prevState.any){
                    console.log('inside any true');
                    prevState.form.categories.international=false;
                    prevState.form.categories.national=false;
                    // prevState.form.categories.any=!prevState.form.categories.any;
                
                }else{
                    console.log('inside any false');
                    prevState.form.categories.international=true;
                    prevState.form.categories.national=true;
                    // prevState.form.categories.any=!prevState.form.categories.any;
                }
        

                return prevState;
            }else{

                prevState.form.categories[cat]=!prevState.form.categories[cat];
                prevState.form.categories.any = prevState.form.categories.international && prevState.form.categories.national 
                ? true : false;
                return prevState;
            }
        })
    }

    handleOnPressLevel=(level)=>{
        this.setState(state=>{
            state.form.level[level]=!state.form.level[level]
            return state;
        })
    }
    handleOnSelectSubcategory=(subCategory)=>{
        this.setState(state=>{
            state.form.subCat[subCategory]=!state.form.subCat[subCategory]
            return state;
        })
    }

    submitHandler=()=>{

    }

    render() {
        console.log('state:', this.state);
        const {navigate} = this.props.navigation;
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
        const {categories, level, subCat} = this.state.form;

        return (
             <View style={styles.container}>
                <View style={styles.questionQtyContainer}>
                    <Text style={styles.label}>How many questions would you like to attempt?</Text>
                
                    <RNPickerSelect
                        placeholder={{}}
                        items={quizQty}
                        // style={pickerStyles}
                        onValueChange={(value)=>{
                            this.setState({numOfQuiz:value})
                        }}
                    />
                </View>
                <View style={styles.selections}>
                    <View style={{width:400, alignItems:'center'}}><Text>Choose Categories</Text></View>
                    <TouchableOpacity onPress={()=>this.handleCategoryOnPress("international")}>
                        <Text style={[
                            styles.selectionText, 
                            categories.international ? styles.optionSelected : null
                            ]}>International</Text>
                    </TouchableOpacity >
                    <TouchableOpacity onPress={()=>this.handleCategoryOnPress("national")}>
                        <Text style={[
                            styles.selectionText,
                            categories.national ? styles.optionSelected : null
                            ]}>National</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.handleCategoryOnPress("any")}>
                        <Text style={[
                            styles.selectionText,
                            categories.international && categories.national ? styles.optionSelected : null
                            ]}>Any</Text>
                        {/* <Text style={styles.selectionText}>Any</Text> */}
                    </TouchableOpacity>
                </View>
                
                {/* //sub-categories */}
                <View style={{...styles.selections, flex:2}}>
                    <View style={{width:400, alignItems:'center'}}><Text>Choose Sub-Categories</Text></View>
                    <TouchableOpacity onPress={()=>this.handleOnSelectSubcategory('science')}>
                        <Text style={[
                            styles.selectionText,
                            subCat.science ? styles.optionSelected : null
                            ]}>Science</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.handleOnSelectSubcategory('politics')}>
                        <Text style={[
                            styles.selectionText,
                            subCat.politics ? styles.optionSelected : null
                            ]}>Politics</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.handleOnSelectSubcategory('sports')}>
                        <Text style={[
                            styles.selectionText,
                            subCat.sports ? styles.optionSelected : null
                            ]}>Sports</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.handleOnSelectSubcategory('geography')}>
                        <Text style={[
                            styles.selectionText,
                            subCat.geography ? styles.optionSelected : null
                            ]}>Geography</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.handleOnSelectSubcategory('history')}>
                        <Text style={[
                            styles.selectionText,
                            subCat.history ? styles.optionSelected : null
                            ]}>History</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.handleOnSelectSubcategory('art')}>
                        <Text style={[
                            styles.selectionText,
                            subCat.art ? styles.optionSelected : null
                            ]}>Art & Culture</Text></TouchableOpacity>
                </View>
                    
                <View style={styles.selections}>
                    <View style={{width:400, alignItems:'center'}}><Text>Question Types</Text></View>
                    <TouchableOpacity onPress={()=>this.handleOnPressLevel('easy')}>
                        <Text style={[
                            styles.selectionText,
                            level.easy ? styles.optionSelected : null
                            ]}>Easy</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.handleOnPressLevel('medium')}>
                        <Text style={[
                            styles.selectionText,
                            level.medium ? styles.optionSelected : null
                            ]}>Medium</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.handleOnPressLevel('hard')}>
                        <Text style={[
                            styles.selectionText,
                            level.hard ? styles.optionSelected : null
                            ]}>Hard</Text></TouchableOpacity>
                </View>
                    <View style={styles.submit}><Button color='white' title="Submit" onPress={()=>navigate('QuizContainer')}/></View>
               
             </View>
        );
    }
};

const pickerStyles = StyleSheet.create({
    // inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderRadius: 4,
    
        paddingRight: 30
    // }
})

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        flexWrap:'wrap',
        marginBottom:80
    },
    label:{
        backgroundColor:'blue',
        fontSize:18,
        textAlign:'center',
        color:'white',
        padding:5
    },

    questionQtyContainer:{
        flex:1,
        alignItems:'center',
    },

    // category:{
    //     flex:2,
    //     alignItems:'center',
    // },

    // categoryText:{
    //     padding:10,
    //     margin:5,
    //     borderWidth:1,
    //     borderColor:'black'

    // },

    selections:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        flexWrap:'wrap',
    
    },

    selectionText:{
        margin:20,
        padding:10,
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