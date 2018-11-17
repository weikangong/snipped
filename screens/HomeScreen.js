import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Animated
} from 'react-native';
import SwipeCards from '../components/SwipeCards';
import Card from '../components/Card';
import NoMoreCards from '../components/NoMoreCards';
import Logo from '../assets/logo.png';
import * as Animatable from 'react-native-animatable';

import WomenInTech from '../assets/images/womenintech.jpeg';
import KentRidgeHall from '../assets/images/kentridgehall.jpeg';
import Oweek from '../assets/images/oweek.jpeg';
import SocPizza from '../assets/images/socpizza.jpeg';
import ArtsWeek from '../assets/images/artsweek.jpeg';
import Cactus from '../assets/images/cactus.jpeg';
import RagFlag from '../assets/images/ragflag.jpeg';
import RC4 from '../assets/images/rc4openday.jpeg';
import OpenDay from '../assets/images/openday.jpeg';


const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

const cards = [
  {
    key: 0,
    title: 'Women in Tech Asia',
    image: WomenInTech,
    subtitle: 'Meet other women just like you!',
    going: 'Janet Wong, Christina Choo and 98 others are also going',
    date: 'Sat, 19 Jan 2019',
    time: '10:00 AM - 2:00 PM GMT+8',
    location: 'BLK71',
    address: '71 Ayer Rajah Crescent, #02-01, Singapore 139951',
    description: 'Connect and network with women who thrived in Singapores Tech scene. Meet influential speakers from companies such as Grab, 99.co and Lazada',
  },
  {
    key: 1,
    title: 'Kent Ridge Hall Production',
    image: KentRidgeHall,
    subtitle: 'Watch amazing performances set up by your hall mates!',
    going: 'Yu Xuan, Kai Sing and 47 others are also going',
    date: 'Sat, 6 Feb 2018',
    time: '7:00 PM - 10:00 PM GMT+8',
    location: 'Kent Ridge Hall',
    address: '10 Heng Mui Keng Terrace, Singapore 119617',
    description: 'Dance, sing and party! Come watch your fellow hall mates perform and showcase their talents '
  },
  {
    key: 2,
    title: 'Faculty of Engineering Orientation Week',
    image: Oweek,
    subtitle: 'Ease the transition, get to know your peers!',
    going: 'Jerron Lim, Chang Jie and 48 others are also going',
    date: 'Sat, 29 Jan 2018',
    time: '10:00 AM - 9:00 PM GMT+8',
    location: 'Engineering Auditorium 6',
    address: 'Blk EA, 9 Engineering Drive 1, 06-10, Singapore 117575',
    description: 'Get to know your batchmates and seniors through fun activites and games! '
  },
  {
    key: 3,
    title: 'SoC Pizza Party',
    image: SocPizza,
    subtitle: 'Cause who doesnt love pizza',
    going: 'Dhruv, Wei Kang and 8 others are also going',
    date: 'Tue, 4 Jan 2018',
    time: '5:00 PM - 7:00 PM GMT+8',
    location: 'NUS School of Computing',
    address: 'NUS School of Computing, COM1, 13 Computing Drive, Singapore 117417',
    description: 'Connect over some good-ol pizza and drinks'
  },
  {
    key: 4,
    title: 'Art and Design Week',
    image: ArtsWeek,
    subtitle: 'Showcase of Singapores talented artists',
    going: 'Kaci Lee, Laurie Khoo and 54 others are also going',
    date: 'Sat, 17 Jan 2018',
    time: '10:00 AM - 5:00 PM GMT+8',
    location: 'LASALLE College of the Arts',
    address: '1 McNally St, Singapore 187940',
    description: 'The Art and Design Week honors our cityís rich design culture and celebrates our status as a global design capital.'
  },
  {
    key: 5,
    title: 'CAC+US!',
    image: Cactus,
    subtitle: 'Music and Dance concert proudly presented by NUS students',
    going: 'Jason Lee, Christian and 132 others are also going',
    date: 'Sat, 2 Feb 2018',
    time: '6:00 PM - 9:00 PM GMT+8',
    location: 'Lee Kong Chian Natural History Museum',
    address: '2 Conservatory Dr, Singapore 117377',
    description: 'Cultural Activties Club plus US (CAC+US) is NUS CACís largest annual Music and Dance concert featuring all 11 of its subsidary clubs, ranging from the traditional to modern cultural performing arts.'
  },
  {
    key: 6,
    title: 'Rag & Flag 2019',
    image: RagFlag,
    subtitle: 'Charity project, donation drives, its time to give back to the community!',
    going: 'Jane Jackson, Nicholas Lam and 102 others are also going',
    date: 'Sat, 23 Feb 2018',
    time: '10:00 AM - 5:00 PM GMT+8',
    location: 'University Town',
    address: '2 College Ave West',
    description: 'NUSSU Rag and Flag is an annual charity project featured prominently in the National University of Singapore Students Union Freshmen Orientation Programme.'
  },
  {
    key: 7,
    title: 'Residential College 4 Open Day',
    image: RC4,
    subtitle: 'Take a look at what RC4 has to offer!',
    going: 'Tom, Laura Lee and 48 others are also going',
    date: 'Sat, 19 Sep 2018',
    time: '10:00 AM - 5:00 PM GMT+8',
    location: 'Residential College 4',
    address: '6 College Avenue East, #01-01, University Town, National University of Singapore, Singapore 138614',
    description: 'This Open Day, the highlight of your visit to our college will be a personalized and interactive tour of our college and its facilities'
  },
  {
    key: 8,
    title: 'NUS Open Day',
    image: OpenDay,
    subtitle: 'Learn more about NUS and find the right course for you',
    going: 'Jonathan Tan, Clara and 158 others are also going',
    date: 'Sat, 19 Sep 2018',
    time: '10:00 AM - 5:00 PM GMT+8',
    location: 'University Town',
    address: '2 College Ave West',
    description: 'Come down to find out more about NUS! There will be booths to learn about your intended major. Professors, lecturers, staff, and students will all be around to answer all of your burning questions and share about their respective fields'
  },
]

const cards2 = [
  {
    key: 10,
    title: 'Rag & Flag 2019',
    image: RagFlag,
    subtitle: 'Charity project, donation drives, its time to give back to the community!',
    going: 'Jane Jackson, Nicholas Lam and 102 others are also going',
    date: 'Sat, 23 Feb 2018',
    time: '10:00 AM - 5:00 PM GMT+8',
    location: 'University Town',
    address: '2 College Ave West',
    description: 'NUSSU Rag and Flag is an annual charity project featured prominently in the National University of Singapore Students Union Freshmen Orientation Programme.'
  },
  {
    key: 11,
    title: 'Residential College 4 Open Day',
    image: RC4,
    subtitle: 'Take a look at what RC4 has to offer!',
    going: 'Tom, Laura Lee and 48 others are also going',
    date: 'Sat, 19 Sep 2018',
    time: '10:00 AM - 5:00 PM GMT+8',
    location: 'Residential College 4',
    address: '6 College Avenue East, #01-01, University Town, National University of Singapore, Singapore 138614',
    description: 'This Open Day, the highlight of your visit to our college will be a personalized and interactive tour of our college and its facilities'
  },
  {
    key: 12,
    title: 'NUS Open Day',
    image: OpenDay,
    subtitle: 'Learn more about NUS and find the right course for you',
    going: 'Jonathan Tan, Clara and 158 others are also going',
    date: 'Sat, 19 Sep 2018',
    time: '10:00 AM - 5:00 PM GMT+8',
    location: 'University Town',
    address: '2 College Ave West',
    description: 'Come down to find out more about NUS! There will be booths to learn about your intended major. Professors, lecturers, staff, and students will all be around to answer all of your burning questions and share about their respective fields'
  },
]

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      cards: cards,
      outOfCards: false,
      showSignedUpBar: false,
      signedUpBarText: ''
    }
  }

  handleYup = (card) => {
    console.log("yup")
  }

  handleNope = (card) => {
    console.log("nope")
  }

  handleMaybe = (card) => {
    console.log(`Maybe for ${card.text}`)
  }

  cardRemoved = (index) => {
    console.log(`The index is ${index}`);

    let CARD_REFRESH_LIMIT = 3

    if (this.state.cards.length - index <= CARD_REFRESH_LIMIT + 1) {
      console.log(`There are only ${this.state.cards.length - index - 1} cards left.`);

      if (!this.state.outOfCards) {
        console.log(`Adding ${cards2.length} more cards`)

        this.setState({
          cards: this.state.cards.concat(cards2),
          outOfCards: true
        })
      }
    }
  }

  renderSignedUpBar = () => {
    console.log('renderSignedUpBar', this.state.signedUpBarText)
    return (
      <View>
      {
        this.state.signedUpBarText !== '' &&
        <Animatable.View
          style={styles.signedUp}
          ref={ref => (this.SignedUpBar = ref)}
          animation="slideInUp"
          duration={100}
        >
          <Text style={styles.signedUpText} numberOfLines={1}>{`You signed up for ${this.state.signedUpBarText}`}</Text>
          <TouchableWithoutFeedback onPress={this.onUndo}>
            <View>
              <Text style={styles.signedUpButton}>{'UNDO'}</Text>
            </View>
          </TouchableWithoutFeedback>
        </Animatable.View>
      }
      </View>
    );
  }

  toggleSignedUpBarOn = (title = '') => {
    this.setState({ showSignedUpBar: true, signedUpBarText: title });
  }

  toggleSignedUpBarOff = () => {
    this.setState({ showSignedUpBar: false, signedUpBarText: '' });
  }

  onUndo = () => {
    this.swiper._goToPrevCard();
    this.toggleSignedUpBarOff();
  }

  render() {
    return (
      <View style={styles.cardContainer}>
        <View style={{flex: 1}}>
          <View style={styles.logo}>
            <Image style={styles.image} source={Logo} />
          </View>
          <SwipeCards
            ref={(swiper) => this.swiper = swiper}
            cards={this.state.cards}
            loop={true}
            stack={true}
            renderCard={(cardData) => <Card toggleSignedUpBarOn={this.toggleSignedUpBarOn} toggleSignedUpBarOff={this.toggleSignedUpBarOff} swiper={this.swiper} {...cardData} />}
            renderNoMoreCards={() => <NoMoreCards />}
            smoothTransition={true}

            showYup={true}
            handleYup={this.handleYup}
            yupText={'Maybe'}
            yupStyle={styles.yupStyle}
            yupTextStyle={styles.yupTextStyle}

            showNope={true}
            handleNope={this.handleNope}
            nopeText={'Nope'}
            nopeStyle={styles.nopeStyle}
            nopeTextStyle={styles.nopeTextStyle}

            showMaybe={true}
            handleMaybe={this.handleMaybe}
            maybeText={'Sign up'}
            hasMaybeAction={true}
            maybeStyle={styles.maybeStyle}
            maybeTextStyle={styles.maybeTextStyle}

            dragY={true}
            cardRemoved={this.cardRemoved}

            stackOffsetX={10}
            onClickHandler={() => {return null}}
          />
          {this.state.showSignedUpBar && this.renderSignedUpBar()}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    height: WINDOW_HEIGHT/18,
    width: WINDOW_WIDTH/2,
    resizeMode: 'contain',
  },
  logo: {
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 10
  },
  nopeTextStyle:{
    fontFamily: 'Avenir',
    fontSize: 30,
    fontWeight: "700",
    color: 'rgba(255, 0, 0, 0.7)',
  },
  yupTextStyle:{
    fontFamily: 'Avenir',
    fontSize: 30,
    fontWeight: "700",
    color: 'rgba(55, 188, 97, 1)',
  },
  maybeTextStyle:{
    fontFamily: 'Avenir',
    fontSize: 30,
    fontWeight: "700",
    color: 'rgba(0, 153, 255, 1)',
  },
  nopeStyle: {
    borderColor: 'rgba(255, 0, 0, 0.7)',
    borderWidth: 5,
    position: 'absolute',
    left: 15,
    bottom: WINDOW_HEIGHT/3,
    padding: 15,
    borderRadius: 100,
    elevation: 99,
    width: 180,
    alignItems: 'center',
    backgroundColor: 'rgba(255, 0, 0, 0.4)',
  },
  yupStyle: {
    borderColor: 'rgba(55, 188, 97, 1)',
    borderWidth: 5,
    borderRadius: 10,
    position: 'absolute',
    right: 15,
    bottom: WINDOW_HEIGHT/3,
    padding: 15,
    borderRadius: 100,
    elevation: 99,
    width: 180,
    alignItems: 'center',
    backgroundColor: 'rgba(55, 188, 97, 0.4)',
  },
  maybeStyle: {
    borderColor: 'rgba(0, 153, 255, 1)',
    borderWidth: 5,
    position: 'absolute',
    left: WINDOW_WIDTH/4,
    bottom: WINDOW_HEIGHT/2,
    padding: 15,
    borderRadius: 100,
    elevation: 99,
    width: 180,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 153, 255, 0.4)',
  },
  signedUp: {
    backgroundColor: "#292929",
    height: 50,
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  signedUpText: {
    flex: 1,
    padding: 16,
    fontSize: 14,
    height: 50,
    color: 'white',
  },
  signedUpButton: {
    paddingTop: 16,
    paddingRight: 16,
    color: 'rgba(255, 225, 136, 1)',
    height: 50,
    fontWeight: '700',
    fontSize: 14,
    width: 60
  },
});
