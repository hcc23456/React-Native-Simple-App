import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Header, CryptoList} from "./src/components";

export default class App extends React.Component {
  render() {
    return (
      //style inherits from header.js, etc
      <View> 
        <Header /> 
        <CryptoList />
      </View>
    );
  }
}