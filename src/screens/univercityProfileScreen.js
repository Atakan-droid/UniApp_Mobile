import axios from "axios";
import React, { Component, useState, useEffect } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Button,
  FlatList,
  ScrollView,
} from "react-native";
import { connect } from "react-redux";
import { getSingleUnivercity, getComments } from "../redux/actions/index";
import { MyAlert } from "../utilities/MyAlert";
import Card from "../components/card2";
import Icon from "../components/icon3";
import Details from "../components/detail";

const detailScreen = (props) => {
  const [sendComment, setComment] = useState({
    userId: "",
    univercityId: "",
    entry: "",
  });

  const [userFollowModel, setUserFollowModel] = useState({
    userId: props.loginId,
    uniId: props.route.params.univercityId,
  });
  const [updatedCommentList, setUpdatedCommentList] = useState(0);
  const [temporaryUserFollow, setTempUserFollow] = useState("");
  const [following, setFollowing] = useState(false);

  function postComment() {
    axios
      .post("http://192.168.2.199:45455/api/comments/add", sendComment)
      .then((response) => {
        setComment({ entry: "" });
        console.log(sendComment.entry);
        setUpdatedCommentList(updatedCommentList + 1);
      })
      .catch((error) => MyAlert(error.response.data.Errors[0].ErrorMessage));
  }
  function isUserFollowing() {
    axios
      .post(
        "http://192.168.2.199:45455/api/userfollows/checkifuserfollows",
        userFollowModel
      )
      .then((response) => {
        setFollowing(response.data.data.isFollowing);
        setTempUserFollow(response.data.data.userModel);
      })
      .catch((error) => console.log(error.response));
  }
  function onUnfollow() {
    axios
      .post(
        "http://192.168.2.199:45455/api/userfollows/delete",
        temporaryUserFollow
      )
      .then((response) => {
        setFollowing(false);
      })
      .catch((error) => console.log(error.response));
  }
  function onFollow() {
    axios
      .post("http://192.168.2.199:45455/api/userfollows/add", userFollowModel)
      .then((response) => {
        setFollowing(true);
      })
      .catch((error) => console.log(error.response));
  }
  useEffect(() => {
    props.getSingleUnivercity(props.route.params.univercityId);
    props.getComments(props.route.params.univercityId);
    isUserFollowing();
  }, [updatedCommentList, following]);

  return (
    <View style={styles.container}>
      <View style={styles.containerone}>
        <View style={styles.icon}></View>
        <Icon
          move="fadeInUp"
          image={{
            uri: `http://192.168.2.199:45455/${props.singleUnivercity.univercityImage}`,
          }}
          screenchange={() => this.change()}
        />
        <Details
          move="fadeInUp"
          title={props.singleUnivercity.univercityName}
          subtitle={
            props.singleUnivercity.univercityRector +
            " / " +
            props.singleUnivercity.cityName
          }
        />
        <View style={styles.followButton}>
          {following ? (
            <Button title="Takip Ediliyor" onPress={() => onUnfollow()} />
          ) : (
            <Button title="Takip Et" onPress={() => onFollow()} />
          )}
        </View>
        {/* <View style={styles.progress}>
          <Text style={styles.textone}>Açıklama</Text>
        </View>

        <Text style={styles.descText}>
          {props.singleUnivercity.univercityDescription}
        </Text> */}
      </View>

      <View style={styles.containertwo}>
        <View>
          <View style={styles.cards}></View>
        </View>
        <TextInput
          style={styles.textInputStyle}
          label="Yorum Yap"
          value={sendComment.entry}
          onChangeText={(e) =>
            setComment({
              userId: props.loginId,
              univercityId: props.route.params.univercityId,
              entry: e,
            })
          }
        />
        <View style={styles.commentButton}>
          <Button
            onPress={() => postComment()}
            title="Yorum Yap"
            color="#841584"
          />
        </View>

        <View style={styles.line}></View>
        <View style={styles.progress}>
          <Text style={styles.textone}>Yorumlar</Text>
        </View>
        <FlatList
          data={props.comments}
          keyExtractor={(x, i) => i.toString()}
          renderItem={({ item }) => (
            <View  style={styles.cards}>
              <Card
                move="fadeInUp"
                title={item.userName}
                subtitle={item.entry}
              />
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1.5,
    display: "flex",
    backgroundColor: "#303841",
  },
  containerone: {
    flex: 6,
    display: "flex",
  },
  commentButton: {
    padding: 20,
  },
  followButton: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    paddingTop: 40,
  },
  containertwo: {
    flex: 8,
    backgroundColor: "#fff",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  textInputStyle: {
    height: 40,
    borderRadius: 20,
    paddingLeft: 20,
    marginTop: 20,
    borderWidth: 1,
    marginStart: 20,
    marginEnd: 20,
    borderColor: "#009688",
    backgroundColor: "white",
  },
  descText: {
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 15,
    color: "#2D2D2D",
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
    paddingTop: 10,
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
    loginId: state.loginId,
    singleUnivercity: state.singleUnivercity,
    comments: state.comments,
  };
};

export default connect(mapStateToProps, { getSingleUnivercity, getComments })(
  detailScreen
);
