import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createAppContainer,  createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs' 
import WriteStoryScreen from './screens/WriteStoryScreen'
import ReadStoryScreen from './screens/ReadStoryScreen'
import LogInScreen from './screens/LogInScreen'

export default class App extends React.Component {
  render(){
    return(
      <AppContainer />
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Write: {screen: WriteStoryScreen},
  ReadStory: {screen: ReadStoryScreen}
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      
      if(routeName === "Write"){
        return(
          <Image
          source={require("./assets/write.png")}
          style={{width:40, height:40}}
        />
        )
        
      }
      else if(routeName === "ReadStory"){
        return(
          <Image
          source={require("./assets/read.png")}
          style={{width:40, height:40}}
        />)
        
      }
    }
  })
}
  )

  const switchNavigator= createSwitchNavigator({
    LogInScreen: {screen: LogInScreen},
    TabNavigator: {screen: TabNavigator}
    }) 
    const AppContainer =  createAppContainer(switchNavigator);
    
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});