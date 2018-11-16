import React from 'react';
import {
  ScrollView,
  Image,
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback
} from 'react-native';
import Dialog, { SlideAnimation, DialogContent, DialogTitle, DialogButton } from 'react-native-popup-dialog';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      openModal: false
    }
  }

  openModal = () => {
    this.setState({ openModal: !this.state.openModal });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
         <Text style={styles.header}>Your events</Text>
        </View>
        <View>
          <Text style={styles.header}>Match now!</Text>
        </View>
        <TouchableWithoutFeedback onPress={this.openModal}>
          <View style={styles.card}>
            <View>
              <Image style={styles.img} source={{uri: 'https://media.giphy.com/media/GfXFVHUzjlbOg/giphy.gif'}} />
            </View>
            <Text style={styles.subtext}>Kent Ridge Hall Production</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={this.openModal}>
          <View style={styles.card}>
            <View>
              <Image style={styles.img} source={{uri: 'https://media.giphy.com/media/GfXFVHUzjlbOg/giphy.gif'}} />
            </View>
            <Text style={styles.subtext}>Kent Ridge Hall Production</Text>
          </View>
        </TouchableWithoutFeedback>
         <Text style={styles.header}>Matched</Text>
        <TouchableWithoutFeedback onPress={this.openModal}>
          <View style={styles.card}>
            <View>
              <Image style={styles.img} source={{uri: 'https://media.giphy.com/media/GfXFVHUzjlbOg/giphy.gif'}} />
            </View>
            <Text style={styles.subtext}>Kent Ridge Hall Production</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={this.openModal}>
          <View style={styles.card}>
            <View>
              <Image style={styles.img} source={{uri: 'https://media.giphy.com/media/GfXFVHUzjlbOg/giphy.gif'}} />
            </View>
            <Text style={styles.subtext}>Kent Ridge Hall Production</Text>
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.dialogContainer}>
          <Dialog
            key = {Object.keys(this.props)}
            visible={this.state.openModal}
            dialogAnimation={new SlideAnimation({
              slideFrom: 'bottom',
            })}
            actions={[
              <DialogButton
                key={0}
                text="Rematch"
                onPress={this.openModal}
              />,
              <DialogButton
                key={1}
                text="Chat"
                onPress={this.openModal}
              />
            ]}
            width={WINDOW_WIDTH/1.2}
            height={WINDOW_HEIGHT/1.5}
            onTouchOutside={this.openModal}
            containerStyle={{ flex: 1 }}
          >
          <DialogTitle textStyle={styles.plaintext} style={styles.dialogTitle} title={'We found you three matches!'} />
          </Dialog>
          </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: 'rgba(255, 225, 136, 0.7)'
  },
  header: {
    fontFamily: 'Avenir',
    fontSize: 30,
    lineHeight: 40,
    paddingBottom: 20
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    elevation: 3,
    shadowColor: '#000000',
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowOffset: {
        height: 1,
        width: 0
    },
    marginBottom: 10
  },
  subtext: {
    fontFamily: 'Avenir',
    fontSize: 16,
    lineHeight: 25,
  },
  img: {
    marginRight: 10,
    width: 48,
    height: 48,
    borderRadius: 24,
    overflow: 'hidden'
  },
  dialogContainer: {
    flex: 1,
    height: WINDOW_HEIGHT/2,
    width: WINDOW_WIDTH/3,
  },
});
