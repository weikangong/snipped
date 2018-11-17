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
import Vishnu from '../assets/images/Vishnu.jpg';
import Yushi from '../assets/images/Yushi.jpg';
import Kaising from '../assets/images/Kaising.jpg';
import Weikang from '../assets/images/Weikang.jpg';
import Himawan from '../assets/images/Himawan.jpg';
import Mitchell from '../assets/images/Mitchell.jpg';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
      isRematch: false
    }
  }

  toggleModal = () => {
    this.setState({ openModal: !this.state.openModal });
  }

  onRematch = () => {
    this.setState({ isRematch: !this.state.isRematch });
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
        <TouchableWithoutFeedback onPress={this.toggleModal}>
          <View style={styles.card}>
            <View>
              <Image style={styles.img} source={{uri: 'https://media.giphy.com/media/GfXFVHUzjlbOg/giphy.gif'}} />
            </View>
            <Text style={styles.subtext} numberOfLines={1}>Kent Ridge Hall Production</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={this.toggleModal}>
          <View style={styles.card}>
            <View>
              <Image style={styles.img} source={{uri: 'https://media.giphy.com/media/GfXFVHUzjlbOg/giphy.gif'}} />
            </View>
            <Text style={styles.subtext} numberOfLines={1}>Faculty of Engineering Orientation Week</Text>
          </View>
        </TouchableWithoutFeedback>
         <Text style={styles.header}>Matched</Text>
        <TouchableWithoutFeedback onPress={this.toggleModal}>
          <View style={styles.card}>
            <View>
              <Image style={styles.img} source={{uri: 'https://media.giphy.com/media/GfXFVHUzjlbOg/giphy.gif'}} />
            </View>
            <Text style={styles.subtext} numberOfLines={1}>SoC Pizza Party</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={this.toggleModal}>
          <View style={styles.card}>
            <View>
              <Image style={styles.img} source={{uri: 'https://media.giphy.com/media/GfXFVHUzjlbOg/giphy.gif'}} />
            </View>
            <Text style={styles.subtext} numberOfLines={1}>Residential College 4 Open Day</Text>
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.dialogContainer}>
          <Dialog
            key={Object.keys(this.props)}
            visible={this.state.openModal}
            dialogAnimation={new SlideAnimation({
              slideFrom: 'bottom',
            })}
            actions={[
              <DialogButton
                key={0}
                text="Rematch"
                onPress={this.onRematch}
              />,
              <DialogButton
                key={1}
                text="Chat"
                onPress={this.toggleModal}
              />
            ]}
            width={WINDOW_WIDTH/1.2}
            height={WINDOW_HEIGHT/1.5}
            onTouchOutside={this.toggleModal}
            containerStyle={{ flex: 1 }}
          >
          <DialogTitle textStyle={styles.plaintext} style={styles.dialogTitle} title={'You got three matches!'} />
          <View style={styles.dialogContentContainer}>
            {
              !this.state.isRematch ?
              <View>
                <View style={styles.leftImageContainer}>
                  <Image style={styles.image} source={Vishnu} />
                </View>

                <View style={styles.rightImageContainer}>
                  <Image style={styles.image} source={Kaising} />
                </View>

                <View style={styles.middleImageContainer}>
                  <Image style={styles.image} source={Yushi} />
                </View>

                <View style={styles.matchTitleContainer}>
                  <Text style={styles.matchTitle}>We found these people that are just like you, now go on. Make that move.</Text>
                </View>
              </View>
              :
              <View>
                <View style={styles.leftImageContainer}>
                  <Image style={styles.image} source={Weikang} />
                </View>

                <View style={styles.rightImageContainer}>
                  <Image style={styles.image} source={Himawan} />
                </View>

                <View style={styles.middleImageContainer}>
                  <Image style={styles.image} source={Mitchell} />
                </View>

                <View style={styles.matchTitleContainer}>
                  <Text style={styles.matchTitle}>We found more people that are just like you. Time to socialize?</Text>
                </View>
              </View>
            }
          </View>
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
    backgroundColor: 'white'
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
    flex: 1,
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
  dialogContentContainer: {
    flex: 1,
  },
  leftImageContainer: {
    position: 'absolute',
    left: WINDOW_WIDTH/10,
    top: WINDOW_WIDTH/10,
    height: 140,
    width: 140,
    borderRadius: 100,
  },
  middleImageContainer: {
    position: 'absolute',
    left: WINDOW_WIDTH/3.8,
    top: WINDOW_WIDTH/5,
    height: 140,
    width: 140,
    borderRadius: 100,
  },
  rightImageContainer: {
    position: 'absolute',
    right: WINDOW_WIDTH/12,
    top: WINDOW_WIDTH/10,
    height: 140,
    width: 140,
    borderRadius: 100,
  },
  image: {
    height: 130,
    width: 130,
    borderRadius: 100
  },
  matchTitleContainer: {
    position: 'absolute',
    padding: 30,
    alignSelf: 'center',
    top: WINDOW_WIDTH/1.5
  },
  matchTitle: {
    fontFamily: 'Avenir',
    fontSize: 18,
    lineHeight: 25,
  },
});
