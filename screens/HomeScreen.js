import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import SwipeCards from 'react-native-swipe-cards';
import Card from '../components/Card';
import NoMoreCards from '../components/NoMoreCards';
import Logo from '../assets/logo.png';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

const cards = [
  {
    key: 0,
    title: 'Women in Tech Asia',
    image: 'https://media.giphy.com/media/GfXFVHUzjlbOg/giphy.gif',
    subtitle: 'Meet other women just like you!',
    going: 'Janet Wong, Christina Choo and 98 others are also going',
    date: 'Sat, 19 Sep 2018',
    time: '10:00 AM - 5:00 AM GMT+8',
    location: 'Engineering Auditorium 6',
    address: '2706 Martin Luther King Jr. Way, Berkeley CA 94703',
    description: ''
  },
  {
    key: 1,
    title: 'Kent Ridge Hall Production',
    image: 'https://media.giphy.com/media/irTuv1L1T34TC/giphy.gif',
    subtitle: '',
    going: 'Janet Wong, Christina Choo and 98 others are also going',
    date: 'Sat, 19 Sep 2018',
    time: '10:00 AM - 5:00 AM GMT+8',
    location: 'Engineering Auditorium 6',
    address: '2706 Martin Luther King Jr. Way, Berkeley CA 94703',
    description: ''
  },
  {
    key: 2,
    title: 'Faculty of Engineering Orientation Week',
    image: 'https://media.giphy.com/media/LkLL0HJerdXMI/giphy.gif',
    subtitle: '',
    going: 'Janet Wong, Christina Choo and 98 others are also going',
    date: 'Sat, 19 Sep 2018',
    time: '10:00 AM - 5:00 AM GMT+8',
    location: 'Engineering Auditorium 6',
    address: '2706 Martin Luther King Jr. Way, Berkeley CA 94703',
    description: ''
  },
  {
    key: 3,
    title: 'SoC Pizza Party',
    image: 'https://media.giphy.com/media/fFBmUMzFL5zRS/giphy.gif',
    subtitle: '',
    going: 'Janet Wong, Christina Choo and 98 others are also going',
    date: 'Sat, 19 Sep 2018',
    time: '10:00 AM - 5:00 AM GMT+8',
    location: 'Engineering Auditorium 6',
    address: '2706 Martin Luther King Jr. Way, Berkeley CA 94703',
    description: ''
  },
  {
    key: 4,
    title: 'Art and Design Week',
    image: 'https://media.giphy.com/media/oDLDbBgf0dkis/giphy.gif',
    subtitle: '',
    going: 'Janet Wong, Christina Choo and 98 others are also going',
    date: 'Sat, 19 Sep 2018',
    time: '10:00 AM - 5:00 AM GMT+8',
    location: 'Engineering Auditorium 6',
    address: '2706 Martin Luther King Jr. Way, Berkeley CA 94703',
    description: ''
  },
  {
    key: 5,
    title: 'CAC+US!',
    image: 'https://media.giphy.com/media/7r4g8V2UkBUcw/giphy.gif',
    subtitle: '',
    going: 'Janet Wong, Christina Choo and 98 others are also going',
    date: 'Sat, 19 Sep 2018',
    time: '10:00 AM - 5:00 AM GMT+8',
    location: 'Engineering Auditorium 6',
    address: '2706 Martin Luther King Jr. Way, Berkeley CA 94703',
    description: ''
  },
  {
    key: 6,
    title: 'Rag & Flag 2019',
    image: 'https://media.giphy.com/media/K6Q7ZCdLy8pCE/giphy.gif',
    subtitle: '',
    going: 'Janet Wong, Christina Choo and 98 others are also going',
    date: 'Sat, 19 Sep 2018',
    time: '10:00 AM - 5:00 AM GMT+8',
    location: 'Engineering Auditorium 6',
    address: '2706 Martin Luther King Jr. Way, Berkeley CA 94703',
    description: ''
  },
  {
    key: 7,
    title: 'Residential College 4 Open Day',
    image: 'https://media.giphy.com/media/hEwST9KM0UGti/giphy.gif',
    subtitle: 'Janet Wong, Christina Choo and 98 others are also going',
    going: 'Janet Wong, Christina Choo and 98 others are also going',
    date: 'Sat, 19 Sep 2018',
    time: '10:00 AM - 5:00 AM GMT+8',
    location: 'Engineering Auditorium 6',
    address: '2706 Martin Luther King Jr. Way, Berkeley CA 94703',
    description: ''
  },
  {
    key: 8,
    title: 'NUS Open Day',
    image: 'https://media.giphy.com/media/3oEduJbDtIuA2VrtS0/giphy.gif',
    subtitle: '',
    going: 'Janet Wong, Christina Choo and 98 others are also going',
    date: 'Sat, 19 Sep 2018',
    time: '10:00 AM - 5:00 AM GMT+8',
    location: 'Engineering Auditorium 6',
    address: '2706 Martin Luther King Jr. Way, Berkeley CA 94703',
    description: ''
  },
]

const cards2 = [
  {title: '10', image: 'https://media.giphy.com/media/12b3E4U9aSndxC/giphy.gif'},
  {title: '11', image: 'https://media4.giphy.com/media/6csVEPEmHWhWg/200.gif'},
  {title: '12', image: 'https://media4.giphy.com/media/AA69fOAMCPa4o/200.gif'},
  {title: '13', image: 'https://media.giphy.com/media/OVHFny0I7njuU/giphy.gif'},
]

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      cards: cards,
      outOfCards: false
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

  render() {
    return (
      <View style={styles.cardContainer}>
        <View style={styles.logo}>
          <Image style={styles.image} source={Logo} />
        </View>
        <View style={{flex: 1}}>
          <SwipeCards
            cards={this.state.cards}
            loop={true}
            stack={true}
            renderCard={(cardData) => <Card {...cardData} />}
            renderNoMoreCards={() => <NoMoreCards />}

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
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    backgroundColor: 'rgba(255, 225, 136, 0.7)'
  },
  image: {
    flex: 1,
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginTop: 15
  } ,
  logo: {
    alignItems: 'center',
    width: WINDOW_WIDTH,
    height: 80,
    padding: 15
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
    backgroundColor: 'rgba(255, 0, 0, 0.2)',
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
    backgroundColor: 'rgba(55, 188, 97, 0.3)',
  },
  maybeStyle: {
    borderColor: 'rgba(0, 153, 255, 1)',
    borderWidth: 5,
    position: 'absolute',
    left: WINDOW_WIDTH/5,
    bottom: WINDOW_HEIGHT/1.3,
    padding: 15,
    borderRadius: 100,
    elevation: 99,
    width: 180,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 153, 255, 0.2)',
  }
});
