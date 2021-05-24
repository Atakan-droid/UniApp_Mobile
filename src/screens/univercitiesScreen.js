import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import axios from "axios";
import Card from "../components/card";
import Icon from "../components/icon";

export class univercitiesScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      univercities: [],
      filteredUnivercities: [],
      search: "",
      color: "#136DF3",
      activestate: "rgba(255, 255, 255, 0.291821)",
    };
  }
  componentDidMount() {
    this.getUnivercities();
  }
  async getUnivercities() {
    let response = await axios
      .get("http://192.168.2.199:45455/api/univercities/getalldetail")
      .then((res) => {
        this.setState({
          univercities: res.data.data,
          filteredUnivercities: res.data.data,
        });
      })
      .catch((error) => {});
  }
  searchFilter = (text) => {
    if (text) {
      const newData = this.state.univercities.filter((item) => {
        const itemData = item.univercityName
          ? item.univercityName.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      this.setState({ filteredUnivercities: newData });
      this.setState({ search: text });
    } else {
      this.setState({ filteredUnivercities: this.state.univercities });
      this.setState({ search: text });
    }
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
            <Text style={styles.textone}>Ünivesiteler</Text>
          </View>
          <View style={styles.cards}>
            <FlatList
              data={this.state.filteredUnivercities}
              keyExtractor={(x, i) => i.toString()}
              renderItem={({ item }) => (
                <View>
                  <Card
                    style={{ width: 100, height: 100 }}
                    move="fadeInUp"
                    image={{
                      uri: `http://192.168.2.199:45455/${item.univercityImage}`,
                    }}
                    title={item.univercityName}
                    subtitle={item.univercityRector}
                    screenchange={() =>
                      this.props.navigation.navigate("Üniversite Detay", {
                        univercityId: item.univercityId,
                      })
                    }
                  />
                </View>
              )}
            />
          </View>

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
export default univercitiesScreen;
