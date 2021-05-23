import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import * as Animatable from "react-native-animatable";
export default class Card extends React.Component {
  render() {
    return (
      <Animatable.View
        animation={this.props.move}
        duration={1500}
        style={styles.cardone}
      >
        
        <View style={styles.textInput}>
          <TextInput
            value={this.props.search}
            placeholder="Lütfen İfade Giriniz"
            onChangeText={this.props.onChangeText}
          />
        </View>
      </Animatable.View>
    );
  }
}
const styles = StyleSheet.create({
  cardone: {
    flex: 1,
    marginBottom: 15,
    display: "flex",
    flexDirection: "row",
    alignItems:'center',
    justifyContent:'center'
  },
  textInput: {
    width: 320,
    height: 50,
    backgroundColor: "#F2F2FF",
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
    
  },
  cardtwo: {
    flex: 1,
  },
  box1: {
    flex: 0.8,
    paddingHorizontal: 12,
  },
  box2: {
    flex: 1,
  },
  box3: {
    flex: 1,
  },
});
