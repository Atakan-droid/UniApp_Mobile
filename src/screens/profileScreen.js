import React from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import { Button } from "react-native-paper";
import { connect } from "react-redux";
import { clearData } from "../redux/actions/index";
import axios from "axios";
import Card from "../components/card3";
import Icon from "../components/icon3";
import Details from "../components/detail";
export class profileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userFollowingUnivercities: [],
      seed: 1,
      refreshing: false,
      color: "#136DF3",
      activestate: "rgba(255, 255, 255, 0.291821)",
    };
  }
  componentDidMount() {
    this.getUsersFollows();
  }
  async getUsersFollows() {
    let response = await axios
      .get(
        `http://192.168.2.199:45455/api/userfollows/getusersfollowingunivercities?userId=${this.props.loginId}`
      )
      .then((res) => {
        this.setState({
          userFollowingUnivercities: res.data.data,
          refreshing: false,
        });
      })
      .catch((error) => {
        this.setState({ refreshing: false });
      });
  }
  handleRefresh = () => {
    this.setState(
      {
        seed: this.state.seed + 1,
        refreshing: true,
      },
      () => {
        this.getUsersFollows();
      }
    );
  };
  userExit() {
    this.props.clearData();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerone}>
          <View style={styles.icon}></View>
          <Icon
            move="fadeInUp"
            image={require("../images/uniapplogo.png")}
            screenchange={() => this.change()}
          />
          <Details
            move="fadeInUp"
            title={
              this.props.UserModel.firstName +
              " " +
              this.props.UserModel.lastName
            }
            subtitle={this.props.UserModel.email}
          />
          <View style={styles.exitButton}>
          <Button style={{backgroundColor:'white'}} onPress={() => this.userExit()}><Text style={{color:'red'}}>çıkış Yap</Text></Button>
          </View>
        </View>
        <View style={styles.containertwo}>
          <View style={styles.progress}>
            <Text style={styles.textone}>Takip Ettiklerim</Text>
          </View>
          <FlatList
            data={this.state.userFollowingUnivercities}
            refreshing={this.state.refreshing}
            onRefresh={this.handleRefresh}
            keyExtractor={(x, i) => i.toString()}
            renderItem={({ item }) => (
              <View style={styles.cards}>
                <Card
                  move="bounceInLeft"
                  image={{
                    uri: "http://192.168.2.199:45455/" + item.image,
                  }}
                  title={item.univercityName}
                  screenchange={() =>
                    this.props.navigation.navigate("Üniversite Detay", {
                      univercityId: item.univercityId,
                    })
                  }
                />
                <Button />
              </View>
            )}
          />
    
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1.5,
    display: "flex",
    backgroundColor: "#303841",
  },
  containerone: {
    flex: 4,
    display: "flex",
  },
  containertwo: {
    flex: 6,
    backgroundColor: "#fff",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  exitButton:{
    padding:20
  },
  boxone: {
    flex: 5,
  },
  boxtwo: {
    flex: 7,
    marginHorizontal: 35,
  },
  boxthree: {
    flex: 2.5,
  },
  boxfour: {
    flex: 0.5,
    color: "#fff",
    flexDirection: "row",
  },
  name: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 15,
    color: "#fff",
  },
  line: {
    width: 100,
    height: 4,
    backgroundColor: "#2D2D2D",
    borderRadius: 2,
    marginVertical: 25,
    left: 150,
  },
  progress: {
    left: 50,
  },
  textone: {
    fontSize: 25,
    color: "#2D2D2D",
    letterSpacing: -0.5,
    fontWeight: "bold",
    paddingBottom: 10,
    paddingTop: 30,
  },
  cards: {
    flex: 1,
    display: "flex",
    marginTop: 10,
    marginHorizontal: 30,
  },
  icon: {
    flex: 0.5,
    display: "flex",
    marginHorizontal: 30,
  },
});
const mapStateToProps = (state) => {
  return {
    UserModel: state.user,
    loginId: state.loginId,
  };
};

export default connect(mapStateToProps, { clearData })(profileScreen);
