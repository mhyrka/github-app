import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class Splash extends Component  {
  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.title}>OfficePool</Text>
        <Text style={styles.subTitle}>Powered by React Native</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#6BF178',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  title: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold'
  },

  subTitle: {
    color: 'white',
    fontWeight: 'normal'
  }
})
