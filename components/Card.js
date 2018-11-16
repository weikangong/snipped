import React from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback
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
      <TouchableWithoutFeedback onPress={this.toggleEventDetails}>
        <View style={styles.shadow}>
          <View style={styles.card}>
            <Image style={styles.top} source={{uri: this.props.image}} />
            <View style={styles.bottom}>
              <View>
                <Text style={styles.header}>{this.props.title}</Text>
              </View>
              <View>
                <Text style={styles.subtitle}>{this.props.subtitle}</Text>
              </View>

              <View style={styles.infoRow}>
                <View style={{width: 30, height: 30}}>
                  <Ionicons name="md-person" size={24} color="grey" />
                </View>
                <View>
                  <Text style={styles.subtext}>{this.props.going}</Text>
                </View>
              </View>

              <View style={styles.infoRow}>
                <View style={{width: 30, height: 30}}>
                  <Ionicons name="md-calendar" size={24} color="grey" />
                </View>
                <View>
                  <Text style={styles.subtext}>{this.props.date}</Text>
                  <Text style={styles.greysubtext}>{this.props.time}</Text>
                  <Text style={styles.link}>Add to Calendar</Text>
                </View>
              </View>

              <View style={styles.infoRow}>
                <View style={{width: 30, height: 30}}>
                  <Ionicons name="md-pin" size={24} color="grey" />
                </View>
                <View>
                  <Text style={styles.subtext}>{this.props.location}</Text>
                  <Text style={styles.greysubtext}>{this.props.address}</Text>
                </View>
              </View>

            </View>
          </View>

          <View style={styles.dialogContainer}>
            <Dialog
              key = {Object.keys(this.props)}
              visible={this.state.toggleEventDetails}
              dialogAnimation={new SlideAnimation({
                slideFrom: 'bottom',
              })}
              actions={[
                <DialogButton
                  key = {0}
                  text="Close"
                  onPress={this.toggleEventDetails}
                />,
                <DialogButton
                  key = {1}
                  text="Sign up"
                  onPress={this.toggleEventDetails}
                />
              ]}
              width={WINDOW_WIDTH}
              height={WINDOW_HEIGHT}
              onTouchOutside={this.toggleEventDetails}
              containerStyle={{ flex: 1 }}
            >
              <DialogTitle textStyle={styles.plaintext} style={styles.dialogTitle} title={this.props.title} />
              <Image style={styles.dialogImg} source={{uri: this.props.image}} />
              <DialogContent>
                <View style={{paddingTop: 20}}>
                  <Text style={styles.subheader}>{this.props.title}</Text>
                </View>
                <View>
                  <Text style={styles.greysubtext}>by NUS Entrepreneur's Association</Text>
                </View>

                //copied from above, should probably extract this out
                <View style={styles.infoRow}>
                  <View style={{width: 30, height: 30}}>
                    <Ionicons name="md-person" size={24} color="grey" />
                  </View>
                  <View>
                    <Text style={styles.subtext}>{this.props.going}</Text>
                  </View>
                </View>

                <View style={styles.infoRow}>
                  <View style={{width: 30, height: 30}}>
                    <Ionicons name="md-calendar" size={24} color="grey" />
                  </View>
                  <View>
                    <Text style={styles.subtext}>{this.props.date}</Text>
                    <Text style={styles.greysubtext}>{this.props.time}</Text>
                    <Text style={styles.link}>Add to Calendar</Text>
                  </View>
                </View>

                <View style={styles.infoRow}>
                  <View style={{width: 30, height: 30}}>
                    <Ionicons name="md-pin" size={24} color="grey" />
                  </View>
                  <View>
                    <Text style={styles.subtext}>{this.props.location}</Text>
                    <Text style={styles.greysubtext}>{this.props.address}</Text>
                  </View>
                </View>
              </DialogContent>
            </Dialog>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  dialogTitle: {
    backgroundColor: 'rgba(255, 225, 136, 0.7)',
    paddingTop: 25,
  },
  dialogContainer: {
    flex: 1,
    height: WINDOW_HEIGHT,
    width: WINDOW_WIDTH,
  },
  infoRow: {
    padding: 15,
    flex: 1,
    flexDirection: 'row',
    maxWidth: WINDOW_WIDTH - 140,
  },
  header: {
    fontFamily: 'Avenir',
    fontSize: 30,
    lineHeight: 40,
  },
  subheader: {
    fontFamily: 'Avenir',
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 40,
  },
  plaintext:{
    fontFamily: 'Avenir',
    fontSize: 18,
    lineHeight: 25,
    fontWeight: '500'
  },
  subtext: {
    fontFamily: 'Avenir',
    fontSize: 16,
    lineHeight: 25,
  },
  greysubtext: {
    fontFamily: 'Avenir',
    color: 'grey',
    fontSize: 16,
    lineHeight: 25,
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
  },
  card: {
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'white',
    borderWidth: 0,
    width: WINDOW_WIDTH-50,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    elevation: 1, //for android
    height: WINDOW_HEIGHT - 100
  },
  top: {
    width: WINDOW_WIDTH-50,
    height: WINDOW_HEIGHT/3.8,
  },
  dialogImg: {
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT/3.8,
  },
  bottom: {
    alignItems: 'flex-start',
    height: WINDOW_HEIGHT/2,
    width: '100%',
    padding: 20
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
   },
});
