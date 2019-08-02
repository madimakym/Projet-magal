import React from 'react';
import { Text } from 'react-native';
import { View } from 'native-base';
import Router from './components/Router';

export default class App extends React.Component {
  render() {
    return (
      <Router/>
      // <View>
      //   <Text>sss</Text>
      // </View>
    );
  }
}