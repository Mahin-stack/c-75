import React from 'react';
import {View, StyleSheet, Text, TextInput, Alert, KeyboardAvoidingView, Image, TouchableOpacity} from 'react-native';
import db from '../config'
import firebase from 'firebase';

export default class LogInScreen extends React.Component{
    constructor(){
        super()
        this.state={
            email: '',
            password: '',
        }
    }
    LogIn= async(email, password)=>{
    if(email && password){
        try{
          const response= await firebase.auth().signInWithEmailAndPassword(email, password);
         if(response){
            this.props.navigation.navigate('Write')
         }
        }
        catch(error){
            switch(error.code){
                case 'User Not Found' :
                Alert.alert('User Doesnt exist')
                break;
                case 'Invalid Email':
                Alert.alert('Incorrect Email Or Password')
            }
        }
    }
    else{
        Alert.alert('Pls Enter The EmailId Again')
    }
    }
    render(){
        return(
            <KeyboardAvoidingView style={{alignItems: "center", marginTop: 50}}>
            <View>
                <Image
                source={require('../assets/img.jpg')}
                style={{width: 200, height: 200}}
                />
                <Text style={{textAlign: "center", fontSize:30}}>BedTimeStories !</Text>
            </View>
  
            <View>
                <TextInput
                style={styles.inputBox}
                placeholder= 'Enter the Email Id'
                keyboardType= 'email-address'
                onChangeText={(text)=>{
                this.setState({
                    email: text
                })
                }}
                />
            </View>

            <View>
                <TextInput
                style={styles.inputBox}
                placeholder= 'Enter the password'
                secureTextEntry={true} 
                onChangeText={(text)=>{
                    this.setState({
                        password: text
                    })
                }}
                />
            </View>

            <View>
            <TouchableOpacity style={{height: 30, width: 90, borderWidth: 2, marginTop: 20, padding: 5, borderRadius: 10}}
            onPress={()=>{
            this.LogIn(this.state.email, this.state.password)
            }}
            >
                <Text>LogIn </Text>
            </TouchableOpacity>
            </View>
            </KeyboardAvoidingView>
        )
    }
}
const styles = StyleSheet.create({
    inputBox:{
        width: 200,
        height: 40,
        borderWidth: 1.5,
        borderRightWidth: 0,
        fontSize: 20
    }
    })
    