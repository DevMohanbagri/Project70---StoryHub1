import React from 'react';
import { StyleSheet, Text, View ,Image, TextInput, TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default class WriteStory extends React.Component{
    render(){
        return(
            <SafeAreaProvider>
                <Header
                centerComponent = {{text:'StoryHub', style:{color:'blue', fontSize: 24}}}
                backgroundColor = 'lightblue'
                />

                <Text style={styles.displayText}>Title of the story</Text>
                <TextInput style={styles.inputBox} />

                <Text style={styles.displayText}>Author Name</Text>
                <TextInput style={styles.inputBox}  />

                <Text style={styles.displayText}>WriteStory</Text>
                <TextInput style={styles.storyinputBox}  multiline= {true}/>


                <TouchableOpacity style = {styles.submitButton}>
                <Text style={styles.buttonText}> Submit </Text>
                </TouchableOpacity>
            </SafeAreaProvider>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    submitButton:{
      backgroundColor: '#2196F3',
      padding: 10,
      margin: 20,
      width : 100,
      alignSelf: 'center'
    },
    buttonText:{
      fontSize: 20,
    },
    displayText:{
        marginLeft: 400,
        margin: 20,
        fontSize: 20,
        fontWeight: 'bold'
    },
    inputView:{
        flexDirection: 'row',
        margin: 20
    },
    inputBox:{
        width: 200, 
        height:40, 
        borderWidth: 1.5, 
        fontSize: 20,
        alignSelf: 'center',
        marginBottom: 20
      },
      storyinputBox:{
        width: 500, 
        height:200, 
        borderWidth: 1.5, 
        fontSize: 20,
        alignSelf: 'center'
      }
    });