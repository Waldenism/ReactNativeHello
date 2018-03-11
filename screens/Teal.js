import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

class Teal extends Component {

  

  handlePress () {
    console.log('foo')
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.topText}> WELCOME TO CEPHALOPODA LAND </Text>
        </View>
      </View>
    );
  }

}

const teal = '#08C9C9'
const green = '#1EE709'
const pink = '#E50985'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  top: {
    flex: 1,
    backgroundColor: teal,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  topText: {
    color: 'white',
    fontSize: 48
  }
});

export default Teal