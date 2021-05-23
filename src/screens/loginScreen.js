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
import {Button} from 'react-native-paper'
import { connect } from "react-redux";
import { getUserLogin } from "../redux/actions/index";

class loginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  submitHandler = () => {
    this.props.getUserLogin(this.state);
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Tekrar, Hoşgeldiniz</Text>
        <View style={{ height: "30%" }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View>
              <Image
                source={require("../images/uniapplogo.png")}
                style={{ width: 160, height: 200, marginHorizontal: 80 }}
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
          </ScrollView>
        </View>
        <Text
          style={{
            fontWeight: "bold",
            textAlign: "center",
            fontSize: 20,
            color: "rgba(0, 0, 0, 0.5)",
            marginVertical: 10,
          }}
        >
          Giriş Yap
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
              source={require("../images/lock.png")}
              style={{ width: 20, height: 20 }}
            />
          </View>

          <TextInput
            secureTextEntry={true}
            placeholder="Şifre Giriniz"
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
          />
          <View style={styles.titleone}></View>
        </View>
        <View style={{ marginTop: 50 }}>
          <Button  onPress={() => this.submitHandler()} >Giriş Yap</Button>
          <Text>Kayıtlı Değil Misiniz?</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Register")}
          >
            <Text style={{ fontWeight: "bold" }}>Kayıt Olun</Text>
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
    fontSize: 25,
    fontWeight: "bold",
    position: "absolute",
    top: 80,
  },
  subheader: {
    position: "absolute",
    top: 100,
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
  titleone: {
    flex: 3,
    alignItems: "center",
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
  googlebox: {
    height: 50,
    width: 130,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 5,
    top: 600,
    left: 25,
    position: "absolute",
    display: "flex",
    flexDirection: "row",
  },
  facebookbox: {
    height: 50,
    width: 130,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 5,
    top: 600,
    left: 205,
    position: "absolute",
    display: "flex",
    flexDirection: "row",
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
    loginId: state.loginId,
    loginSuccess: state.loginSuccess,
    loginMessage: state.loginMessage,
  };
};
export default connect(mapStateToProps, { getUserLogin })(loginScreen);
