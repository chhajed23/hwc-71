import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import readStory from './screens/readStory';
import writeStory from './screens/writeStory';

export default class App extends React.Component {
  render(){
  return (
   <AppContainer/>
  );
  }
}
const tabNavigator=createBottomTabNavigator({
  WriteStory:{screen:writeStory},
  ReadStory:{screen:readStory}
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({}) => {
      const routeName = navigation.state.routeName;
      if (routeName === "WriteStory") {
        return(
          <Image
          style={{
            height:40,
            width:40,
          }}
          source={require("./assets/write.png")}/>
        )
      } 
      else if (routeName === "ReadStory"){
        return(
          <Image
          style={{
            height:40,
            width:40,
          }}
          source={require("./assets/read.png")}/>
        )
      }
    },
  }),
}
);

const AppContainer=createAppContainer(tabNavigator);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
