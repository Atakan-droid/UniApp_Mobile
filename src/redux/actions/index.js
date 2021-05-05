import axios from "axios";
import {MyAlert} from '../../utilities/MyAlert';


export const clearData=()=> {
  return ((dispatch) => {
      dispatch({type: 'CLEAR_DATA'})
  })
}
export const getUserRegister = (userObj) => (dispatch) => {
  axios
    .post("http://192.168.2.199:45455/api/auth/register", userObj)
    .then((response) => {
      dispatch({
        type: "USER_REGISTER_SUCCESS",
        payload: response.data.success,
        message: data.message,
      });
    })
    .catch((error)=>
    MyAlert(error.response.data.Errors[0].ErrorMessage)
 );
    
}
export const getUserLogin = (userObj) => (dispatch) => {
  axios
    .post("http://192.168.2.199:45455/api/auth/login", userObj)
    .then((response) => {
      dispatch({
        type: "USER_LOGIN_SUCCESS",
        payload: response.data.data.userId,
        success: response.data.success,
        message: response.data.message,
      });
    })
    .catch((error)=>
    MyAlert(error.response.data.Errors[0].ErrorMessage)
 );
}
export const getUserDetails = (userId) => (dispatch) => {
  axios
    .get(`http://192.168.2.199:45455/api/users/getbyid?Id=${userId}`)
    .then((response) => {
      dispatch({
        type: "USER_DETAIL_SUCCESS",
        payload: response.data.data,
      })
    })
    .catch((error)=>
    MyAlert(error.response.data.Errors[0].ErrorMessage)
 );
   
}
export const getSingleUnivercity = (univercityId) => (dispatch) => {
  axios
    .get(`http://192.168.2.199:45455/api/univercities/getbyiddetail?Id=${univercityId}`)
    .then((response) => {
      dispatch({
        type: "SINGLE_UNIVERCITY_SUCCESS",
        payload: response.data.data,
        message: response.data.message,
      });
    })
    .catch((error)=>
    MyAlert(error.response.data.Errors[0].ErrorMessage)
 );
}
export const getComments = (univercityId) => (dispatch) => {
  axios
    .get( `http://192.168.2.199:45455/api/comments/getbyunivercityid?Id=${univercityId}`)
    .then((response) => {
      dispatch({
        type: "COMMENTS_GET_SUCCESS",
        payload: response.data.data,
        message: response.data.message,
      });
    })
    .catch((error)=>
    MyAlert(error.response.data.Errors[0].ErrorMessage)
 );
}