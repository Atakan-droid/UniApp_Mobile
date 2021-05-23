import React, { Component } from 'react'
import {Text,View} from 'react-native'
import {Button} from 'react-native-paper'
import { connect } from "react-redux";
import { clearData } from "../redux/actions/index";

import axios from "axios";
export class profileScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
          userFollowingUnivercities:[],
          seed: 1,
          refreshing: false,
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
            seed:this.state.seed+1,
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
            <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
            <Button  onPress={() => this.userExit()}>Çıkış yap</Button>
        </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      UserModel: state.user,
      loginId: state.loginId,
    };
  };
 
  export default connect(mapStateToProps, { clearData })(profileScreen);
