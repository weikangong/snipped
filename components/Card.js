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
          <Image style={styles.thumbnail} source={{uri: this.props.image}} />
          <Text style={styles.text}>This is card {this.props.name}</Text>
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
  card: {
    alignItems: 'center',
    borderRadius: 5,
    overflow: 'hidden',
    borderColor: 'grey',
    backgroundColor: 'white',
    borderWidth: 1,
    elevation: 1,
  },
  thumbnail: {
    width: WINDOW_WIDTH-50,
    height: WINDOW_HEIGHT/1.5,
  },
  text: {
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10
  },
  container: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
   },
});
