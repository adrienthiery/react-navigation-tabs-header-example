/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, Button, StyleSheet, Text, View} from 'react-native';

type Props = {};
export default class Tab2 extends Component<Props> {
  static navigationOptions = {
    title: 'Tab2',
    headerStyle: {
        backgroundColor: 'orange',
        borderBottomWidth: 0,
        elevation: 0,
    },
    headerTintColor: 'pink',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Button onPress={() => this.props.navigation.navigate('Tab1')} title="Go to tab1" />
        <Button onPress={() => this.props.navigation.navigate('Test')} title="Go to test" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
