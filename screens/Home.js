import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

class Home extends Component {
  constructor(props) {
    super(props)

    this.handlePress = this.handlePress.bind(this)
  }

  static navigationOptions = {
    header: null
  }

  handlePress () {
    this.props.navigation.navigate('Teal')
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Button 
            onPress={this.handlePress}
            title='Teal'
            style={{fontSize: 48}} />
        </View>
        <View style={styles.middle}>
          <Text style={styles.middleText}>green</Text>
        </View>
        <View style={styles.bottom}>
          <Text style={styles.bottomText}>pink</Text>
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
  middle: {
    flex: 1,
    backgroundColor: green,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  bottom: {
    flex: 1,
    backgroundColor: pink,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  topText: {
    color: 'white',
    fontSize: 48
  },
  middleText: {
    color: 'black',
    fontSize: 44
  },
  bottomText: {
    color: 'white',
    fontSize: 80
  }
});

export default Home