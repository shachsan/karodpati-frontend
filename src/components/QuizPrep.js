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
            categories:[],
            subCat:[],
            level:[]
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
           
                let catSelectedIdx = prevState.form.categories.findIndex(category=>category===cat) //returns index of matched element
                if(catSelectedIdx>=0){
                    prevState.form.categories.splice(catSelectedIdx,1);
                }else{
                    prevState.form.categories.push(cat);
                }
                return prevState;
            }
        )
    }

    handleOnPressLevel=(level)=>{
        this.setState(prevState=>{
            let levelPressed = prevState.form.level.findIndex(l=>l===level) //returns index of matched element
            if(levelPressed>=0){
                prevState.form.level.splice(levelPressed,1);
            }else{
                prevState.form.level.push(level);
            }
            return prevState;
        })
    }
    handleOnSelectSubcategory=(subCategory)=>{
        this.setState(prevState=>{
            let subCatSelected = prevState.form.subCat.findIndex(subcat=>subcat===subCategory)
            if(subCatSelected>=0){
                prevState.form.subCat.splice(subCatSelected,1);
            }else{
                prevState.form.subCat.push(subCategory);
            }

            return prevState;
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
                            // categories.international ? styles.optionSelected : null
                            categories.includes("international") ? styles.optionSelected : null
                            ]}>International</Text>
                    </TouchableOpacity >
                    <TouchableOpacity onPress={()=>this.handleCategoryOnPress("national")}>
                        <Text style={[
                            styles.selectionText,
                            // categories.national ? styles.optionSelected : null
                            categories.includes("national") ? styles.optionSelected : null
                            ]}>National</Text>
                    </TouchableOpacity>
                </View>
                
                {/* //sub-categories */}
                <View style={{...styles.selections, flex:2}}>
                    <View style={{width:400, alignItems:'center'}}><Text>Choose Sub-Categories</Text></View>
                    <TouchableOpacity onPress={()=>this.handleOnSelectSubcategory('science')}>
                        <Text style={[
                            styles.selectionText,
                            // subCat.science ? styles.optionSelected : null
                            subCat.includes("science") ? styles.optionSelected : null
                            ]}>Science</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.handleOnSelectSubcategory('politics')}>
                        <Text style={[
                            styles.selectionText,
                            // subCat.politics ? styles.optionSelected : null
                            subCat.includes("politics") ? styles.optionSelected : null
                            ]}>Politics</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.handleOnSelectSubcategory('sports')}>
                        <Text style={[
                            styles.selectionText,
                            // subCat.sports ? styles.optionSelected : null
                            subCat.includes("sports") ? styles.optionSelected : null
                            ]}>Sports</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.handleOnSelectSubcategory('Geography')}>
                        <Text style={[
                            styles.selectionText,
                            // subCat.geography ? styles.optionSelected : null
                            subCat.includes("Geography") ? styles.optionSelected : null
                            ]}>Geography</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.handleOnSelectSubcategory('history')}>
                        <Text style={[
                            styles.selectionText,
                            // subCat.history ? styles.optionSelected : null
                            subCat.includes("history") ? styles.optionSelected : null
                            ]}>History</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.handleOnSelectSubcategory('art')}>
                        <Text style={[
                            styles.selectionText,
                            // subCat.art ? styles.optionSelected : null
                            subCat.includes("art") ? styles.optionSelected : null
                            ]}>Art & Culture</Text></TouchableOpacity>
                </View>
                    
                <View style={styles.selections}>
                    <View style={{width:400, alignItems:'center'}}><Text>Question Types</Text></View>
                    <TouchableOpacity onPress={()=>this.handleOnPressLevel('easy')}>
                        <Text style={[
                            styles.selectionText,
                            // level.easy ? styles.optionSelected : null
                            level.includes('easy') ? styles.optionSelected : null
                        ]}>Easy</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.handleOnPressLevel('medium')}>
                        <Text style={[
                            styles.selectionText,
                            level.includes('medium') ? styles.optionSelected : null
                            // level.medium ? styles.optionSelected : null
                        ]}>Medium</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.handleOnPressLevel('hard')}>
                        <Text style={[
                            styles.selectionText,
                            level.includes('hard') ? styles.optionSelected : null
                            // level.hard ? styles.optionSelected : null
                            ]}>Hard</Text></TouchableOpacity>
                </View>
                
                <View style={styles.submit}><Button color='white' title="Submit" onPress={()=>navigate('QuizContainer', {query:this.state.form})}/></View>
               
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