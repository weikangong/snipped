import React from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import Dialog, { SlideAnimation, DialogContent, DialogTitle, DialogButton } from 'react-native-popup-dialog';
import { Ionicons } from '@expo/vector-icons';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

const Header = {
  fontSize: "20px"
}

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleEventDetails: false
    }
  }

  toggleEventDetails = () => {
    this.setState({ toggleEventDetails: !this.state.toggleEventDetails });
  }

  render() {
    return (
      <TouchableOpacity onPress={this.toggleEventDetails}>
        <View style={styles.card}>
          <Image style={styles.top} source={{uri: this.props.image}} />
          <View style={styles.bottom}>
            <View>
              <Text style={styles.header}> {this.props.title} </Text>
            </View>
            <View>
              <Text style={styles.subtitle}> this is subtitle </Text>
            </View>

            <View style={styles.infoRow}>
              <View style={{width: 30, height: 30}}>
                <Ionicons name="md-person" size={24} color="grey" />
              </View>
              <View>
                <Text style={styles.subtext}>Janet Wong, Christina Choo and 98 others are also going</Text>
              </View>
            </View>

            <View style={styles.infoRow}>
              <View style={{width: 30, height: 30}}>
                <Ionicons name="md-calendar" size={24} color="grey" />
              </View>
              <View>
                <Text style={styles.subtext}>Sat, 19 Sep 2018</Text>
                <Text style={styles.greysubtext}>10:00 AM - 5:00 AM GMT+8</Text>
                <Text style={styles.link}>Add to Calendar</Text>
              </View>
            </View>

            <View style={styles.infoRow}>
              <View style={{width: 30, height: 30}}>
                <Ionicons name="md-pin" size={24} color="grey" />
              </View>
              <View>
                <Text style={styles.subtext}>Engineering Auditorium 6</Text>
                <Text style={styles.greysubtext}>2706 Martin Luther King Jr. Way, Berkeley CA 94703</Text>
              </View>
            </View>

          </View>
        </View>
        <Dialog
          visible={this.state.toggleEventDetails}
          dialogAnimation={new SlideAnimation({
            slideFrom: 'bottom',
          })}
          dialogTitle={<DialogTitle title={this.props.name} />}
          actions={[
            <DialogButton
              text="Close"
              onPress={this.toggleEventDetails}
            />
          ]}
        >
          <DialogContent>
          </DialogContent>
        </Dialog>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  infoBox: {
  },
  infoRow: {
    padding: 15,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  header: {
    fontFamily: 'Avenir',
    fontSize: 30,
    lineHeight: 50,
  },
  subtext: {
    fontFamily: 'Avenir',
    fontSize: 16,
    lineHeight: 25,
    paddingLeft: 5,
  },
  greysubtext: {
    fontFamily: 'Avenir',
    color: 'grey',
    fontSize: 16,
    lineHeight: 25,
    paddingLeft: 5,
  },
  link: {
    fontFamily: 'Avenir',
    color: '#0099CC',
    fontSize: 16,
    lineHeight: 25,
    paddingLeft: 5,
  },
  subtitle: {
    fontFamily: 'Avenir',
    fontSize: 14,
    lineHeight: 25,
    paddingLeft: 5,
  },
  card: {
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'white',
    borderWidth: 0,
    elevation: 1,
    width: WINDOW_WIDTH-50,
  },
  top: {
    width: WINDOW_WIDTH-50,
    height: WINDOW_HEIGHT/3.8,
  },
  bottom: {
    alignItems: 'flex-start',
    height: WINDOW_HEIGHT/2,
    width: '100%',
    padding: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
   },
});
