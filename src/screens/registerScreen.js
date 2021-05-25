import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Button } from "react-native-paper";
import { connect } from "react-redux";
import { getUserRegister } from "../redux/actions/index";
import { MyAlert } from "../utilities/MyAlert";

class registerScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    };
  }

  submitHandler() {
    try {
      
       this.props.getUserRegister(this.state)

    } catch (error) {
      console.log(this.props.message)
    } finally{
      MyAlert(this.props.message)
      this.props.navigation.navigate("Login")
    }
  
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.subheader}>Hoş Geldiniz</Text>
        <View style={{ height: "30%" }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View>
              <Image
                source={require("../images/uniapplogo2.png")}
                style={{
                  width: 200,
                  height: 200,
                  marginHorizontal: 100,
                  marginRight: 80,
                }}
              />
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 14,
                  color: "rgba(0, 0, 0, 0.5)",
                  marginVertical: 10,
                }}
              >
                Üniversite Rehberiniz
              </Text>
            </View>
            <View>
              <Image
                source={require("../images/1.jpg")}
                style={{ width: 300, height: 200, marginHorizontal: 80 }}
              />
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 14,
                  color: "rgba(0, 0, 0, 0.5)",
                  marginVertical: 10,
                }}
              >
                Üniversiteleri İncele
              </Text>
            </View>
            <View>
              <Image
                source={require("../images/2.jpg")}
                style={{ width: 275, height: 200, marginHorizontal: 80 }}
              />
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 14,
                  color: "rgba(0, 0, 0, 0.5)",
                  marginVertical: 10,
                }}
              >
                Yorumlarınla düşüncelerini belirt
              </Text>
            </View>
          </ScrollView>
        </View>
        <View>
          <Text
            style={{
              fontWeight: "bold",
              textAlign: "center",
              fontSize: 20,
              color: "rgba(0, 0, 0, 0.5)",
              marginVertical: 10,
            }}
          >
            Kayıt Ol
          </Text>
          <View style={styles.inputone}>
            <View style={styles.iconone}>
              <Image
                source={require("../images/user1.png")}
                style={{ width: 20, height: 20 }}
              />
            </View>
            <TextInput
              placeholder="Email Giriniz"
              value={this.state.email}
              onChangeText={(email) => this.setState({ email })}
            />
            <View style={styles.titleone}></View>
          </View>
          <View style={styles.inputtwo}>
            <View style={styles.iconone}>
              <Image
                source={require("../images/user1.png")}
                style={{ width: 20, height: 20 }}
              />
            </View>

            <TextInput
              placeholder="Adınız"
              value={this.state.firstName}
              onChangeText={(firstName) => this.setState({ firstName })}
            />
            <View style={styles.titleone}></View>
          </View>
        </View>
        <View style={styles.inputthree}>
          <View style={styles.iconone}>
            <Image
              source={require("../images/user1.png")}
              style={{ width: 20, height: 20 }}
            />
          </View>
          <TextInput
            placeholder="Soyadınız"
            value={this.state.lastName}
            onChangeText={(lastName) => this.setState({ lastName })}
          />
          <View style={styles.titleone}></View>
        </View>
        <View style={styles.input4}>
          <View style={styles.iconone}>
            <Image
              source={require("../images/lock.png")}
              style={{ width: 20, height: 20 }}
            />
          </View>

          <TextInput
            secureTextEntry={true}
            placeholder="Şifre"
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
          />
          <View style={styles.titleone}></View>
        </View>

        <View style={{ marginTop: 50, top: 30 }}>
          <Button
            onPress={() => {
              this.submitHandler();
            }}
          >
            Kayıt Ol
          </Button>
          <Text>Kayıtlı mısınız?</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Login")}
          >
            <Text style={{ fontWeight: "bold" }}>Giriş Yapın</Text>
          </TouchableOpacity>
          {this.props.loginSuccess == true ? (
            <Button>
              {this.props.loginMessage}+{this.props.loginId}
            </Button>
          ) : false ? (
            <Text>Hatalı Giriş</Text>
          ) : null}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 35,
    fontWeight: "bold",
    position: "absolute",
    top: 60,
  },
  subheader: {
    position: "absolute",
    top: 50,
    fontWeight: "bold",
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
    color: "rgba(0, 0, 0, 0.5)",
  },
  inputone: {
    width: 320,
    height: 50,
    backgroundColor: "#F2F2FF",
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
  },
  inputtwo: {
    width: 320,
    height: 50,
    backgroundColor: "#F2F2FF",
    borderRadius: 5,
    top: 20,
    display: "flex",
    flexDirection: "row",
  },
  inputthree: {
    width: 320,
    height: 50,
    backgroundColor: "#F2F2FF",
    borderRadius: 5,
    top: 40,
    display: "flex",
    flexDirection: "row",
  },
  input4: {
    width: 320,
    height: 50,
    backgroundColor: "#F2F2FF",
    borderRadius: 5,
    top: 60,
    display: "flex",
    flexDirection: "row",
  },
  titleone: {
    flex: 5,
  },
  iconone: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.5,
  },
  btn: {
    top: 35,
    alignSelf: "center",
    width: 320,
    height: 55,
    backgroundColor: "#EB2075",
    borderRadius: 10,
  },
  orheader: {
    alignSelf: "center",
    top: 55,
    color: "rgba(0, 0, 0, 0.5)",
  },
  icon: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
});
const mapStateToProps = (state) => {
  return {
    register: state.register,
    message: state.message,
  };
};
export default connect(mapStateToProps, { getUserRegister })(registerScreen);
