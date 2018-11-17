import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';
import Logo from '../assets/logo.png';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.logoContainer}>
        <View style={styles.logo}>
          <Image style={styles.image} source={Logo} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  logo: {
    marginTop: 30,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  image: {
    height: WINDOW_HEIGHT/6,
    width: WINDOW_WIDTH/1.5,
    resizeMode: 'contain',
  },
});
