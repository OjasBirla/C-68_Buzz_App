import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation'

import Header from "./Component/Header";

import Fb from './Screens/Fb';
import In from './Screens/In';

export default class App extends React.Component {
  render() {
      return(
        <View style={{flex: 1, justifyContent: "center", alignContent: "center"}}>
          <Header />
          <AppContainer />
        </View>
      )
  }
}

const BottomTabNavigator = createBottomTabNavigator({
  "Facebook": Fb,
  "Instagram": In,
},
{
  tabBarOptions: {
    tabStyle: {
      marginTop: 10,
      marginBottom: 20,
    }
  }
})

const AppContainer = createAppContainer(BottomTabNavigator)