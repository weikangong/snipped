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
  header: {
    fontFamily: 'Avenir',
    fontSize: 30,
    lineHeight: 50,
  },
  subtitle: {
    fontFamily: 'Avenir',
    fontSize: 15,
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
