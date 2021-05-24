import React from "react";
import { View, Text, ScrollView, StyleSheet, FlatList } from "react-native";
import Card from "../components/card2";
import Icon from "../components/icon";
import axios from "axios";
export class postScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      filteredPosts: [],
      search: "",
      seed: 1,
      refreshing: false,
      color: "#136DF3",
      activestate: "rgba(255, 255, 255, 0.291821)",
    };
  }
  componentDidMount() {
    this.getPosts();
  }
  async getPosts() {
    let response = await axios
      .get("http://192.168.2.199:45455/api/posts/getalldetail")
      .then((res) => {
        this.setState({
          posts: res.data.data,
          filteredPosts: res.data.data,
          refreshing: false,
        });
      })
      .catch((error) => {
        this.setState({ refreshing: false });
      });
  }
  searchFilter = (text) => {
    if (text) {
      const newData = this.state.posts.filter((item) => {
        const itemData = item.uniName
          ? item.uniName.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      this.setState({ filteredPosts: newData });
      this.setState({ search: text });
    } else {
      this.setState({ filteredPosts: this.state.posts });
      this.setState({ search: text });
    }
  };
  handleRefresh = () => {
    this.setState(
      {
        refreshing: true,
        seed: this.state.seed + 1,
      },
      () => {
        this.getPosts();
      }
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerone}>
          <View style={styles.icon}></View>
          <Icon
            move="fadeInUp"
            search={this.search}
            onChangeText={(text) => this.searchFilter(text)}
          />
        </View>
        <View style={styles.containertwo}>
     
          <View style={styles.progress}>
            <Text style={styles.textone}>Paylaşımlar</Text>
          </View>
          <FlatList
            data={this.state.filteredPosts}
            keyExtractor={(x, i) => i.toString()}
            refreshing={this.state.refreshing}
            onRefresh={this.handleRefresh}
            renderItem={({ item }) => (
              <View style={styles.cards}>
                <Card
                  move="fadeInUp"
                  title={item.uniName}
                  subtitle={item.uniPost}
                  
                />
              </View>
            )}
          />

          <View>
          
          </View>
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
    flex: 1.5,
    display: "flex",
  },
  containertwo: {
    flex: 6,
    backgroundColor: "#fff",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
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
    paddingTop:30,
    color: "#2D2D2D",
    letterSpacing: -0.5,
    fontWeight: "bold",
    paddingBottom: 10,
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
export default postScreen;
