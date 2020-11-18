import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import db from '../config.js'

export default class ReadStoryScreen extends React.Component{
  constructor(){
    super()
    this.state={
      allStories=[],
    }
  }
   componentDidMount(){
     this.retriveStories()
   }
   retriveStories=()=>{
     try {
      var allStories=[],
      var story=db.collection('newStory').get().then((querySnap)=>{
        querySnap.forEach((doc)=>{
          allStories.push(doc.data())
          console.log('this are the stories',allStories)
        })
        this.setState({allStories})
      }) 
     }
     catch (err){
console.log(err)
     }
   }
  render(){
  return (
    <View>
    <FlatList
       data={this.state.allStories}
       renderItem={({ item }) => (
         <View style={styles.itemContainer}>
           <Text>Title: {item.title}</Text>
       <Text>Author : {item.author}</Text>
         </View>
       )}
       keyExtractor={(item, index) => index.toString()}
       />
</View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },item: {
    backgroundColor: 'pink',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
   itemContainer: {
    height: 80,
    width:'100%',
    borderWidth: 2,
    borderColor: 'pink',
    justifyContent: 'center',
    alignSelf: 'center',
  }
});