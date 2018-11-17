import React from 'react';
import {
  ScrollView,
  Image,
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  ActivityIndicator
} from 'react-native';
import Dialog, { SlideAnimation, DialogContent, DialogTitle, DialogButton } from 'react-native-popup-dialog';
import Vishnu from '../assets/images/Vishnu.jpg';
import Yushi from '../assets/images/Yushi.jpg';
import Kaising from '../assets/images/Kaising.jpg';
import Weikang from '../assets/images/Weikang.jpg';
import Himawan from '../assets/images/Himawan.jpg';
import Mitchell from '../assets/images/Mitchell.jpg';

import KentRidgeHall from '../assets/images/kentridgehall.jpeg';
import Oweek from '../assets/images/oweek.jpeg';
import SocPizza from '../assets/images/socpizza.jpeg';
import RC4 from '../assets/images/rc4openday.jpeg';

import { Ionicons } from '@expo/vector-icons';

import { Cards } from '../components/Card.js'

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    header: null,
    isLoading: false
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
    this.setState({ isRematch: !this.state.isRematch, isLoading: !this.state.isLoading });
    if (this.loaderTimeout != undefined) clearTimeout(this.loaderTimeout);
    this.loaderTimeout = setTimeout(() => { this.setState({ isLoading: !this.state.isLoading }) }, 2000);
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
         <Text style={styles.bigHeader}>Your events</Text>
        </View>
        <View>
          <Text style={styles.header}>Match now!</Text>
        </View>
        <TouchableWithoutFeedback onPress={this.toggleModal}>
          <View style={styles.card}>
            <View style={styles.eventImageContainer}>
              <Image style={styles.eventImage} source={KentRidgeHall} />
            </View>
            <View>
              <View>
                <Text style={styles.subtext}>Kent Ridge Hall Production</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={{width: 30, height: 30}}>
                  <Ionicons name="md-person" size={24} color="grey" />
                </View>
                <View>
                  <Text style={styles.subtext1}>Bruce Lee is also going</Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={this.toggleModal}>
          <View style={styles.card}>
            <View>
              <View style={styles.eventImageContainer}>
                <Image style={styles.eventImage} source={Oweek} />
              </View>
            </View>
            <View>
              <View>
                <Text style={styles.subtext}>Faculty of Engineering Orientation Week</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={{width: 30, height: 30}}>
                  <Ionicons name="md-person" size={24} color="grey" />
                </View>
                <View>
                  <Text style={styles.subtext1}>Jonathan Tan is also going</Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
         <Text style={styles.header}>Matched</Text>
        <TouchableWithoutFeedback onPress={this.toggleModal}>
          <View style={styles.card}>
            <View>
              <View style={styles.eventImageContainer}>
                <Image style={styles.eventImage} source={SocPizza} />
              </View>
            </View>
            <View>
              <View>
                <Text style={styles.subtext}>SoC Pizza Party</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={{width: 30, height: 30}}>
                  <Ionicons name="md-people" size={24} color="grey" />
                </View>
                <View>
                  <Text style={styles.subtext1}>Matched: Sheryl Lim and Clara Tan</Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={this.toggleModal}>
          <View style={styles.card}>
            <View style={styles.eventImageContainer}>
              <Image style={styles.eventImage} source={RC4} />
            </View>
            <View>
              <View>
                <Text style={styles.subtext}>Residential College 4 Open Day</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={{width: 30, height: 30}}>
                  <Ionicons name="md-people" size={24} color="grey" />
                </View>
                <View>
                  <Text style={styles.subtext1}>Matched: Jerron Lim and Cherry Wee</Text>
                </View>
              </View>
            </View>
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
          <DialogTitle textStyle={styles.plaintext} style={styles.dialogTitle} title={this.state.isLoading ? 'Finding your people' : 'You got three matches!'} />
          <View style={styles.dialogContentContainer}>
            {
              !this.state.isRematch && !this.state.isLoading &&
              <View>
                <View style={styles.leftImageContainer}>
                  <Image style={styles.image} source={Vishnu} />
                </View>

                <View style={styles.rightImageContainer}>
                  <Image style={styles.image} source={Kaising} />
                </View>

                <View style={styles.middleImageContainer}>
                  <Image style={styles.image} source={Weikang} />
                </View>

                <View style={styles.matchTitleContainer}>
                  <Text style={styles.matchTitle}>We found these people that are just like you, now go on. Make that move.</Text>
                </View>
              </View>
            }
            {
              this.state.isRematch && !this.state.isLoading &&
              <View>
                <View style={styles.leftImageContainer}>
                  <Image style={styles.image} source={Yushi} />
                </View>

                <View style={styles.rightImageContainer}>
                  <Image style={styles.image} source={Himawan} />
                </View>

                <View style={styles.middleImageContainer}>
                  <Image style={styles.image} source={Weikang} />
                </View>

                <View style={styles.matchTitleContainer}>
                  <Text style={styles.matchTitle}>We found more people that are just like you. Time to socialize?</Text>
                </View>
              </View>
            }
            {
              this.state.isLoading &&
              <View style={styles.loaderContainer}>
                <ActivityIndicator size="large" color='rgba(63, 63, 191, 1)' />
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
  bigHeader:{
    fontFamily: 'Avenir',
    fontSize: 40,
    lineHeight: 50,
    paddingBottom: 20,
    fontWeight: '700'
  },
  header: {
    fontFamily: 'Avenir',
    fontSize: 20,
    lineHeight: 25,
    paddingBottom: 20,
    paddingTop: 30
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
    fontWeight: '700'
  },
  subtext1: {
    alignItems: 'flex-start',
    flex: 1,
    fontFamily: 'Avenir',
    fontSize: 16,
    lineHeight: 25,
    fontWeight: '500',
    width: '100%',
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
    height: 120,
    width: 120,
    borderRadius: 60
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
  eventImageContainer: {
    height: 50,
    width: 50,
    borderRadius: 100,
    marginRight: 12
  },
  eventImage: {
    height: 50,
    width: 50,
    borderRadius: 25
  },
  loaderContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
  }
});
