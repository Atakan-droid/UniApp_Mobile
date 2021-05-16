import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {connect} from 'react-redux';


import RegisterScreen from '../screens/registerScreen';
import LoginScreen from '../screens/loginScreen';
import TabNavigator from './navigation';
import DetailScreen from '../screens/univercityDetailScreen';


const Stack = createStackNavigator();

export class baseNavigation extends React.Component {

  
render(){

 
    if (!this.props.loginSuccess) {
      return (

        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Register" component={RegisterScreen}  />
            <Stack.Screen name="Login" component={LoginScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }

  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Main">
            <Stack.Screen name="Main" component={TabNavigator} options={{headerShown:false}}  />
            <Stack.Screen name="Detail" component={DetailScreen}/>
          </Stack.Navigator>
    </NavigationContainer>
  );
}
};
const mapStateToProps=state=>{
    return {
        loginId:state.loginId,
        loginSuccess:state.loginSuccess,
        loginMessage:state.loginMessage
    }
}
export default connect(mapStateToProps)(baseNavigation);
