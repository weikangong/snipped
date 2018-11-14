import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import SwipeCards from 'react-native-swipe-cards';
import Card from '../components/Card';
import NoMoreCards from '../components/NoMoreCards';

const cards = [
  {title: 'Women in Tech Asia', image: 'https://media.giphy.com/media/GfXFVHUzjlbOg/giphy.gif'},
  {title: 'Kent Ridge Hall Production', image: 'https://media.giphy.com/media/irTuv1L1T34TC/giphy.gif'},
  {title: 'Faculty of Engineering Orientation Week', image: 'https://media.giphy.com/media/LkLL0HJerdXMI/giphy.gif'},
  {title: 'SoC Pizza Party', image: 'https://media.giphy.com/media/fFBmUMzFL5zRS/giphy.gif'},
  {title: 'Art and Design Week', image: 'https://media.giphy.com/media/oDLDbBgf0dkis/giphy.gif'},
  {title: 'CAC+US!', image: 'https://media.giphy.com/media/7r4g8V2UkBUcw/giphy.gif'},
  {title: 'Rag & Flag 2019', image: 'https://media.giphy.com/media/K6Q7ZCdLy8pCE/giphy.gif'},
  {title: 'Residential College 4 Open Day', image: 'https://media.giphy.com/media/hEwST9KM0UGti/giphy.gif'},
  {title: 'NUS Open Day', image: 'https://media.giphy.com/media/3oEduJbDtIuA2VrtS0/giphy.gif'},
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
      <SwipeCards
        cards={this.state.cards}
        loop={false}
        renderCard={(cardData) => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}
        showYup={true}
        showNope={true}
        showMaybe={true}
        hasMaybeAction={true}
        handleYup={this.handleYup}
        yupText={'Interested'}
        handleNope={this.handleNope}
        nopeText={'Not Interested'}
        handleMaybe={this.handleMaybe}
        maybeText={'Sign up!'}
        cardRemoved={this.cardRemoved}
      />
    )
  }
}

const styles = StyleSheet.create({

});
