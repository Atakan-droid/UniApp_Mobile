import React, { useEffect } from "react";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { connect } from "react-redux";
import { getUserDetails } from "../redux/actions/index";

import UnivercityScreen from "../screens/univercitiesScreen";
import ProfileScreen from "../screens/profileScreen";
import postScreen from "../screens/postsScreen";

const Tab = createBottomTabNavigator();

const MainNavigation = (props) => {
  useEffect(() => {
    props.getUserDetails(props.loginId);
  }, []);
  return (
    <Tab.Navigator initialRouteName="Posts">
      <Tab.Screen
        name="Posts"
        component={postScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Univercities"
        component={UnivercityScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="emoticon-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const mapStateToProps = (state) => {
  return {
    loginId: state.loginId,
  };
};
export default connect(mapStateToProps, { getUserDetails })(MainNavigation);
