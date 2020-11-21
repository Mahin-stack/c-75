import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,KeyboardAvoidingView, Alert} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {Header} from 'react-native-elements';
import * as firebase from 'firebase'
import db from '../config.js'

export default class WriteStoryScreen extends React.Component{
  constructor(){
    super()
    this.state={
      title: '',
      author: '',
      storyText: '',
    }
  }
  submitButton=()=>{
    db.collection('newStory').add({
   title: this.state.title,
   author: this.state.author,
   storyText: this.state.storyText
    })
    Alert.alert('Submitted')
    this.setState({
      title: ' ',
      author: ' ',
      storyText: ' '
  })
  }
  render(){
  return (
    <KeyboardAvoidingView stylestyle={styles.container} behavior= 'padding' enabled>
    <View style={styles.container}>
<Header
backgroundColor = {'pink'}
centerComponent = {{
text : 'Story Hub',
style : { color: 'black', fontSize: 30}
}}
/>
<View>

<TextInput
placeholder= 'Story Title'
onChangeText={(text)=>{
  this.setState({
title: text
  })
}}
value={this.state.title}
style={styles.title}
placeholderTextColor='black'
/>
</View>


<View>

<TextInput
placeholder= 'Author'
onChangeText= {(auth)=>{
  this.setState({
 author: auth
  })
}}
value={this.state.author}
placeholderTextColor= 'black'
style={styles.author}
/>

</View>


<View>

<TextInput
placeholder='Write Your Story'
onChangeText={(story)=>{
  this.setState({
    storyText: story
  })
}}
value={this.state.storyText}
placeholderTextColor= 'black'
style={styles.storyText}
multiline={true}
/>

</View>


<View>

<TouchableOpacity
onPress={this.submitButton}
>
  <Text style={styles.submitButton}>Submit</Text>
</TouchableOpacity>

</View>

</View>
</KeyboardAvoidingView>
  );
}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title:{
      height: 40,
      borderWidth: 2,
      marginTop: 40,
      margin: 10,
      color:'black',
      padding: 6,

  },
  author: {
      height: 40,
      borderWidth: 2,
      margin: 10,
       padding: 6,
  },
  storyText: {
      height: 250,
      borderWidth: 2,
      margin: 10, 
      padding: 6,
  },
  submitButton:{
      justifyContent: 'center',
      alignSelf: 'center',
      backgroundColor: 'pink',
      width: 50,
      height: 40,
      scolor:'black',
  },
  buttonText: {
      textAlign: 'center',
      color: 'white',
      fontWeight: 'bold',
      color:'black',
  }
});
